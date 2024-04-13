package polihack15.backend.business;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.Question;
import polihack15.backend.persistence.RepoQuestion;

@Service
@AllArgsConstructor
public class ServiceQuestion {

    private final RepoQuestion repoQuestion;

    public Question save(Question question) {
        return repoQuestion.save(question);
    }
}
