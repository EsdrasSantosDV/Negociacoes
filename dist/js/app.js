// NÃO ESQUECE O .JS
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    //PRA NÃO RECARREGAR
    event.preventDefault();
    controller.adiciona();
});
// const negociacoesView=new NegociacoesView
// const template =negociacoesView.template();
// console.log(template);
//const view=new View('algumseletor');
// view.uptade('xuxa');
