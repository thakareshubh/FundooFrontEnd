import { ArchieveComponent } from './../archieve/archieve.component';
import { TrashNoteComponent } from './../trash-note/trash-note.component';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  notelistId:any;
  noteId:any;
  // isDeleted:boolean=false;
  // isArchived:boolean=false;
  
  constructor(private noteSrc: NoteServiceService,private activatedroute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.notelistId=[this.noteCard.noteId]
    
  }
 
  Deletenote() {
    let reqdata = {
       noteId: [this.noteCard.noteId],
       
      isDeleted: true,
      
    }
    console.log("note is deleted",)
    this.noteSrc.deleteNote(reqdata,this.notelistId).subscribe((response: any) => {
      console.log('Deleted Notes are :', response); 
      // this.trashNoteToRefresh.emit(Response)
    })
  }


  archieve() {
    let reqdata = {
       noteId: [this.noteCard.noteId],
       
      isDeleted: true,
      
    }
    console.log("note is archieve",)
    this.noteSrc.archieveNote(reqdata,this.notelistId).subscribe((response: any) => {
      console.log('Archieve Notes are :', response); 
      // this.trashNoteToRefresh.emit(Response)
    })
  }

}
