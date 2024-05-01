import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BatchListComponent,BatchDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http_and_observables';
}
