package rest;

import java.util.Map;
import java.util.Date;
import java.sql.Timestamp;
import java.util.Set;
import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import schema.TasksRequest;
import service.TasksService;
import service.PostsService;
import service.TokenService;
import domain.Task;
import domain.Post;

@Path("/tasks")
public class Tasks {

    @Context
    private HttpServletRequest httpRequest;

    @Context
    private UriInfo uri;

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getTasks(TasksRequest req) {
        Object info;
        rest.Response response = new rest.Response();
        String token = TokenService.getToken(httpRequest);

        if (req == null || token == null) {
            response.setSuccess(false);
            return response;
        }

        Map<String, Object> tokenInfo = TokenService.getInfo(token);

        if (tokenInfo.containsKey("userId")) {
            if (req.getAction().equals("getIncoming")) {
                req.setAssigneeId((Long) tokenInfo.get("userId"));
            } else if (req.getAction().equals("getOutgoing")) {
                req.setAssignerId((Long) tokenInfo.get("userId"));
            } else if (req.getAction().equals("add")) {
                Task task = new Task();
                task.setCreatedById((Long) tokenInfo.get("userId"));
                task.setPerformerId(req.getInfo().getPerformerId());
                Date givenDate = new Date();
                task.setGivenDate(new Timestamp(givenDate.getTime()));
                task.setExpectedFinishDate(new Timestamp(req.getInfo().getExpectedDate().getTime()));
                task.setTitle(req.getInfo().getTitle());
                task.setPriority(req.getInfo().getPriority());
                task.setStatus(req.getInfo().getStatus());
                Task newTask = TasksService.createTask(task);
                Post post = new Post();
                post.setContent(req.getInfo().getComment());
                post.setDate(givenDate);
                post.setFromId((Long) tokenInfo.get("userId"));
                post.setTaskId(newTask.getId());
                PostsService.createPost(post);
                return response;
            }
        }

        if (req.getId() != null) {
            info = TasksService.findById(req.getId());
        } else {
            info = TasksService.getList(req);
        }

        response.setSuccess(info != null);
        response.setInfo(info);

        return response;
    }

}