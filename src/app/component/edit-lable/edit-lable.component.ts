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
  @Input()lableArray:any=[];
  LabelId:any
  isEdit:boolean=false;
  

  constructor(private lable:LableService,private getLable:LableService) { }

  edit(){this.isEdit=!this.isEdit}

  hideAndShow(){
    console.log("calling hide")
    this.isLable=!this.isLable
    
  }
  show(){
    this.isDelete=!this.isDelete
  }


  ngOnInit(): void {
    this.getAllLable();
  }

  //create lable
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

    //get the lable
    getAllLable() {   
      
      
      this.getLable.getLable().subscribe( (response: any) => {
          this.lableArray = response.data;
          console.log(response);
          this.lableArray.reverse();
        //   // this.notesArray = this.notesArray.filter((object: any) => {
        //   // return object.isTrash=== false && object.isArchieve === false
         
        // })
      })
    }

    //delete lable
    DeleteLable(labelId:any) {  
      
      let reqdata={
        LabelId:labelId,
       
      }
      console.log(reqdata)
      
      this.getLable.deleteLabel(reqdata).subscribe( (response: any) => {
        console.log("lable")
          console.log(response);
          
        //   // this.notesArray = this.notesArray.filter((object: any) => {
        //   // return object.isTrash=== false && object.isArchieve === false
         
        // })
      });
    }

    //edit lable
    updateLable(LabelArr:any) {  
      
      let reqdata={
      
        LabelName:LabelArr.lableName,
        LabelId:LabelArr.labelId,
       
      }
      console.log(reqdata)
      
      this.getLable.editLabel(reqdata).subscribe( (response: any) => {
        console.log("lable")
          console.log(response);
          
        //   // this.notesArray = this.notesArray.filter((object: any) => {
        //   // return object.isTrash=== false && object.isArchieve === false
         
        // })
      })
  }
}
