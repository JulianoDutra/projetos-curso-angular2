import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];
  
  constructor(private cusosServices: CursosService) { 
    this.nomePortal = 'http://juliano.dutra';

    //var servico = new CursosService();

    this.cursos = this.cusosServices.getCursos();
  }

  ngOnInit() {
  }

}
