package polihack15.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "roadmaps_results", schema = "public")
public class RoadmapsResults{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    @OneToOne
    @JoinColumn(name = "roadmap_id")
    private Roadmap roadmap;

    @NotNull
    @Column(name="final_score")
    private Integer finalScore;

    @NotNull
    @Column(name="start_time")
    private LocalDateTime startTime;

    @Column(name="end_time")
    private LocalDateTime endTime;

    @Column(name="feedback_rating")
    private Integer feedback_rating;

    @Column(name="feedback_content")
    private String feedback_content;
}
