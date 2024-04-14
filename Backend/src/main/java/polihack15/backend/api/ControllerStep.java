package polihack15.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/step")
    public ResponseEntity<Step> save(@RequestBody Step step) {
        return ResponseEntity.ok(serviceStep.save(step));
    }

}
