package com.apiLive.apiLive.controller;

import com.apiLive.apiLive.model.Live;
import com.apiLive.apiLive.service.LiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import javax.validation.Valid;
import java.time.LocalDateTime;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/lives")
public class LiveController {
    @Autowired
    LiveService service;

    @GetMapping
    public ResponseEntity<Page<Live>> getAllLives(@PageableDefault(page = 0, size = 10, sort = "id", direction = Sort.Direction.ASC) Pageable pageable,
                                                  @RequestParam(required = false) String flag){
        Page<Live> livePage = service.findAll(pageable, flag);
        if(livePage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<Page<Live>>(livePage, HttpStatus.OK);
        }
    }

    @PostMapping
    public ResponseEntity<Live> saveLive(@RequestBody @Valid Live live) {
        live.setRegistrationDate(LocalDateTime.now());
        return new ResponseEntity<Live>(service.save(live), HttpStatus.CREATED);
    }
}
