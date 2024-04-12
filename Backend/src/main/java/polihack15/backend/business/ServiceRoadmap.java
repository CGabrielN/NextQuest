package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.Roadmap;
import polihack15.backend.persistence.RepoRoadmap;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceRoadmap {

    private final RepoRoadmap repoRoadmap;

    public List<Roadmap> getPaidRoadmapsByDomain(String domain) {
        return repoRoadmap.findPayedByDomain(domain);
    }

    public List<Roadmap> getFreeRoadmapsByDomain(String domain) {
        return repoRoadmap.findFreeByDomain(domain);
    }

    public List<Roadmap> getPaidRoadmapsByCompany(String company) {
        return repoRoadmap.findPayedByCompany(company);
    }

    public List<Roadmap> getFreeRoadmapsByCompany(String company) {
        return repoRoadmap.findFreeByCompany(company);
    }
}
