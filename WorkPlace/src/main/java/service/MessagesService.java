package service;

import dao.DaoFactory;
import dao.MessagesDAO;
import domain.Message;

public class MessagesService {

    public static Message createMessage(Message msg) {
        MessagesDAO msgDAO = DaoFactory.getMessagesDAO();
        return msgDAO.save(msg);
    }


}
