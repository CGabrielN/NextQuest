package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.persistence.RepoResponse;

@Service
@AllArgsConstructor
public class ServiceResponse {

    private final RepoResponse repoResponse;

}
