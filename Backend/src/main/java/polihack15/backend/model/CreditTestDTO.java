package polihack15.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreditTestDTO {

    private CreditTest test;

    private HashMap<CreditQuestion, List<CreditResponse>> questions;

}
