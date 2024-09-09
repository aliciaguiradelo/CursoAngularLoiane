import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponentComponent } from "./data-component/data-component.component";
import { ClassStyleBindingComponent } from "./class-style-binding/class-style-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputOutptCompoComponent } from './input-outpt-compo/input-outpt-compo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataComponentComponent, ClassStyleBindingComponent, EventBindingComponent, TwoWayDataBindingComponent, InputOutptCompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
