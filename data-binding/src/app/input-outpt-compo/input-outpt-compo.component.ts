import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-outpt-compo',
  standalone: true,
  imports: [],
  //imports: ['nomeCurso:nome'],
  templateUrl: './input-outpt-compo.component.html',
  styleUrl: './input-outpt-compo.component.css'
})
export class InputOutptCompoComponent {

  // @Input() nome: string = '';
  // NomeCurso: string = 'Angular';
  @Input('nome') NomeCurso: string = '';

}
