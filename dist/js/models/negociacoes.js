export class Negociacoes {
    constructor() {
        //CRIAR LISTA
        this.negociacoes = [];
    }
    adiciona(negociaocao) {
        this.negociacoes.push(negociaocao);
    }
    lista() {
        //NOVA REFERENCIA QUE NÃO APONTA PARA MESMA,PELO CONSOLE PODE MEXER MAIS NÃO PODE ALTERAR A LISTA ORIGINAL
        //SPADDING OPERATOR
        return [...this.negociacoes];
    }
}
