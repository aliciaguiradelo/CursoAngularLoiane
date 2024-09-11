import { Component, Input, Output}  from '@angular/core';
import EventEmitter from 'events';

@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();
  novoValor: number;

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
