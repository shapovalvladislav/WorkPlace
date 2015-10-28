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

import schema.EmployeesRequest;
import schema.EmployeesTasksRequest;
import schema.YearTasksRequest;
import service.EmployeesService;
import service.TasksService;
import service.TokenService;

@Path("/statistics")
public class Statistics {

    @Context
    private HttpServletRequest httpRequest;

    @Context
    private UriInfo uri;

    @POST
    @Path("/employees")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getEmployees(EmployeesTasksRequest req) {
        Object info;
        rest.Response response = new rest.Response();

        if (req == null) {
            response.setSuccess(false);
            return response;
        }
        String token = TokenService.getToken(httpRequest);
        Map<String, Object> tokenInfo = TokenService.getInfo(token);
        if (tokenInfo.containsKey("userId")) {
            req.setBossId((Long) tokenInfo.get("userId"));
        }
        info = TasksService.getEmployeesTasks(req);

        response.setSuccess(info != null);
        response.setInfo(info);

        return response;
    }

    @POST
    @Path("/year")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getTasksPerYear(YearTasksRequest req) {
        Object info;
        rest.Response response = new rest.Response();

        if (req == null) {
            response.setSuccess(false);
            return response;
        }

        info = TasksService.getYearTasks(req);

        response.setSuccess(info != null);
        response.setInfo(info);

        return response;
    }

}