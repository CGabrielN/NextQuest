package polihack15.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import polihack15.backend.business.ServiceQuestion;
import polihack15.backend.model.Question;

@RestController
@RequestMapping("/api")
public class ControllerQuestion {

    @Autowired
    private ServiceQuestion serviceQuestion;

    @PostMapping("/question")
    public ResponseEntity<Question> save(@RequestBody Question question) {
        return ResponseEntity.ok(serviceQuestion.save(question));
    }

}
