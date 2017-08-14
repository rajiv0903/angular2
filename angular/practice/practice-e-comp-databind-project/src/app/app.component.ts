import { Component } from '@angular/core';


/**
 * Property and Event Binding
 * 
 * @ HTML Elements - Native Properties & Event
 * @ Directives - Custom Properties & Event
 * @ Components - Custom Properties & Event
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements: 
  Array<{ name: string, type: string, content:string }>
   = [{ 
      name: 'TestServer', 
      type: 'server', 
      content: 'Just a test!' }
      ];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    console.log(blueprintData);
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  /**
   * Added to check ngOnChanges
   */
  onChangeFirst(): void{
    if(this.serverElements.length > 0)
     this.serverElements[0].name= 'Changed!';
  }

  onDestroyFirst(): void{
    this.serverElements.splice(0, 1);
  }

  /**
   * Added to check ngOnDestroy using normal method call from template
   */
  onDestroyed(index:number){
     this.serverElements.splice(index, 1);
  }

  /**
   * Added to check ngOnDestroy using normal Event and Property Binding of index
   */
  onSrvDestroyed(index: number): void{
    this.serverElements.splice(index, 1);
  }


}
