import { HttpServicesService } from './../httpServices/http-services.service';

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private httpService: HttpServicesService) {}

  //Register section
  register(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices( 'User/AddUser', reqdata, false, header );
  }
  //login section
  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices( 'User/LoginUser/${reqdata.email}/${reqdata.password}', reqdata, true, header );
    

  }
  //forget section
  forgetPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices(  'User/ForgetPassword',  reqdata,  true,  header);
    

  }
 
}
