import { Directive, Input , TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  /**
   * Make sure property name should match with selector name 
   * also set is given so that we can take input
   */
  @Input() set appUnless(condition: boolean){
    if(!condition){
      //render
      this.vcref.createEmbeddedView(this.templateRef);
    }
    else{
      //clear
      this.vcref.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcref: ViewContainerRef) { }

}
