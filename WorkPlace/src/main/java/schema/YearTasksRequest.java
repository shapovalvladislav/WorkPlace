package schema;

public class YearTasksRequest {
    private int performerId;
    private int year;
    private int completed;

    public YearTasksRequest() {

    }

    public int getPerformerId() {
        return performerId;
    }
    public void setPerformerId(int performerId) {
        this.performerId = performerId;
    }
    public int getYear() {
        return year;
    }
    public void setYear(int year) {
        this.year = year;
    }
    public int getCompleted() {
        return completed;
    }
    public void setCompleted(int completed) {
        this.completed = completed;
    }
}
