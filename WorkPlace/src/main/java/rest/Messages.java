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

import schema.MessagesRequest;
import service.MessagesService;
import service.TokenService;

@Path("/messages")
public class Messages {

    @Context
    private HttpServletRequest httpRequest;

    @Context
    private UriInfo uri;

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getMessages(MessagesRequest req) {
        Object info = null;
        rest.Response response = new rest.Response();

        String token = TokenService.getToken(httpRequest);

        if (req == null || token == null) {
            response.setSuccess(false);
            return response;
        }

        Map<String, Object> tokenInfo = TokenService.getInfo(token);
        if (tokenInfo.containsKey("userId")) {
            req.getInfo().setEmployee1((Long) tokenInfo.get("userId"));
        }

        if (req.getAction().equals("get")) {
            info = MessagesService.getList(req);
        } else if (req.getAction().equals("add")) {
            MessagesService.createMessage(req);
        }


        response.setSuccess(info != null);
        response.setInfo(info);

        return response;
    }

}