import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponent,SecondComponent,ThirdComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Routing_11';
}
