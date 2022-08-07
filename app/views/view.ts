
// T PODE SER QUALQUER TIPO E NAS CLASSES FILHAS E QEU EU DECIDO

//PRA CRIAR CLASSES ABSTRACT
export abstract class View<T>{
    protected elemento:HTMLElement;

    constructor(seletor:string){
        this.elemento=document.querySelector(seletor);
    }   


    abstract template(model:T):string;

    uptade(model:T):void{
        const template= this.template(model);
        this.elemento.innerHTML=template;
    }

}