import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://Juliano.dutra';
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
