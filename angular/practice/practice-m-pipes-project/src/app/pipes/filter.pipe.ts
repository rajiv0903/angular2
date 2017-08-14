import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pure and Impure filter - 
 * After data got filtered out if we add new object - filter does not rerun 
 * This is default beavior of Angular any pipes i.e. pure is true 
 * If we want to make sure that filter should run whenever data got 
 * changed then add pure properties and mark as false- This has a performane issue
 */
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName:string): any {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    // const resultArray = []; 
    // for (const item of value){
    //   if(item[propName] === filterString){
    //     resultArray.push(item);
    //   }
    // }
    // return resultArray;
    return  value.filter(function (item, index, arr){
      return item[propName] === filterString;
    });
  }

}
