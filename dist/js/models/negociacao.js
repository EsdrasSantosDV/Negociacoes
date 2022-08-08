export class Negociacao {
    //TIPO DEPOIS,NO CONTRUTOR
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
    //TODO METODO ESTATICO PODE SER CHAMADO NA CLASSE E SEMPRE PUBLIC PQ NÃO FAZ SENTIDO SER PRIVADO
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        //PROCURAR TODO MUNDO QUE TEM HIFEN E SUBSTITUIR POR ,
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
