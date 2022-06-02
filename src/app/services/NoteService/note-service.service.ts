import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from '../httpServices/http-services.service';

@Injectable({
  providedIn: 'root'
})

export class NoteServiceService {
  token : any;
  constructor(private httpService: HttpServicesService) {
    this.token=localStorage.getItem("token")
  }
  //create note
  createnote(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json-patch+json',
        'Authorization' : 'Bearer '+ this.token,

      }),
    };
    return this.httpService.postservices( `Note`, reqdata, true,header );
  }

  //GetAllnote
  getNoteList() {
    
    console.log(" getnote service");
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.getService('Note/GetAllNotes', true, head)
  }

  
}
