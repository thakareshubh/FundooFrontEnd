import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatSnackBar} from '@angular/material/snack-bar';
import { DataPipeService } from 'src/app/services/data-pipe.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input()GetNote: any;
  @Output() displaytogetallnotes=new EventEmitter<string>()
  subscription:any;
  searchword:any;
  message:any;
  sentmsg:any;
  
  constructor(public dialog: MatDialog,private snav:MatSnackBar,private data:DataPipeService) { }
  
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => {
      this.message = message;
      console.log(message.data[0]);
      this.searchword = message.data[0]
    });
  }
  openDialog(notation: any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: 'auto',
      height:"auto",
      
      data: notation,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.snav.open('edit note Successfully', '', {
        duration: 3000,
      })
      
    });
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

}
}