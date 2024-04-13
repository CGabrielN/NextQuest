package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.Step;
import polihack15.backend.model.TestDTO;
import polihack15.backend.persistence.RepoStep;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceStep {

    private final RepoStep repoSteps;
    public List<Step> getStepsForId(Long id_roadmap){
        return repoSteps.findByRoadmapId(id_roadmap);
    }
}
