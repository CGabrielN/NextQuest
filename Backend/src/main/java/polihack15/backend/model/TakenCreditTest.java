package polihack15.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "users_credit_tests", schema = "public")
public class TakenCreditTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "test_id")
    private CreditTest test;

    @NotNull
    @Column(name = "obtained_points" , columnDefinition = "float default 0.0")
    private double obtainedPoints;

    @NotNull
    @Column(name = "passed")
    private boolean passed;


}
