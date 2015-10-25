package schema;

import java.util.Date;

public class MessageInfo {
    private Long employee1;
    private Long employee2;
    private String content;
    private Date date;

    public MessageInfo() {

    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


    public Long getEmployee1() {
        return employee1;
    }
    public void setEmployee1(Long employee1) {
        this.employee1 = employee1;
    }
    public Long getEmployee2() {
        return employee2;
    }
    public void setEmployee2(Long employee2) {
        this.employee2 = employee2;
    }
}
