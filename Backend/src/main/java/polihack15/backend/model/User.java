package polihack15.backend.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "users", schema = "public")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Email(message = "This is not a valid email")
    @NotEmpty(message = "Try again! Email cannot be empty")
    @Column(name = "email", unique = true)
    private String email;

    @Length(max = 255, message = "Password is too long")
    @NotEmpty(message = "Try again! Password cannot be empty")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).*$", message = "Try again! Password must meet the requirements")
    @Column(name = "password_hash")
    private String password_hash;

    @NotNull
    @Length(max = 255, message = "Full name is too long")
    @Column(name = "full_name")
    private String fullName;

    @NotNull
    @Length(max = 12, message = "Phone number is too long")
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotNull
    @Length(max = 255, message = "Domain is too long")
    @Column(name = "domain")
    private String domain;

    @Column(name = "start_roadmap_date")
    private LocalDateTime startRoadmapDate;

    @ManyToOne
    @JoinColumn(name = "id_roadmap")
    private Roadmap roadmap;

    @ManyToOne
    @JoinColumn(name = "id_company")
    private Company company;
}
