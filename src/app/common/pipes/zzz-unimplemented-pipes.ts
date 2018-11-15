import { Pipe, PipeTransform } from '@angular/core';


// TODO: d96dd3f8: hgb_currency pipe
@Pipe({
  name: 'hgb_currency'
})
export class Pipe_hgb_currency implements PipeTransform {
  transform(value: any): any {
    let value2pt = value.toFixed(2);
    return `$${value2pt} CAD`;
  }
}