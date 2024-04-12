package polihack15.backend.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import polihack15.backend.business.ServiceCompany;
import polihack15.backend.business.ServiceUser;
import polihack15.backend.model.Company;
import polihack15.backend.model.User;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ControllerUser {

    @Autowired
    private ServiceUser serviceUser;

    @Autowired
    private ServiceCompany serviceCompany;


    @GetMapping("/user/login/{email}/{password}")
    public ResponseEntity<User> login(@PathVariable String email, @PathVariable String password) {
        return serviceUser.findByEmailAndPassword(email, password)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/user")
    public ResponseEntity<User> save(@RequestBody User user) {
        String userEmailDomain = user.getEmail().substring(user.getEmail().indexOf("@") + 1);
        List<Company> companies = serviceCompany.getAll();

        for (Company company : companies) {
            if (company.getEmailDomains().contains(userEmailDomain)) {
                user.setCompany(company);
                break;
            }
        }

        return ResponseEntity.ok(serviceUser.save(user));
    }

    @GetMapping("/user/{userId}/{domain}")
    public ResponseEntity<Boolean> findPassedTestsByUserAndDomain(@PathVariable Long userId, @PathVariable String domain) {
        return ResponseEntity.ok(serviceUser.findPassedTestsByUserAndDomain(userId, domain));
    }
}
