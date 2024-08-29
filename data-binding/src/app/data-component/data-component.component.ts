import { Component } from '@angular/core';

@Component({
  selector: 'app-data-component',
  standalone: true,
  imports: [],
  templateUrl: './data-component.component.html',
  styleUrl: './data-component.component.css'
})
export class DataComponentComponent {

  url: string = 'https://github.com/aliciaguiradelo';
  urlImg: string = 'https://designcomcafe.com.br/wp-content/uploads/2023/10/como-criar-prompts-para-geracao-de-imagens-com-ia-1024x538.jpg';
  urlImg2 = "https://blog.ebaconline.com.br/blog/wp-content/uploads/2023/11/image6-1.png";
  cursoAngular: boolean = true;
  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
}
