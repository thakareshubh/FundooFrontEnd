import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  
  notesArray:any=[];
  constructor(private GetAllNote: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {    
    this.GetAllNote.getNoteList().subscribe( (response: any) => {
        this.notesArray = response.data;
        console.log(response);
        this.notesArray.reverse();
        this.notesArray = this.notesArray.filter((object: any) => {
        return object.isTrash=== false && object.isArchieve === false
       
      })
    })
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getAllNotes()
  }
  receiveEvent($event: any) {
    this.getAllNotes();
  }
  updatedData(value: any) {

    this.getAllNotes();
  }
 
}
