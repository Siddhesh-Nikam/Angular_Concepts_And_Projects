import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClassBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Class_Binding_5';
}
