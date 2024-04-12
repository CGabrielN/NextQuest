package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditResponse;

import java.util.List;

@Repository
public interface RepoCreditResponse extends JpaRepository<CreditResponse, Long> {

    @NotNull
    @Query("SELECT r FROM CreditResponse r WHERE r.question.id = :questionId")
    List<CreditResponse> findResponsesForQuestion(Long questionId);

}
