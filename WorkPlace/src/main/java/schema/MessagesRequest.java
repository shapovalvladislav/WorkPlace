package schema;

public class MessagesRequest extends Request {

    public MessagesRequest() {

    }

    private MessageInfo info;

    public MessageInfo getInfo() {
        return info;
    }

    public void setInfo(MessageInfo info) {
        this.info = info;
    }

}
