import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GlobalFunctionsService} from '../../../services/globalFunctions/global-functions.service';

@Component({
  selector: 'app-popup-alert',
  templateUrl: './popup-alert.component.html',
  styleUrls: ['./popup-alert.component.scss']
})
export class PopupAlertComponent implements OnInit {

  public item;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
    public globalFunctionsService: GlobalFunctionsService
  ) { }

  ngOnInit(): void {
    this.item = this.data;
  }

  finishFunction(text): void {
    this.dialogRef.close(text);
  }


  LocalDate(date): string {
    const value = date;
    const year = value.substring(0,4);
    const month  = value.substring(4,6);
    const day = value.substring(6,9);
    const str =  day + "-" + month + "-" + year ;
    return str;
  }

  onImgError($event: ErrorEvent) {

  }


}
