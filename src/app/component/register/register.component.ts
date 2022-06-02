import { UserServicesService } from './../../services/userServices/user-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  hide:boolean = true;
  

  constructor(private formBuilder: FormBuilder,private user: UserServicesService,) {};

 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let reqdata = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      };
      this.user.register(reqdata).subscribe((response:any)=>{
        console.log(response);
         
      
      });
      

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
    }
  }
  ShowPassword(){
    this.hide = !this.hide;            
  }
}
