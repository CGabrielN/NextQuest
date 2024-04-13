package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditQuestion;
import polihack15.backend.model.CreditTest;
import polihack15.backend.model.Question;
import polihack15.backend.model.Test;

import java.util.List;

@Repository
public interface RepoQuestion extends JpaRepository<Question, Long>{

    @NotNull
    @Query("SELECT q FROM Question q WHERE q.test = :test")
    List<Question> findByTest(Test test);

}
