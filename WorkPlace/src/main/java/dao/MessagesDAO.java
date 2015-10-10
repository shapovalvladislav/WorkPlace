package dao;

import java.util.HashMap;
import java.util.List;
import org.hibernate.SessionFactory;
import domain.Message;


public class MessagesDAO extends GenericDAO<Message> {

	public MessagesDAO(SessionFactory factory) {
		super(Message.class, factory);
	}
	
	public List<Message> findByTask(Long task_id) {
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("task_id", task_id);
		
		return executeQuery("from Messages where task = :task_id", false, map);
	}
	
	public Message createMessage(Message msg) {
		return save(msg);
	}
}
