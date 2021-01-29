package com.apiLive.apiLive.service;

import com.apiLive.apiLive.model.Live;
import com.apiLive.apiLive.repository.LiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;

@Service
public class LiveService {
    private final LiveRepository repository;

    @Autowired
    public LiveService(LiveRepository repository) {
        this.repository = repository;
    }

    public Page<Live> findAll(Pageable pageable, String flag){
        if(flag != null && flag.equals("next")){
            return repository.findByLiveDateAfterOrderByLiveDateAsc(LocalDateTime.now(), pageable);
        }else if(flag != null && flag.equals("previous")){
            return repository.findByLiveDateBeforeOrderByLiveDateDesc(LocalDateTime.now(), pageable);
        }else{
            return repository.findAll(pageable);
        }
    }
}
