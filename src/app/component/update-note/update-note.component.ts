import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {MatDialog,  MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent implements OnInit {
  updateTitle: any;
  updateDescription: any;
	
	noteId:any;


  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,private update:NoteServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
		this.updateTitle = this.data.title;
    this.updateDescription = this.data.description;
    this.noteId= this.data.noteId;
  }

  ngOnInit(): void {
    console.log('note one', this.data);
	
		
  };

  onSubmit() {
    // stop here if form is invalid
      let reqdata = {
        title: this.updateTitle,
        description: this.updateDescription,
        color: "blue",
      };
      this.update.updatenote(reqdata,this.noteId).subscribe((response: any) => {
        console.log("note is updated:  ",response);
      });

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
    
  }
}
