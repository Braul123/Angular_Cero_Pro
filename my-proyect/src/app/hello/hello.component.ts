 //Se importa el componente que esta relacionado con este mismo,
//El imput sirve para utilizarlo como se muestra a continuacion:: asignar valor desde fuera del componente 
import {  Component, Input, Output, EventEmitter} from '@angular/core';

//Este @component nos permite darle estilos a nuestro proyecto,
// llamandolo desde otro archivo en el mimo componente como lo son el html y el css
@Component ({

    //el selector se usa para asignar la ruta como se puede llamar
    //este componente para ser usado en otro componente.
    selector: 'custom-hello',

    //Este se usa para asignar el html que tendra el componente.
    templateUrl: './hello.component.html',

    //Con este se asigna el estilo de que tendrá el componente
    styleUrls: [
        './hello.component.css'
    ]
})
export class HelloComponent{

    //Input permite asignar valores desde fuera del componente, 
    //ejemplo asignado desde *** app.component.html **** 
    // como un atributo :::: name = "Alexander"
    @Input() name: string = null;

    //@Output se usa para definir EventEmitters los cules se definen de la siguiente manera
    @Output() sayHello : EventEmitter<string> = new EventEmitter<string>();

    //variales para formulario en Hello.componen.html
    public namesList: Array<string> = []
    public inputName: string = ""; 

    // Dentro del constructor se definen todas las variables tanto publicas como privadas
    constructor(){
    }
    
   //Esta funcion se ejecuta cunado se da click sobre el nombre Alexander    
    onNameClick(){
        //say hello es un eventemitter, el cula va a emitir un mensaje diciendo hola mundo
        this.sayHello.emit('Hola Mundo') 
    }

    //se ejecuta cada ve que se oprime el boton de enviar "Add Name" declarado en hello.componet.html
    addName(){
        this.namesList.push(this.inputName)  //Adiciona los datos al arreglo namesLIst
        this.inputName = '';                 //Limpia el formulario
        console.log(this.namesList);         //Muestra en consola el arreglo
    }

    //Se ejecuta cada vez que el usaurio oprime una tecla llenando elcampo de "Add Name" en hello.componet.html
    // ************** no se esta usando ***************************************
    updateInputName(event){
        this.inputName = event.target.value //Obtien el valor de la letra y la conctena con la anterior
        console.log(this.inputName);        //Muestra en consola lasletras que se van añadiendo y con va quedando el string 
    }
}