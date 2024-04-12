package polihack15.backend.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import polihack15.backend.business.ServiceUser;
import polihack15.backend.model.User;

@RestController
@RequestMapping("/api")
public class ControllerUser {

    @Autowired
    private ServiceUser serviceUser;

    @GetMapping("/user/{email}/{password}")
    public ResponseEntity<User> login(@PathVariable String email, @PathVariable String password){
        return serviceUser.findByEmailAndPassword(email, password)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/user")
    public ResponseEntity<User> save(@RequestBody User user){
        return ResponseEntity.ok(serviceUser.save(user));
    }
}
