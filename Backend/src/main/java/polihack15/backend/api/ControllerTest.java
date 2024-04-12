package polihack15.backend.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import polihack15.backend.business.ServiceTest;
import polihack15.backend.model.TestDTO;

@RestController
@RequestMapping("/api")
public class ControllerTest {

    @Autowired
    private ServiceTest serviceTest;

    @GetMapping("/creditTest/{domain}")
    public ResponseEntity<TestDTO> getCreditTestForDomain(@PathVariable String domain) {
        return ResponseEntity.ok(serviceTest.getCreditTestForDomain(domain));
    }

}
