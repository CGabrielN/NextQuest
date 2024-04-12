package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.persistence.RepoCompany;

@Service
@AllArgsConstructor
public class ServiceCompany {

    private final RepoCompany repoCompany;

}
