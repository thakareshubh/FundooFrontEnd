import { EditLableComponent } from './../edit-lable/edit-lable.component';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DataPipeService } from 'src/app/services/data-pipe.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  mobileQuery: MediaQueryList;
  filterdString:string='';
  message:any;
  value:any;

  @Input()GetLable: any;

  
 
  private _mobileQueryListener: () => void;
  token: any;

  constructor(private snav:MatSnackBar,public dialog: MatDialog,private data:DataPipeService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private rout:Router,private snackBar:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 00px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }
  searchtitle(event: any) {
    console.log("input in search field ===",event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeMessage(Ddata)
  }

  
  logout()
  {
    this.token=localStorage.removeItem("token")
    this.rout.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 3000,
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditLableComponent, {
      width: 'auto',
      height:"auto",
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.snav.open('edit note Successfully', '', {
        duration: 3000,
      })
      
    });


}}
