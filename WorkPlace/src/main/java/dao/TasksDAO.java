package dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import domain.Task;
import rest.Tasks;
import schema.EmployeesTasks;
import schema.EmployeesTasksRequest;
import schema.MonthTasks;
import schema.TasksRequest;
import schema.YearTasksRequest;

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


    public List<MonthTasks> getYearTasks(YearTasksRequest req) {
        Session session = getFactory().openSession();
        String sql = "select name, COUNT(*) as Count from Tasks t "
                + "JOIN Months m ON MONTH(t.actualFinishDate) = m.id "
                + "where performer_id = :performer_id and YEAR(t.actualFinishDate) = :year "
                + "AND t.actualFinishDate " + (req.getCompleted() == 1 ? "<=" : ">") + " t.expectedFinishDate "
                + "group by m.id";
        SQLQuery query = session.createSQLQuery(sql);

        query.setParameter("performer_id", req.getPerformerId());
        query.setParameter("year", req.getYear());
        List<Object[]> rows = query.list();
        List<MonthTasks> monthTasks = new ArrayList<MonthTasks>();
        for(Object[] row : rows){
            MonthTasks t = new MonthTasks();
            t.setMonth(row[0].toString());
            t.setCount(Integer.parseInt(row[1].toString()));
            monthTasks.add(t);
        }

        return monthTasks;
    }

    public List<EmployeesTasks> getEmployeesTasks(EmployeesTasksRequest req) {
        Session session = getFactory().openSession();
        String sql = "select count(*), concat(e.name, ' ', e.surname) as fullname "
                + "from Tasks t JOIN Employees e ON t.performer_id = e.id "
                + "WHERE e.boss_id = :bossId "
                + "AND t.actualFinishDate " + (req.getCompleted() == 1 ? "<=" : ">") + " t.expectedFinishDate "
                + "and t.actualFinishDate between :fromDate and :toDate group by e.id";

        SQLQuery query = session.createSQLQuery(sql);
        query.setParameter("bossId", req.getBossId());
        query.setParameter("fromDate", req.getFromDate());
        query.setParameter("toDate", req.getToDate());
        List<Object[]> rows = query.list();
        List<EmployeesTasks> employeesTasks = new ArrayList<EmployeesTasks>();
        for(Object[] row : rows){
            EmployeesTasks t = new EmployeesTasks();
            t.setCount(Integer.parseInt(row[0].toString()));
            t.setFullname(row[1].toString());
            employeesTasks.add(t);
        }

        return employeesTasks;
    }

}
