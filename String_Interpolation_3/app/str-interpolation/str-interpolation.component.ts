import { Component } from '@angular/core';

@Component({
  selector: 'app-str-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './str-interpolation.component.html',
  styleUrl: './str-interpolation.component.css'
})
export class StrInterpolationComponent 
{
    public Message : string = "Angular is a client side framework";

    Display()
    {
      return "Hello Duniya";
    }

}

