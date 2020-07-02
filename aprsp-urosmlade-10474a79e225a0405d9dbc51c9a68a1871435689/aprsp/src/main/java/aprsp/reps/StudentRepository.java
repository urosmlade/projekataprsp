package aprsp.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import aprsp.jpa.Grupa;
import aprsp.jpa.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	Collection <Student> findByGrupaBean(Grupa g);
	
	@Query(value = "select coalesce (max(redni_broj)+1,1) from student where projekat = ?1", nativeQuery = true)
	Integer nextRBr (Integer projekatId);
}
