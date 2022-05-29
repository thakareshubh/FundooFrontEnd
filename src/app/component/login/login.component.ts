import { UserServicesService } from './../../services/userServices/user-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  hide=true;

  constructor(private formBuilder: FormBuilder, private user:UserServicesService,) { }

 
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          
      });
  } get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.valid) {
          let reqdata={
            email:this.loginForm.value.email,
            password:this.loginForm.value.password,
          }
          this.user.login(reqdata).subscribe((response:any)=>{
            console.log(response);
          })
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
    

}
