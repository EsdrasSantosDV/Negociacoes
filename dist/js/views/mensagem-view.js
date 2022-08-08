import { View } from "./view.js";
export class MensagemView extends View {
    //COLCOANDO PROTECTED IREMOS DIMINIUR A VISIBILIDADE DESSE METODO NA CONTROLER
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        
        `;
    }
}
