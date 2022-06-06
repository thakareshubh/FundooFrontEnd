import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {

  archiveList: any=[];
  

  constructor(public dialog: MatDialog, private noteService: NoteServiceService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }
  getArchiveList() {
    this.noteService.getAllNotesservice().subscribe((res: any) => {
      console.log(res.data);
       this.archiveList=res.data;
       this.archiveList.reverse();
       this.archiveList = this.archiveList.filter((object: any) => {
        return object.isArchieve === true;
      })
     
    });

  }

}
