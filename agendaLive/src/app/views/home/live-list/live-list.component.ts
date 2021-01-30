import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livePrevius: Live[] = [];
  liveNext: Live[] = [];

  constructor(private liveService: LiveService) { }

  ngOnInit(): void {
    this.getPrevius();
  }

  getPrevius(){
    this.liveService.getLivesWithFlag('previous').subscribe(
      data=>{
        console.log(data)
        this.livePrevius = data.content;
        console.log(this.livePrevius)
      }
    );
  }

  getNext(){
    this.liveService.getLivesWithFlag('next').subscribe(
      data=>{
        this.liveNext = data.content;
        console.log(this.liveNext)
      }
    );
  }
}
