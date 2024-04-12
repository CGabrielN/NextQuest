package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.persistence.RepoStep;

@Service
@AllArgsConstructor
public class ServiceStep {

    private final RepoStep repoSteps;
}
