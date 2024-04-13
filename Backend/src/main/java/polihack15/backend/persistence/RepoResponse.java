package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.CreditResponse;
import polihack15.backend.model.Response;

import java.util.List;

@Repository
public interface RepoResponse extends JpaRepository<Response, Long>{
    @NotNull
    @Query("SELECT r FROM Response r WHERE r.question.id = :questionId")
    List<Response> findResponsesForQuestion(Long questionId);
}
