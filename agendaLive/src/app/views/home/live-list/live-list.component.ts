import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livePrevious: Live[] = [];
  liveNext: Live[] = [];

  constructor(private liveService: LiveService) { }

  ngOnInit(): void {
    this.getPrevious();
    this.getNext();
  }

  getPrevious(){
    this.liveService.getLivesWithFlag('previous').subscribe(
      data=>{
        console.log(data)
        this.livePrevious = data.content;
        console.log(this.livePrevious)
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
