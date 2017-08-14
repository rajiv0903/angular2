import {Pipe, PipeTransform } from '@angular/core';

//Pipe Decorator
@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform {

    //Non Parameterized- 10 charcaters is hardcoded
    // transform(value: any){
    //     if(value.length > 10){
    //         return value.substr(0, 10)+' ...';
    //     }
    //     return value;
    // }
     transform(value: any, limit: number, anotherArg:any){
        if(value.length > limit){
            return value.substr(0, limit) + anotherArg;
        }
        return value;
    }
}
