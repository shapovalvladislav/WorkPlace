package rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.UriInfo;

import schema.AuthRequest;
import schema.AuthResponse;
import service.AuthService;
import service.TokenService;


@Path("/auth")
public class Auth {

     @Context
     private HttpServletRequest httpRequest;

     @Context
     private UriInfo uri;

        @POST
        @Path("/validate")
        @Consumes(MediaType.APPLICATION_JSON)
        @Produces(MediaType.APPLICATION_JSON)
        public Object validate(Object req) {
            rest.Response response = new rest.Response();
            String token = TokenService.getToken(httpRequest);

            if (req == null || token == null) {
                response.setSuccess(false);
                return javax.ws.rs.core.Response.status(401).entity(response).build();
            }

            {
              if(TokenService.validate(token)) {
                  response.setSuccess(true);
                  return javax.ws.rs.core.Response.status(200).entity(response).build();
              }

              response.setSuccess(false);
              // Remove cookie (max-age = 0)
              NewCookie tokenCookie = new NewCookie("token", null, "/", uri.getBaseUri().getHost(), null, 0, false);
              return javax.ws.rs.core.Response.status(401).entity(response).cookie(tokenCookie).build();
            }
        }

    @POST
    @Path("/request")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object getAuthDigest(AuthRequest req) {
        rest.Response response = new rest.Response();

        if (req == null) {
            response.setSuccess(false);
            return response;
        }

        AuthResponse authResponse = new AuthResponse();
        authResponse.setNonce(AuthService.getNonce());

        response.setInfo(authResponse);
        response.setSuccess(true);

        return response;
    }

    @POST
    @Path("/digest")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Object sendCalculatedHash(AuthRequest req) {
        rest.Response response = new rest.Response();

        if (req == null || req.getNonce() == null || req.getLogin() == null
                        || req.getDigest() == null)
        {
            response.setSuccess(false);
            return response;
        }

        String token = null;

        // Calculated digest by client
        String clientDigest = req.getDigest();
        // Check real credentials and get the same hash
        String serverDigest = AuthService.getMD5(req.getLogin() + req.getNonce() + "123456");
        if (clientDigest.equals(serverDigest)) {
            AuthResponse authResponse = new AuthResponse();
            Map<String, Object> tokenInfo = new HashMap<String, Object>();
            // Temporary until LDAP is ready ********
            tokenInfo.put("userId", 1);
            tokenInfo.put("name", "Ivan");
            tokenInfo.put("surname", "Ivanov");
            tokenInfo.put("email", "ivanov@gmail.com");
            // ***************************************
            token = TokenService.generate(tokenInfo);
            authResponse.setToken(token);
            response.setInfo(authResponse);
            response.setSuccess(true);
        } else {
            response.setSuccess(true);
            return javax.ws.rs.core.Response.status(401).entity(response).build();
        }

        NewCookie tokenCookie = new NewCookie("token", token, "/", uri.getBaseUri().getHost(), null, Integer.MAX_VALUE, false);

        return javax.ws.rs.core.Response.status(200).entity(response).
                cookie(tokenCookie).build();
    }

}