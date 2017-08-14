import { 
  Directive , 
  Renderer2, 
  OnInit, 
  ElementRef,
  HostListener,
  HostBinding, 
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  /**
   * Custom property binding through template
   */
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

   /**
   * Using HostBinding we can change the color 
   */
  // @HostBinding('style.backgroundColor') bkColor:string = 'transparent';
  @HostBinding('style.backgroundColor') bkColor:string ; //= this.defaultColor;

  constructor(private renderer: Renderer2,
    private elRef: ElementRef) { }

  ngOnInit(){
    /**
     * Renderer needs element reference to set the style
     */
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.defaultColor = 'transparent';
    this.bkColor = this.defaultColor;
  }

  

  /**
   * We need to react on some events occuring on the element the 
   * directive sits on
   * Need to provide event listener - mouseenter
   */
  @HostListener('mouseenter') mouseover(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      // this.bkColor = 'blue';
      this.bkColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      // this.bkColor = 'transparent';
      this.bkColor = this.defaultColor;
  }
 
  
}
