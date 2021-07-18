import {ViewChild, Component, ElementRef, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DataManagerService} from '../../services/dataManager/data-manager.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {GlobalFunctionsService} from '../../services/globalFunctions/global-functions.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  options: FormGroup;

  public subscription;
  public localGallery = [];
  public gallerySelectedData: any;
  public totalRecords: number;
  private subject = new Subject<any>();
  public pic: string;
  public parms;

  public searchInput: string;
  // @ts-ignore
  public noPic = require('../../../media/pics/noPicFound.png');

  constructor(
    public dataManagerService: DataManagerService,
    public globalFunctionsService: GlobalFunctionsService,
    public dialogRef: MatDialogRef<any>,
    public eRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.globalFunctionsService.getGallery('sort');
  }

  ngOnInit(): void {

  }

  openPopUpItem(indexItem) {
    // @ts-ignore
    this.dialogRef = this.globalFunctionsService.openItemModal(indexItem).then((response) => {
      this.gallerySelectedData = response;
    })
      .catch((error) => {
        //
      });
  }

  LocalDate(date): string {
    const value = date;
    const year = value.substring(0, 4);
    const month  = value.substring(4, 6);
    const day = value.substring(6, 9);
    const str =  day + '-' + month + '-' + year ;
    return str;
  }

  onImgError(event) {
    // @ts-ignore
    event.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtF4VdOl8_m-1FayEemKpgZvDuvgHOqAhFQ&usqp=CAU';
    console.log('src :' + event.target.src);
  }

  refresh() {
    window.location.reload();
  }

  clear() {
    this.searchInput = '';
    this.globalFunctionsService.searchParms = this.globalFunctionsService.getEmptySearchParms();
  }

  sort() {
    this.globalFunctionsService.getGallery('sort');
  }

  getAllMovies() {
    this.globalFunctionsService.getGallery('movies');
  }

  getAllGames() {
    this.globalFunctionsService.getGallery('game');
  }

  getAllSeries() {
    this.globalFunctionsService.getGallery('series');
  }

  addItem() {
    // @ts-ignore
    this.dialogRef = this.globalFunctionsService.openItemModal().then((response) => {
      this.gallerySelectedData = response;
    })
      .catch((error) => {
        //
      });
  }

  delete(item: any)  {
    this.globalFunctionsService.openAlertModal('Delete this item?').then((response) => {
      for( var i = 0; i < (this.globalFunctionsService.gallery).length; i++){
        if ( (this.globalFunctionsService.gallery)[i].Id === (item.Id)) {
          (this.globalFunctionsService.gallery).splice(i, 1);
          i--;
        }
      }

      this.dataManagerService.deleteItemyData(item).then((responsedelete) => {

      })
        .catch((error) => {
        });

    });
  }


}
