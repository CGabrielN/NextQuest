package polihack15.backend.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.Question;

@Repository
public interface RepoQuestion extends JpaRepository<Question, Long>{
}
