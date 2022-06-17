import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss'],
})
export class TrashNoteComponent implements OnInit {
  trashList: any=[];

  constructor(
   
    private noteService: NoteServiceService
  ) {}

  ngOnInit(): void {
    this.getTrashList();
  }
  getTrashList() {
    this.noteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res.data);
      this.trashList = res.data;
      this.trashList.reverse();
      this.trashList = this.trashList.filter((object: any) => {
        return object.isTrash === true;
      });
    });
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("insidegetallnotes", $event);
    this.getTrashList();

}
}
