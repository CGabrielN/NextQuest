package polihack15.backend.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.Step;

@Repository
public interface RepoStep extends JpaRepository<Step, Long>{
}
