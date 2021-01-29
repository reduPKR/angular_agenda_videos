package com.apiLive.apiLive.repository;

import com.apiLive.apiLive.model.Live;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LiveRepository extends JpaRepository<Live, Long> {
    Page<Live> findByLiveDateAfterOrderByLiveDateAsc(LocalDateTime date, Pageable pageable);
    Page<Live> findByLiveDateBeforeOrderByLiveDateDesc(LocalDateTime date, Pageable pageable);
}
