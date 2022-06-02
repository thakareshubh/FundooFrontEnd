import { NoteServiceService } from './../../services/NoteService/note-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  show=false
  noteForm!: FormGroup;
  submitted = false;
  token:any;

  constructor( private activatedRoute:ActivatedRoute,private notes:NoteServiceService,private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
     
    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token')
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.noteForm.valid) {
      let reqdata = {
        title: this.noteForm.value.title,
        description: this.noteForm.value.description,
        color:"red"
       
      };
      this.notes.createnote(reqdata,).subscribe((response:any)=>{
        console.log(response);
         
      
      });
      

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
    }
  }
}
