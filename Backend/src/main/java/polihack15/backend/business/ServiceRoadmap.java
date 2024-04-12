package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.persistence.RepoRoadmap;

@Service
@AllArgsConstructor
public class ServiceRoadmap {

    private final RepoRoadmap repoRoadmap;
}
