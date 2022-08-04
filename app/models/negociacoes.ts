import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //CRIAR LISTA
    private negociacoes: Array<Negociacao>=[];

    adiciona(negociaocao:Negociacao)
    {
        this.negociacoes.push(negociaocao);
    }

    lista():Array<Negociacao>
    {
        //NOVA REFERENCIA QUE NÃO APONTA PARA MESMA,PELO CONSOLE PODE MEXER MAIS NÃO PODE ALTERAR A LISTA ORIGINAL
        //SPADDING OPERATOR
        return [...this.negociacoes];
    }



}

