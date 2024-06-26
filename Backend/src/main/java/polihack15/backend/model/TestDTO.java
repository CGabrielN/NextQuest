package polihack15.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TestDTO {

    private Test test;

    private HashMap<Question, List<Response>> questions;

}
