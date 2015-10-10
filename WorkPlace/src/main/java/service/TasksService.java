package service;

import java.util.List;

import dao.DaoFactory;
import dao.TasksDAO;
import domain.Task;
import schema.TasksRequest;

public class TasksService {

    public static Task createTask(Task task) {
        TasksDAO dao = DaoFactory.getTasksDAO();
        return dao.save(task);
    }

    public static Task findById(long id) {
        TasksDAO dao = DaoFactory.getTasksDAO();
        return dao.findById(id);
    }

    public static List<Task> getList(TasksRequest req) {
        TasksDAO dao = DaoFactory.getTasksDAO();
        List<Task> tasks = dao.getList(req);

        return tasks;
    }

}
