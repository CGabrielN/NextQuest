package polihack15.backend.persistence;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import polihack15.backend.model.Step;

import java.util.List;

@Repository
public interface RepoStep extends JpaRepository<Step, Long>{

    @NotNull
    @Query("SELECT s FROM Step s WHERE s.roadmap.id = :id_roadmap order by s.position asc")
    List<Step> findByRoadmapId(Long id_roadmap);
}
