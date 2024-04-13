package polihack15.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import polihack15.backend.business.ServiceStep;
import polihack15.backend.model.Step;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ControllerStep {

    @Autowired
    private ServiceStep serviceStep;

    @GetMapping("/getStepsForRoadmap/{id_roadmap}")
    public ResponseEntity<List<Step>> getStepsForID(@PathVariable Long id_roadmap) {
        return ResponseEntity.ok(serviceStep.getStepsForId(id_roadmap));
    }
}
