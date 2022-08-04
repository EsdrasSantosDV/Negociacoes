import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //CRIAR LISTA
    private negociacoes: Array<Negociacao>=[];

    adiciona(negociaocao:Negociacao)
    {
        this.negociacoes.push(negociaocao);
    }
    //IDENTICO AO ARRAY MAS MUDA QUE NÃO PODE REALIZAR ALGUMAAS OPERAÇOES
    lista():ReadonlyArray<Negociacao>
    {
        //NOVA REFERENCIA QUE NÃO APONTA PARA MESMA,PELO CONSOLE PODE MEXER MAIS NÃO PODE ALTERAR A LISTA ORIGINAL
        //SPADDING OPERATOR
        return this.negociacoes;
    }



}

