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
import aprsp.reps.GrupaRepository;

@RestController
public class GrupaRestController {

	@Autowired
	private GrupaRepository grupaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@CrossOrigin
	@GetMapping("grupa")
	public Collection<Grupa> getAll(){
		return grupaRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("grupa/{id}")
	public Grupa getOne(@PathVariable("id") Integer id) {
		return grupaRepository.getOne(id);
	}
	
	@CrossOrigin
	@GetMapping("grupa/oznaka/{oznaka}")
	public Collection<Grupa> getByOznaka(@PathVariable("oznaka") String oznaka){
		return grupaRepository.findByOznakaContainingIgnoreCase(oznaka);
	}
	
	@CrossOrigin
	@PostMapping("grupa")
	public ResponseEntity<HttpStatus> addGrupa(@RequestBody Grupa grupa){
		grupaRepository.save(grupa);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping("grupa/{id}")
	public ResponseEntity<HttpStatus> updateGrupa (@RequestBody Grupa grupa, 
			@PathVariable ("id") Integer id){
		if (grupaRepository.existsById(id)){
			grupa.setId(id);
			grupaRepository.save(grupa);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@CrossOrigin
	@DeleteMapping("grupa/{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable Integer id){
		if (id == -100) {
			jdbcTemplate.execute("Insert into grupa (\"id\", \"oznaka\", \"smer\") values (-100, 'Test grupa', 'Test smer')"); 
		}
		
		if (grupaRepository.existsById(id)) {
			grupaRepository.deleteById(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
