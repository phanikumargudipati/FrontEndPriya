import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name:string,Gender:string): string {
    if(Gender=='male')
    return "MR "+name;
    else
    return "MISS "+name;
  }

}
