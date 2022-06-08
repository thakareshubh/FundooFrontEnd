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
    // this.notelistId = [this.noteCard.noteId];
    let del= this.activatedroute.snapshot.component;
    if (del == TrashNoteComponent) {
      this.isTrash = true;
      console.log(this.isTrash);
    }
    if(del == ArchieveComponent)
    {
      this.isArchieve=true;
      console.log(this.isArchieve);
    }
  }

  Trashnote() {
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
  setColor(Color: any) {
    // this.notelistId = [this.noteCard.Color = color];
    
    let reqData={ 
      noteId:this.noteCard.noteId,
      Color:Color,
    }   
    
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
      // window.location.reload()
           
  }

  Restorenote() {
    // this.notelistId = [this.noteCard.noteId];
    let reqdata = {
      noteId: [this.noteCard.noteId],

      isTrash: false,
    };
    console.log('note is restore');
    this.noteSrc
      .deleteNote(reqdata)
      .subscribe((response: any) => {
        console.log('Restore Notes are :', response);
        this.sanv.open('restore note Successfully', '', {
          duration: 3000,
        })
      });
      window.location.reload()
           
  }

  //unArchive
  Urchieve() {this.notelistId = this.noteCard.noteId;
    let reqdata = {
      noteId: [this.noteCard.noteId],

      isArchieve: false,
    };
    console.log('note is unarchieve');
    this.noteSrc
      .archieveNote(reqdata, this.notelistId)
      .subscribe((response: any) => {
        console.log(response);
        this.sanv.open('unarchieve  Successfully', '', {
          duration: 3000,
        })
        
      });
      // window.location.reload();
  }
}
