
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

Baseurl:environment.baseUrl;

  constructor( private httpClient:HttpClient) { }

  postservices(url:string,redata:any,token: boolean=false,httpOptions:any={})
  {
    return this.httpClient.post(this.Baseurl=url,token && httpOptions )
  }
}
