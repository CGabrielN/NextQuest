package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.*;
import polihack15.backend.persistence.*;

import java.util.HashMap;
import java.util.List;

@Service
@AllArgsConstructor
public class ServiceTest {

    private final RepoCreditTest repoCreditTest;
    private final RepoCreditQuestion repoCreditQuestion;
    private final RepoCreditResponse repoCreditResponse;

    private final RepoTest repoTest;
    private final RepoQuestion repoQuestion;
    private final RepoResponse repoResponse;

    public CreditTestDTO getCreditTestForDomain(String domain) {
        var testDTO = new CreditTestDTO();
        HashMap<CreditQuestion, List<CreditResponse>> questionsMap = new HashMap<>();
        CreditTest test = repoCreditTest.findByDomain(domain);
        testDTO.setTest(test);
        var questions = repoCreditQuestion.findByTest(test);
        for (var question : questions) {
            var responses = repoCreditResponse.findResponsesForQuestion(question.getId());
            questionsMap.put(question, responses);
        }
        testDTO.setQuestions(questionsMap);
        return testDTO;
    }

    public TestDTO getTestForStep(Long id_step) {
        var testDTO = new TestDTO();
        HashMap<Question, List<Response>> questionsMap = new HashMap<>();
        Test test = repoTest.findByStep(id_step);
        testDTO.setTest(test);
        var questions = repoQuestion.findByTest(test);
        for (var question : questions) {
            var responses = repoResponse.findResponsesForQuestion(question.getId());
            questionsMap.put(question, responses);
        }
        testDTO.setQuestions(questionsMap);
        return testDTO;
    }

}
