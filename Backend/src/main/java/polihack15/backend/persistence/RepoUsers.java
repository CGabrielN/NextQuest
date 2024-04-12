package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.User;

import java.util.Optional;

@Repository
public interface RepoUsers extends JpaRepository<User, Long> {

    @NotNull
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password_hash = :password")
    Optional<User> findByEmailAndPassword(@NotNull String email, @NotNull String password);

}
