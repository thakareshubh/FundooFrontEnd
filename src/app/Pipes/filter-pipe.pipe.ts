import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  // transform(value: any,filterdString:string) {
  //   if(value.lenght ===0 || filterdString ==='')
  //   {return null;}
  //   const notes=[];
  //   for(const note of value){
  //     if(note['title']===filterdString && note['description']==filterdString){
  //       notes.push(note);
  //     }
  //   }
  //   return notes;
  // }
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      args = args.toLocaleLowerCase();
    }

    return value.filter((note: any) => {
      return note.title.includes(args) | note.description.includes(args);
    })

  }

}
