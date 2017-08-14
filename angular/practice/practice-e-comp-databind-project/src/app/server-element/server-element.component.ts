import { 
  Component, 
  OnInit , 
  Input, 
  ViewEncapsulation, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked ,
  OnDestroy,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None - Will work globally , Native- Shadow DOM - Browser 
  //compatibility 
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck , 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{

  /**
   *  Input - Make the properties bindable from outside component
   * This property is not accessible from outside of this component
   * To make it available to parent component we need a decorator 
   */

  //@Input() element: { name: string, type: string, content: string };
  //Binding through alias
  @Input('srvElement') element: { name: string, type: string, content: string };
  @Input() name:string; 

   // Added to check onDestroy
  @Input('srvElementIndex') eIndex: number;
  @Output() serverDestroyed = new EventEmitter<number> ();

  //refer this template
  @ViewChild('heading') header: ElementRef;

  //refer app template- ng-content
  @ContentChild('contentParagraph') paragraph: ElementRef;

  // Added to check onDestroy
  onSrvDestroy():void{
    this.serverDestroyed.emit(this.eIndex);
  }

  constructor() { 
    console.log('constructor called!');
  }
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content Child Element:'+this.header.nativeElement.textContent);
    console.log('Text Content of paragraph Content:'+this.paragraph.nativeElement.textContent);
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph Content:'+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called!');
     console.log('Text Content Child Element:'+this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
}
