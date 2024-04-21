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
@Table(name = "roadmaps", schema = "public")
public class Roadmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "roadmap_id")
    private Long id;

    @NotNull
    @Length(max = 255, message = "Roadmap name is too long")
    @Column(name = "name")
    private String name;

    @NotNull
    @Length(max = 255, message = "Path is too long")
    @Column(name = "img_path")
    private String imgPath;

    @NotNull
    @Length(max = 255, message = "Domain is too long")
    @Column(name = "domain")
    private String domain;


    @NotNull
    @Length(max = 255, message = "Difficulty is too long")
    @Column(name = "difficulty")
    private String difficulty;

    @NotNull
    @Column(name = "price")
    private int price;

    @NotNull
    @Column(name = "days")
    private int days;

    @ManyToOne
    @JoinColumn(name = "id_company")
    private Company company;


}
