// T PODE SER QUALQUER TIPO E NAS CLASSES FILHAS E QEU EU DECIDO
//PRA CRIAR CLASSES ABSTRACT
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    uptade(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
