export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociaocao) {
        this.negociacoes.push(negociaocao);
    }
    lista() {
        return this.negociacoes;
    }
}
