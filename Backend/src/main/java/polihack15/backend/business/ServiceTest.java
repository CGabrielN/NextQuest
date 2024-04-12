package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import polihack15.backend.persistence.RepoTest;

@Service
@AllArgsConstructor
public class ServiceTest {

    private final RepoTest repositoryTest;

}
