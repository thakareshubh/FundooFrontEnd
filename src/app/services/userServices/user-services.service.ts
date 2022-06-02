import { HttpServicesService } from './../httpServices/http-services.service';

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  token: any;
  constructor(private httpService: HttpServicesService) {
    this.token = localStorage.getItem('token');
  }

  //Register section
  register(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `User/AddUser`,
      reqdata,
      false,
      header
    );
  }
  //login section
  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `User/Login?email=${reqdata.email}&password=${reqdata.password}`,
      reqdata,
      false,
      header
    );
  }
  //forget password api  section
  forgetPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices(
      `User/ForgotPassword/${reqdata.email}`,
      reqdata,
      false,
      header
    );
  }
  //reset password
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.putservices(
      `User/ResetPassword`,
      reqdata,
      true,
      headerOption
    );
  }
}
