import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  mobileQuery: MediaQueryList;
  

 
  private _mobileQueryListener: () => void;
  token: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private rout:Router,private snackBar:MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 00px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  logout()
  {
    this.token=localStorage.removeItem("token")
    this.rout.navigateByUrl('/login')
    this.snackBar.open('Logout Successfully..!!!','..', {
      duration: 3000,
    })
  }

}
