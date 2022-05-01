import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit,OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() public subtitulo: string = "Aprendendo Angular!";
  public valor: number = 1;
  public destruir: boolean=true;
  constructor() {}

public adicionar(): number{
    return this.valor +=1;
}
public destruirComponent(){
  this.destruir=false;
}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }
  ngOnChanges(): void {
    console.log("Foi alterado com sucesso!");
  }
  ngDoCheck(){
    console.log("ngDoCheck")

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
ngOnDestroy(): void {
    console.log("ngOnDestroy - Componente destruído.")
}
}
