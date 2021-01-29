import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livePrevius: Live[] | undefined;
  liveNext: Live[] | undefined;

  constructor(private liveService: LiveService) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives(){
    this.liveService.getLivesWithFlag('previous').subscribe(
      data=>{
        this.livePrevius = data.content;
        console.log(this.livePrevius)
      }
    );
  }

  getNext(){
    this.liveService.getLivesWithFlag('next').subscribe(
      data=>{
        this.livePrevius = data.content;
        console.log(this.livePrevius)
      }
    );
  }
}
