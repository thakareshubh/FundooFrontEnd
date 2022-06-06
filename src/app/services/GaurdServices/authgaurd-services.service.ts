import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdServicesService {

  constructor() { }
  
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  

}
