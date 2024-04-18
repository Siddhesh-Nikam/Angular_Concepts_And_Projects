import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent 
{
    public Data="_____________";

    public MyAction()
    {
      this.Data="Submit button clicked";
    }

    public MyActionNew(value:any)
    {
      console.log(value);
    }

}
