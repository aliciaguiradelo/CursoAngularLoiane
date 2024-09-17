import { Component, Input } from '@angular/core';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-input-outpt-compo',
  standalone: true,
  imports: [OutputPropertyComponent],
  //imports: ['nomeCurso:nome'],
  templateUrl: './input-outpt-compo.component.html',
  styleUrl: './input-outpt-compo.component.css'
})
export class InputOutptCompoComponent {

  // @Input() nome: string = '';
  // NomeCurso: string = 'Angular';
  @Input('nome') NomeCurso: string = '';
  valorInicial=15;

  // onMudouValor(evento){
  //   console.log(evento.novoValor);

  // }

}
