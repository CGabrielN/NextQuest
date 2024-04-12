package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.User;
import polihack15.backend.persistence.RepoUsers;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ServiceUser {

    private final RepoUsers repoUsers;

    public Optional<User> findByEmailAndPassword(String email, String password){
        return repoUsers.findByEmailAndPassword(email, password);
    }

    public User save(User user){
        return repoUsers.save(user);
    }
}
