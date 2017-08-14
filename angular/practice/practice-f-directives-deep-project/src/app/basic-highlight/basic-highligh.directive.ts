import { Directive , ElementRef, OnInit} from '@angular/core';

/**
 * This is attribute directive 
 * [] indicates it is attribute 
 */
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    /**
     * Angular will give the reference of the element to this property
     */
    constructor(private elementRef: ElementRef){
        //we can do this  but better place on ngOnit
        //this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    ngOnInit(){
        //This is not a good pratice directly element - use Renderer
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}