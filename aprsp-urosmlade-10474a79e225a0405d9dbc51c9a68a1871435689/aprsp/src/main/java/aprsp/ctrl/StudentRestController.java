package aprsp.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import aprsp.jpa.Grupa;
import aprsp.jpa.Student;
import aprsp.reps.GrupaRepository;
import aprsp.reps.StudentRepository;

@RestController
public class StudentRestController {

	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private GrupaRepository grupaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	@CrossOrigin
	@GetMapping ("student")
	public Collection<Student> getAll(){
		return studentRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("student/{id}")
	public Student getOne (@PathVariable ("id") Integer id) {
		return studentRepository.getOne(id);
	}

	@CrossOrigin
	@GetMapping("studenti/{id}")
	public Collection<Student> getAllForStudent (@PathVariable("id") Integer id){
		Grupa g = grupaRepository.getOne(id);
		return studentRepository.findByGrupaBean(g);
	}
	
	
	@CrossOrigin
	@PostMapping ("student")
	public ResponseEntity<HttpStatus> addStudent (@RequestBody Student student){
		studentRepository.save(student);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping ("student/{id}")
	public ResponseEntity<HttpStatus> updateStudent (@RequestBody Student student, @PathVariable ("id") Integer id){
		if (studentRepository.existsById(id)) {
			student.setId(id);
			studentRepository.save(student);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@CrossOrigin
	@DeleteMapping ("student/{id}")
	public ResponseEntity<HttpStatus>delete (@PathVariable Integer id){
		if(id==-100) {
			jdbcTemplate.execute("insert into student (\"id\",\"broj_indeksa\",\"ime\", \"prezime\") values (-100, 'test broj indeksa', 'test ime', 'test prezime')");
		}
		if(studentRepository.existsById(id)) {
			studentRepository.deleteById(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	
}
