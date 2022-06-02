import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
  
  notes: any= [];
  constructor(private GetAllNote: NoteServiceService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {    
    this.GetAllNote.getNoteList().subscribe( (response: any) => {
        this.notes = response;
        console.log(response);
       
      })
    }
}

