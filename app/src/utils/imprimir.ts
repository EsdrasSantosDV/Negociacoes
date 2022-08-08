import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";


//EXEMPLO DE POLIMORFISMO,CAPACIDADE DE UM OBJETO
// DE SER REFERENCIADO DE VARIAS FORMAS
export function imprimir(...objetos: Imprimivel[])
{
    for(let objeto of objetos)
    {
        console.log(objeto.paraTexto());
    }
}