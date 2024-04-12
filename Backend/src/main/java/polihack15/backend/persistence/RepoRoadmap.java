package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.Roadmap;

import java.util.List;

@Repository
public interface RepoRoadmap extends JpaRepository<Roadmap, Long> {

    @NotNull
    @Query("SELECT r FROM Roadmap r WHERE r.domain = :domain and r.price > 0")
    List<Roadmap> findPayedByDomain(@NotNull String domain);

    @NotNull
    @Query("SELECT r FROM Roadmap r WHERE r.domain = :domain and r.price = 0")
    List<Roadmap> findFreeByDomain(@NotNull String domain);

    @NotNull
    @Query("SELECT r FROM Roadmap r WHERE r.company = :company and r.price > 0")
    List<Roadmap> findPayedByCompany(@NotNull String company);

    @NotNull
    @Query("SELECT r FROM Roadmap r WHERE r.company = :company and r.price = 0")
    List<Roadmap> findFreeByCompany(@NotNull String company);
}
