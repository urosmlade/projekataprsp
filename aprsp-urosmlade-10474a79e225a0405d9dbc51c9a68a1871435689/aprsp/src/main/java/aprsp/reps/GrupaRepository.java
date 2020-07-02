package aprsp.reps;
import java.util.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import aprsp.jpa.Grupa;

public interface GrupaRepository extends JpaRepository<Grupa,Integer> {

	Collection<Grupa> findByOznakaContainingIgnoreCase(String oznaka);
}
