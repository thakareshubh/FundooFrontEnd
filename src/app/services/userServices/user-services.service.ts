import { HttpServicesService } from './../httpServices/http-services.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpService:HttpServicesService) { }
  register(reqdata:any){
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }
  return this.httpService.postservices('User/AddUser',reqdata,false,header)
}
}
