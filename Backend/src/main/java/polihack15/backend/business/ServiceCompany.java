package polihack15.backend.business;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import polihack15.backend.model.Company;
import polihack15.backend.persistence.RepoCompany;

import java.util.List;

@Service
@AllArgsConstructor
public class ServiceCompany {

    private final RepoCompany repoCompany;

    public List<Company> getAll(){
        return repoCompany.findAll();
    }

}
