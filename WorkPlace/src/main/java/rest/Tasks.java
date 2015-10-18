package rest;

import java.util.Map;

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
import service.TokenService;

@Path("/tasks")
public class Tasks {

    @Context
    private HttpServletRequest httpRequest;

    @Context
    private UriInfo uri;

    @POST
    @Path("/get/in")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getIncommingTasks(TasksRequest req) {
        Object info;
        rest.Response response = new rest.Response();
        String token = TokenService.getToken(httpRequest);

        if (req == null || token == null) {
            response.setSuccess(false);
            return response;
        }

        Map<String, Object> tokenInfo = TokenService.getInfo(token);
        if (tokenInfo.containsKey("userId")) {
            req.setAssigneeId((Long) tokenInfo.get("userId"));
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

    @POST
    @Path("/get/out")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getOutgoingTasks(TasksRequest req) {
        Object info;
        rest.Response response = new rest.Response();
        String token = TokenService.getToken(httpRequest);

        if (req == null || token == null) {
            response.setSuccess(false);
            return response;
        }

        Map<String, Object> tokenInfo = TokenService.getInfo(token);
        if (tokenInfo.containsKey("userId")) {
            req.setAssignerId((Long) tokenInfo.get("userId"));
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