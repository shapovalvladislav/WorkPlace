package dao;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import domain.Task;
import rest.Tasks;
import schema.TasksRequest;

public class TasksDAO extends GenericDAO<Task> {

    public TasksDAO(SessionFactory factory) {
        super(Task.class, factory);
    }

    public Task getById(long id) {
        return super.findById(id);
    }

    public List<Task> getList(TasksRequest req) {
        Session session = getFactory().openSession();
        Criteria cr = session.createCriteria(Task.class);
        if (req.getAssigneeId() != null) {
            cr.add(Restrictions.eq("performer_id", req.getAssigneeId()));
        }
        if (req.getAssignerId() != null) {
            cr.add(Restrictions.eq("createdBy_id", req.getAssignerId()));
        }

        return cr.list();
    }

    public Task createTask(Task task) {
        return save(task);
    }


}
