import { NoteServiceService } from './../../services/NoteService/note-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @Output() createToGetAllNotes = new EventEmitter<string>()

  constructor(private snav:MatSnackBar, private activatedRoute:ActivatedRoute,private notes:NoteServiceService,private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
     
    });
    this.token=this.activatedRoute.snapshot.paramMap.get('token')
    this.snav.open('notes are ', '', {
      duration: 3000,
    })
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
  onSubmit() {
    

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
      //  window.location.reload();
      

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
    }
  }
}
