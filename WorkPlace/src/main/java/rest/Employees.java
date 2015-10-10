package rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import domain.Task;
import schema.EmployeesRequest;
import service.EmployeesService;

@Path("/employees")
public class Employees {

    @POST
    @Path("/get")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getEmployees(EmployeesRequest req) {
        Object info;
        rest.Response response = new rest.Response();

        if (req == null) {
            response.setSuccess(false);
            return response;
        }

        if (req.getId() != null) {
            info = EmployeesService.findById(req.getId());
        } else {
            info = EmployeesService.getList(req);
        }

        response.setSuccess(info != null);
        response.setInfo(info);

        return response;
    }

    @POST
    @Path("/post")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createTask(Task task) {

        String result = "";
        return Response.status(201).entity(result).build();

    }

}