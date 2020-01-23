import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Esta es una variable que fue utilizada para el app.component.html
  //para asignar este valor a otra variable :: name :: declarada en el hello.component.ts
  // se usó para ejecutar Property bindings.
  public myName: string = "Alexander"

  //se declaran estas variables para asignarle un estilo al titulo del proyecto dando clic en el nombre 
  public tittleStyles:{};
  public counter = 0; 

  //onSayHello se ejecuta cuando se ejecuta el event binding sayHello que se encuen tra en app.component.html
  onSayHello(message){
    console.log(message);
    //cada vez que entra al metodo se ejecuta eta funcion y se suma uno al contador   
    this.counter ++ ; 
    this.updateTittleStyles()
  }

  //se ejecuta cuando la clase [ngClass] se ejecuta en app.component.html
  updateNameClasses(name:string){
    return {
    'error' : name.length <=3,
    'warning': name.length > 3 && name.length <=6,
    'success': name.length >6 ,
    'bold' : name.length >8
  }
  }
  // llama el objeto tittleStyles y le asigna un margen y le cambia el color validando el contador 
  updateTittleStyles(){
    this.tittleStyles = {
      'margin-top' : '40px',
      'color' : this.counter < 3 ? 'green' : 'goldenrod'
    }
  }
}
