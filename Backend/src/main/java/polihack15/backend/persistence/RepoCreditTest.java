package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditTest;

@Repository
public interface RepoCreditTest extends JpaRepository<CreditTest, Long> {

    @NotNull
    @Query("SELECT t FROM CreditTest t WHERE t.domain = :domain")
    CreditTest findByDomain(String domain);

}
