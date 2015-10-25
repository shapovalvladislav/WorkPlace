package service;

import java.util.List;

import dao.DaoFactory;
import dao.MessagesDAO;
import domain.Message;
import schema.MessagesRequest;

public class MessagesService {

    public static Message createMessage(MessagesRequest req) {
        MessagesDAO msgDAO = DaoFactory.getMessagesDAO();
        Message msg = new Message();

        msg.setFromId(req.getInfo().getEmployee1());
        msg.setToId(req.getInfo().getEmployee2());
        msg.setContent(req.getInfo().getContent());
        msg.setDate(req.getInfo().getDate());

        return msgDAO.save(msg);
    }

    public static List<Message> getList(MessagesRequest req) {
        MessagesDAO dao = DaoFactory.getMessagesDAO();
        List<Message> messages = dao.getList(req);

        return messages;
    }

}
