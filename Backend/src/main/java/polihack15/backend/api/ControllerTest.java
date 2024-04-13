package polihack15.backend.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import polihack15.backend.business.ServiceTest;
import polihack15.backend.model.CreditTestDTO;
import polihack15.backend.model.Test;
import polihack15.backend.model.TestDTO;

@RestController
@RequestMapping("/api")
public class ControllerTest {

    @Autowired
    private ServiceTest serviceTest;

    @GetMapping("/creditTest/{domain}")
    public ResponseEntity<CreditTestDTO> getCreditTestForDomain(@PathVariable String domain) {
        return ResponseEntity.ok(serviceTest.getCreditTestForDomain(domain));
    }

    @GetMapping("/getTestForStep/{id_step}")
    public ResponseEntity<TestDTO> getTestForStep(@PathVariable Long id_step) {
        return ResponseEntity.ok(serviceTest.getTestForStep(id_step));
    }

    @PostMapping("/test")
    public ResponseEntity<Test> save(@RequestBody Test test) {
        return ResponseEntity.ok(serviceTest.save(test));
    }

}
