package domain;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

@Entity
@Table(name = "Tasks")
public class Task extends DomainSuperClass implements Serializable {
	private long createdBy_id;
	private long performer_id;
	private Timestamp givenDate;
	private Timestamp expectedFinishDate;
	private Timestamp actualFinishDate;
	private String title;
	private TaskPriority priority;
	private Status status;
	@OneToMany(mappedBy="task_id", fetch= FetchType.EAGER)
	@OrderBy("date")
	private Set<Post> posts;

	public Task() {
		
	}
	
	@ManyToOne
	@JoinColumn(name="createdBy_id")
	public long getCreatedById() {
		return createdBy_id;
	}

	public void setCreatedById(long createdBy_id) {
		this.createdBy_id = createdBy_id;
	}

	@ManyToOne
	@JoinColumn(name="performer_id")
	public long getPerformerId() {
		return performer_id;
	}

	public void setPerformerId(long performer_id) {
		this.performer_id = performer_id;
	}

	@Column(name = "givenDate")
	public Timestamp getGivenDate() {
		return givenDate;
	}

	public void setGivenDate(Timestamp givenDate) {
		this.givenDate = givenDate;
	}

	@Column(name = "expectedFinishDate")
	public Timestamp getExpectedFinishDate() {
		return expectedFinishDate;
	}

	public void setExpectedFinishDate(Timestamp expectedFinishDate) {
		this.expectedFinishDate = expectedFinishDate;
	}

	@Column(name = "actualFinishDate")
	public Timestamp getActualFinishDate() {
		return actualFinishDate;
	}

	public void setActualFinishDate(Timestamp actualFinishDate) {
		this.actualFinishDate = actualFinishDate;
	}

	@Column(name = "title")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Enumerated(EnumType.ORDINAL)
	public TaskPriority getPriority() {
		return priority;
	}

	public void setPriority(TaskPriority priority) {
		this.priority = priority;
	}

	@Enumerated(EnumType.ORDINAL)
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Set<Post> getPosts() {
		return posts;
	}

	public void setPosts(Set<Post> posts) {
		this.posts = posts;
	}
	
}