package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.TakenCreditTest;
import polihack15.backend.model.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface RepoUsers extends JpaRepository<User, Long> {

    @NotNull
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password_hash = :password")
    Optional<User> findByEmailAndPassword(@NotNull String email, @NotNull String password);

    @NotNull
    @Query("SELECT t FROM TakenCreditTest t WHERE t.user.id = :userId AND t.test.domain = :domain AND t.passed = true")
    List<TakenCreditTest> findPassedTestsByUserAndDomain(@NotNull Long userId, @NotNull String domain);

}
