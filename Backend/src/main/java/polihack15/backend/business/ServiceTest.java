package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.*;
import polihack15.backend.persistence.RepoCreditQuestion;
import polihack15.backend.persistence.RepoCreditResponse;
import polihack15.backend.persistence.RepoCreditTest;

import java.util.HashMap;
import java.util.List;

@Service
@AllArgsConstructor
public class ServiceTest {

    private final RepoCreditTest repoCreditTest;
    private final RepoCreditQuestion repoCreditQuestion;
    private final RepoCreditResponse repoCreditResponse;

    public TestDTO getCreditTestForDomain(String domain) {
        var testDTO = new TestDTO();
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

}
