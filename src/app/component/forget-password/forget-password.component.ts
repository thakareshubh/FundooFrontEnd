import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/userServices/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder,private user:UserServicesService,private router: Router) { }

  ngOnInit() {
      this.forgetPasswordForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]],
          
          
      });
  }// get f() { return this.forgetPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgetPasswordForm.valid) {
        let reqdata={
          email:this.forgetPasswordForm.value.email,
        
        }
        this.user.forgetPassword(reqdata).subscribe((response:any)=>{
          console.log(response);
        })
    }

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetPasswordForm.value))
  }
    

}
