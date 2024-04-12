package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditQuestion;
import polihack15.backend.model.CreditTest;

import java.util.List;

@Repository
public interface RepoCreditQuestion extends JpaRepository<CreditQuestion, Long> {

    @NotNull
    @Query("SELECT q FROM CreditQuestion q WHERE q.test = :test")
    List<CreditQuestion> findByTest(CreditTest test);
}
