import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponentComponent } from "./data-component/data-component.component";
import { ClassStyleBindingComponent } from "./class-style-binding/class-style-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponentComponent, ClassStyleBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
