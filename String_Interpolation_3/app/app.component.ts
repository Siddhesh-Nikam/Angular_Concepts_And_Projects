import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StrInterpolationComponent } from './str-interpolation/str-interpolation.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StrInterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'String_Interpolation_3';
}
