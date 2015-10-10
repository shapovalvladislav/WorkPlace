package domain;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Posts")
public class Post extends DomainSuperClass implements Serializable {
    private Date date;
    private long from_id;
    private long task_id;
    private String content;

    public Post() {}

    @Column(name = "date")
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }

    @ManyToOne
    @JoinColumn(name="from_id")
    public long getFromId() {
        return from_id;
    }
    public void setFromId(long from_id) {
        this.from_id = from_id;
    }

    @ManyToOne
    @JoinColumn(name="task_id")
    public long getTaskId() {
        return task_id;
    }
    public void setTaskId(long task_id) {
        this.task_id = task_id;
    }

    @Column(name = "content")
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
}