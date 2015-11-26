package schema;

import java.util.Date;

public class TaskInfo {
    private String title;
    private String comment;
    private Date expectedDate;
    private int priority;
    private int status;
    private Long performerId;

    public TaskInfo() {

    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getExpectedDate() {
        return expectedDate;
    }

    public void setExpectedDate(Date expectedDate) {
        this.expectedDate = expectedDate;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

    public void setPerformerId(Long performerId) {
        this.performerId = performerId;
    }

    public Long getPerformerId() {
        return performerId;
    }

}
