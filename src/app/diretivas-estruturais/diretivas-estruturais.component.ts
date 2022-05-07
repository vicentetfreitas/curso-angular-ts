import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  // array de objetos
  public lista: Array<{nome:string, idade: number}> = [
    {nome:"Vicente Freitas",idade:30},
    {nome:"Freitas Teixeira", idade:20},
    {nome:"Vicente Teixeira de Freitas",idade:15}
  ];

  constructor() {}

  ngOnInit(): void {
    // A cada tempo faça
    setInterval(() => {
      if (this.condition) {
        this.condition = true;
      } else {
        this.condition = false;
      }
    }, 2000);
  }
  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
      console.log("Falso");
    } else {
      this.conditionClick = true;
      console.log("Verdadeiro");
    }
  }
  public onClickAdicionarLista(){
    this.lista.push({nome:"Nay",idade:29});
  }
  public onClickEventList(event: number){
    this.lista.splice(event, 1)
  }

}
