import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  @Output() public Myevent = new EventEmitter();
  
  sendMessage(){
    this.Myevent.emit("Hello child component");
  }
}
