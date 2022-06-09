import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../services/httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})
export class LableService {
token:any;
  constructor(private httpService: HttpServicesService) {
    this.token=localStorage.getItem("token")
  }

  createLabel(reqdata: any) {
    console.log(reqdata);
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.postservices('Label/CreateLabel', reqdata, true, header)
  }
}
