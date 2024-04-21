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

    public List<Roadmap> getAllRoadmaps() {
        return repoRoadmap.findAll();
    }

    public List<Roadmap> getAllRoadmapsByDomain(String domain) {
        return repoRoadmap.findAllByDomain(domain);
    }

    public List<Roadmap> getFreeRoadmapsByDomain(String domain) {
        return repoRoadmap.findFree(domain);
    }

    public List<Roadmap> getPayedRoadmapsByDomain(String domain) {
        return repoRoadmap.findPayed(domain);
    }

    public Roadmap getRoadmapForUser(Long id_user) {
        return repoRoadmap.findRoadmapForUser(id_user);
    }

    public List<Roadmap> getFreeRoadmaps(){
        return repoRoadmap.findFree();
    }

    public List<Roadmap> getPayedRoadmaps(){
        return repoRoadmap.findPayed();
    }
}
