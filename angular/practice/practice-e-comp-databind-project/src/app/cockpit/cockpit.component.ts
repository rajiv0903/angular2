import { Component, OnInit, EventEmitter, Output , ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName: string = '';
  newServerContent: string = '';

  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  /**
   * Let's have a property to emit the event 
   */
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }> ();
  @Output('bprCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }> ();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
       serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
