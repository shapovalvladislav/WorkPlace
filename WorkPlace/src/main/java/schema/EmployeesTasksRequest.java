package schema;

import java.util.Date;

public class EmployeesTasksRequest {
    private Date fromDate;
    private Date toDate;
    private int completed;
    private Long bossId;

    public Long getBossId() {
        return bossId;
    }
    public void setBossId(Long bossId) {
        this.bossId = bossId;
    }
    public Date getFromDate() {
        return fromDate;
    }
    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }
    public Date getToDate() {
        return toDate;
    }
    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }
    public int getCompleted() {
        return completed;
    }
    public void setCompleted(int completed) {
        this.completed = completed;
    }


}
