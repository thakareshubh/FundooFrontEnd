import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
  submitted = false;
  hide=true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.forgetPasswordForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email]],
          
          
      });
  } get f() { return this.forgetPasswordForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.forgetPasswordForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetPasswordForm.value))
  }
    

}
