package polihack15.backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "tests", schema = "public")
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id")
    private Long id;

    @NotNull
    @Length(max = 255, message = "Test name is too long")
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "points" , columnDefinition = "float default 0.0")
    private double points;

    @ManyToOne
    @JoinColumn(name = "id_step")
    private Step step;



}
