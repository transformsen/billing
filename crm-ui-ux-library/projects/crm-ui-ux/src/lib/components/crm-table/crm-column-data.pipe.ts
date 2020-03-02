import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crmColumnData'
})
export class CrmColumnDataPipe implements PipeTransform {
  /**
   * get column data from object
   * @param obj object
   * @param property property string to get from object
   */
  transform(obj: any, property: string): any {
    const properties = property.split('.');
    let target = obj;

    properties.forEach(key => {
      if (target.hasOwnProperty(key)) {
        target = target[key];
      }
    });

    return target;
  }
}
