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
@Table(name = "credit_responses", schema = "public")
public class CreditResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "response_id")
    private Long id;

    @NotNull
    @Length(max = 255, message = "Response is too long")
    @Column(name = "response")
    private String response;

    @ManyToOne
    @JoinColumn(name = "id_credit_question")
    private CreditQuestion question;

    @Column(name = "is_correct")
    private boolean isCorrect;
}
