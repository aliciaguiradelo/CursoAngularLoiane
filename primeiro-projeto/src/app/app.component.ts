import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TerceiroComponentComponent } from "./terceiro-component/terceiro-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TerceiroComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeiro-projeto';
}
