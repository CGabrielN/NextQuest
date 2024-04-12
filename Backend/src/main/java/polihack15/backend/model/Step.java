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
@Table(name = "steps", schema = "public")
public class Step {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "step_id")
    private Long id;

    @NotNull
    @Length(max = 255, message = "Step name is too long")
    @Column(name = "name")
    private String name;

    @NotNull
    @Column(name = "position")
    private int position;

    @NotNull
    @Column(name = "details")
    private String details;

    @Column(name = "is_done")
    private boolean isDone;

    @ManyToOne
    @JoinColumn(name = "id_roadmap")
    private Roadmap roadmap;
}
