package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditTest;
import polihack15.backend.model.Test;

@Repository
public interface RepoTest extends JpaRepository<Test, Long>{

    @NotNull
    @Query("SELECT t FROM Test t WHERE t.step.id = :id_step")
    Test findByStep(Long id_step);
}
