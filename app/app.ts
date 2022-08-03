import { Negociacao } from "./models/negociacao.js";

const negociacao=new Negociacao(new Date(),10);

console.log(negociacao.data)
console.log(negociacao.volume)
