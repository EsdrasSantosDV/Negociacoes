import { Negociacoes } from "./negociacoes.js";

export class Negociacao{

 
 
    //TIPO DEPOIS,NO CONTRUTOR
    constructor(private _data:Date,public readonly _quantidade:number,public readonly _valor:number)
    {}

    get data():Date{
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume():number{
        return this._valor * this._quantidade;
    }


    //TODO METODO ESTATICO PODE SER CHAMADO NA CLASSE E SEMPRE PUBLIC PQ NÃO FAZ SENTIDO SER PRIVADO
    public static criaDe(dataString:string,quantidadeString:string,valorString:string):Negociacao
    {
        const exp=/-/g;
        //PROCURAR TODO MUNDO QUE TEM HIFEN E SUBSTITUIR POR ,
        const date= new Date(dataString.replace(exp,','));
        const quantidade=parseInt(quantidadeString);
        const valor=parseFloat(valorString)
        return new Negociacao(date,quantidade,valor );
    }


}