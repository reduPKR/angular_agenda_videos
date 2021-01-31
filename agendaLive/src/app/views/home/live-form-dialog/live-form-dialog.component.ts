import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';
import * as moment from 'moment';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: any;//Evita ter que iniciar com valor porem é FormGroup

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder,
    private rest: LiveService
    //@Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
    this.initializeLiveForm();
  }

  initializeLiveForm(): void{
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]]
    });
  }

  close(): void {
    this.dialogRef.close(true);
    this.liveForm.reset();
  }

  createLive(){
    let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();
    this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD") + 'T' + this.liveForm.value.liveTime;
    this.rest.postLives(this.liveForm.value).subscribe(result => {});
    this.dialogRef.close(true);
    this.liveForm.reset();
    window.location.reload();
  }

}
