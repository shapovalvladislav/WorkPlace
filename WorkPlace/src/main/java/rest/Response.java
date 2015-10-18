package rest;

public class Response {
    private boolean success;
    private String msg;
    private Object info;

    public Response() {}

    public boolean isSuccess() {
        return success;
    }
    public void setSuccess(boolean success) {
        this.success = success;
    }
    public Object getInfo() {
        return info;
    }
    public void setInfo(Object info) {
        this.info = info;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
}
