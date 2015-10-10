package schema;

public class TasksRequest {
    private Long assignerId;
    private Long assigneeId;
    private Long id;

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

}