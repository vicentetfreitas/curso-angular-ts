import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

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
}
