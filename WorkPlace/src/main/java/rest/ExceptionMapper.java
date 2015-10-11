package rest;

import javax.ws.rs.ext.Provider;

@Provider
public class ExceptionMapper implements javax.ws.rs.ext.ExceptionMapper<Exception> {
    public javax.ws.rs.core.Response toResponse(Exception exception) {
        exception.printStackTrace();
        return javax.ws.rs.core.Response.status(500).build();
    }
}