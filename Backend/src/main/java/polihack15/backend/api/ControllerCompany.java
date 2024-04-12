package polihack15.backend.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import polihack15.backend.business.ServiceCompany;

@RestController
@RequestMapping("/api")
public class ControllerCompany {

    private ServiceCompany serviceCompany;
}
