import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOutptCompoComponent } from '../input-outpt-compo/input-outpt-compo.component';


@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [FormsModule, InputOutptCompoComponent],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  nomeUm: string = 'ABC';
  NomeCurso:string= 'Angular';
  valorInicial=15;
  pessoa: any = {
    nome : 'def',
    idade : 23

  }

}
