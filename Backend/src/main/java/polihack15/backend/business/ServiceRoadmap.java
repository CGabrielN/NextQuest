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

    public List<Roadmap> getAllRoadmaps() {
        return repoRoadmap.findAll();
    }

    public List<Roadmap> getAllRoadmapsByCompany(String company) {
        return repoRoadmap.findAllByCompany(company);
    }

    public List<Roadmap> getAllRoadmapsByDomain(String domain) {
        return repoRoadmap.findAllByDomain(domain);
    }

    public List<Roadmap> getFreeRoadmaps(String domain) {
        return repoRoadmap.findFree(domain);
    }

    public List<Roadmap> getPayedRoadmaps(String domain) {
        return repoRoadmap.findPayed(domain);
    }

    public Roadmap getRoadmapForUser(Long id_user) {
        return repoRoadmap.findRoadmapForUser(id_user);
    }
}
