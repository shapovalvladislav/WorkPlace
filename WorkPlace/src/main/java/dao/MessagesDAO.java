package dao;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import domain.Employee;
import domain.Message;
import schema.EmployeesRequest;
import schema.MessagesRequest;


public class MessagesDAO extends GenericDAO<Message> {

    public MessagesDAO(SessionFactory factory) {
        super(Message.class, factory);
    }

    public List<Message> getList(MessagesRequest req) {
        Session session = getFactory().openSession();
        String hql = "FROM Message WHERE (from_id = :employee1 and to_id = :employee2) or (from_id = :employee2 and to_id = :employee1) order by date";
        Query query = session.createQuery(hql);
        query.setParameter("employee1", req.getInfo().getEmployee1());
        query.setParameter("employee2", req.getInfo().getEmployee2());

        return query.list();
    }

    public Message createMessage(Message msg) {
        return save(msg);
    }
}
