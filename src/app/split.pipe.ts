import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: false,
  name: 'split'
})
export class SplitPipe implements PipeTransform {
   transform(value: any, args: any[]): any {
     return value.split('');
   }
}