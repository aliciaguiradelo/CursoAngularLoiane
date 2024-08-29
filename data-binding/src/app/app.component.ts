import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponentComponent } from "./data-component/data-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
