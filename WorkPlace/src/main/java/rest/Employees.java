package rest;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import schema.EmployeesRequest;
import service.EmployeesService;

@Path("/employees")
public class Employees {

	 @Context
	 private HttpServletRequest httpRequest;

	 @Context
	 private UriInfo uri;

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

}