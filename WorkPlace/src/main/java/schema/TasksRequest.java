package schema;

public class TasksRequest extends Request {
    private Long assignerId;
    private Long assigneeId;
    private Long id;
    private TaskInfo info;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TasksRequest() {}

    public Long getAssignerId() {
        return assignerId;
    }
    public void setAssignerId(Long assignerId) {
        this.assignerId = assignerId;
    }
    public Long getAssigneeId() {
        return assigneeId;
    }
    public void setAssigneeId(Long assigneeId) {
        this.assigneeId = assigneeId;
    }

    public TaskInfo getInfo() {
        return info;
    }

    public void setInfo(TaskInfo info) {
        this.info = info;
    }

}