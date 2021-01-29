package com.apiLive.apiLive.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "live")
public class Live {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String liveName;

    @Column(nullable = false)
    private String channelName;

    @Column(nullable = false)
    private LocalDateTime liveDate;

    @Column(nullable = false)
    private String liveLink;

    @Column(nullable = false)
    private LocalDateTime registrationDate;
}
