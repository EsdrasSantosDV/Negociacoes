import { View } from "./view.js";
export class MensagemView extends View<string>{
    
    //COLCOANDO PROTECTED IREMOS DIMINIUR A VISIBILIDADE DESSE METODO NA CONTROLER
    protected template(model:string):string{
        return `
            <p class="alert alert-info">${model}</p>
        
        `
    }

  
}