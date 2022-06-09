import { LableService } from './../../Lable service/lable.service';
import { Component, Input, OnInit } from '@angular/core';
// export interface DialogData {
//   animal: string;
//   name: string;
// }


@Component({
  selector: 'app-edit-lable',
  templateUrl: './edit-lable.component.html',
  styleUrls: ['./edit-lable.component.scss']
})
export class EditLableComponent implements OnInit {
  @Input()GetLable: any;
  lableName:any;
  isLable:boolean =false;
  isDelete:boolean =false;
  constructor(private lable:LableService,) { }

  hideAndShow(){
    console.log("calling hide")
    this.isLable=!this.isLable
    
  }
  show(){
    this.isDelete=!this.isDelete
  }


  ngOnInit(): void {
  }

  onCreate() {
    

    // stop here if form is invalid
    
      let reqdata = {
        lableName:this.lableName
      };
      this.lable.createLabel(reqdata).subscribe((response:any)=>{
        console.log(response);
         
      
      });
      

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.noteForm.value));
    }
  }

