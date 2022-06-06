import { TrashNoteComponent } from './../trash-note/trash-note.component';
import { ArchieveComponent } from './../archieve/archieve.component';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/services/NoteService/note-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  

  notelistId: any;
  noteId: any;
  isTrash:boolean=false;
  isArchieve:boolean=false;
  

  constructor(
    private noteSrc: NoteServiceService,
    private activatedroute: ActivatedRoute,private sanv:MatSnackBar
  )
   {}

  ngOnInit(): void {
   
  }

  Deletenote() {
    // this.notelistId = [this.noteCard.noteId];
    let reqdata = {
      noteId: [this.noteCard.noteId],

      isTrash: true,
    };
    console.log('note is deleted');
    this.noteSrc
      .deleteNote(reqdata)
      .subscribe((response: any) => {
        console.log('Deleted Notes are :', response);
        this.sanv.open('delete note Successfully', '', {
          duration: 3000,
        })
      });
      window.location.reload()
           
  }

  archieve() {this.notelistId = this.noteCard.noteId;
    let reqdata = {
      noteId: [this.noteCard.noteId],

      isArchieve: true,
    };
    console.log('note is archieve');
    this.noteSrc
      .archieveNote(reqdata, this.notelistId)
      .subscribe((response: any) => {
        console.log('Archieve Notes are :', response);
        this.sanv.open('archieve  Successfully', '', {
          duration: 3000,
        })
        
      });
      window.location.reload();
  }
  
  //color
  setColor(color: any) {
    this.notelistId = [this.noteCard.Color = color];
    
    let reqData = { color: color,
                    noteId:this.noteCard.noteId};
    
    this.noteSrc.colorNoteService(reqData) .subscribe((res: any) => {
        console.log(res);
        
          this.sanv.open('color changes Successfully', '', {
        duration: 3000,
      })
      });
      // window.location.reload();
  }
  colorarray = [
    '#fff',
    '#f28b82',
    '#fbbc04',
    '#fff475',
    '#ccff90',
    '#a7ffeb',
    '#cbf0f8',
    '#aecbfa',
  ];

  DeletePermenet() {
    // this.notelistId = [this.noteCard.noteId];
    let reqdata = {
      noteId: [this.noteCard.noteId],

      isTrash: true,
    };
    console.log('note is deleted');
    this.noteSrc
      .deleteforever(reqdata)
      .subscribe((response: any) => {
        console.log('Deleted Notes are :', response);
        this.sanv.open('delete note Successfully', '', {
          duration: 3000,
        })
      });
      window.location.reload()
           
  }
}
