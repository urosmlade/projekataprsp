package aprsp.jpa;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;


/**
 * The persistent class for the grupa database table.
 * 
 */
@Entity
@NamedQuery(name="Grupa.findAll", query="SELECT g FROM Grupa g")
@JsonIgnoreProperties ({"hibernateLazyInitializer", "handler"})
public class Grupa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="GRUPA_ID_GENERATOR", sequenceName = "GRUPA_SEQ", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "GRUPA_ID_GENERATOR")
	private Integer id;
	
	private String oznaka;

	//bi-directional many-to-one association to Smer
	@ManyToOne
	@JoinColumn(name="smer")
	private Smer smerBean;

	//bi-directional many-to-one association to Student
	@OneToMany(mappedBy="grupaBean", cascade = {CascadeType.ALL})
	@JsonIgnore
	private List<Student> students;

	public Grupa() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOznaka() {
		return this.oznaka;
	}

	public void setOznaka(String oznaka) {
		this.oznaka = oznaka;
	}

	public Smer getSmerBean() {
		return this.smerBean;
	}

	public void setSmerBean(Smer smerBean) {
		this.smerBean = smerBean;
	}

	public List<Student> getStudents() {
		return this.students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public Student addStudent(Student student) {
		getStudents().add(student);
		student.setGrupaBean(this);

		return student;
	}

	public Student removeStudent(Student student) {
		getStudents().remove(student);
		student.setGrupaBean(null);

		return student;
	}

}