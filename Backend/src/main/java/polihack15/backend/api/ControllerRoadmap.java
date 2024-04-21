package polihack15.backend.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import polihack15.backend.business.ServiceRoadmap;
import polihack15.backend.model.Roadmap;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ControllerRoadmap {
    @Autowired
    private ServiceRoadmap serviceRoadmap;

    @GetMapping("/roadmaps/getAll")
    public ResponseEntity<List<Roadmap>> getAllRoadmaps() {
        return ResponseEntity.ok(serviceRoadmap.getAllRoadmaps());
    }

    @GetMapping("/roadmaps/getAllByDomain/{domain}")
    public ResponseEntity<List<Roadmap>> getAllRoadmapsByDomain(@PathVariable String domain) {
        return ResponseEntity.ok(serviceRoadmap.getAllRoadmapsByDomain(domain));
    }

    @GetMapping("/roadmaps/getFreeRoadmapsByDomain/{domain}")
    public ResponseEntity<List<Roadmap>> getFreeRoadmapsByDomain(@PathVariable String domain) {
        return ResponseEntity.ok(serviceRoadmap.getFreeRoadmapsByDomain(domain));
    }

    @GetMapping("/roadmaps/getPayedRoadmapsByDomain/{domain}")
    public ResponseEntity<List<Roadmap>> getPayedRoadmapsByDomain(@PathVariable String domain) {
        return ResponseEntity.ok(serviceRoadmap.getPayedRoadmapsByDomain(domain));
    }

    @GetMapping("/roadmaps/getRoadmapForUser/{id_user}")
    public ResponseEntity<Roadmap> getRoadmapForUser(@PathVariable Long id_user) {
        return ResponseEntity.ok(serviceRoadmap.getRoadmapForUser(id_user));
    }

    @GetMapping("/roadmaps/getFreeRoadmaps")
    public ResponseEntity<List<Roadmap>> getFreeRoadmaps() {
        return ResponseEntity.ok(serviceRoadmap.getFreeRoadmaps());
    }

    @GetMapping("/roadmaps/getPayedRoadmaps")
    public ResponseEntity<List<Roadmap>> getPayedRoadmaps() {
        return ResponseEntity.ok(serviceRoadmap.getPayedRoadmaps());
    }


}
