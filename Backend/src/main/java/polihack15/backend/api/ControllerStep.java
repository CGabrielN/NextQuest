package polihack15.backend.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import polihack15.backend.business.ServiceStep;

@RestController
@RequestMapping("/api")
public class ControllerStep {

    @Autowired
    private ServiceStep serviceStep;
}
