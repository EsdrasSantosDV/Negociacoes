import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";



export class NegociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes:Negociacoes=new Negociacoes();
    private negociacoesView=new NegociacoesView('#negociacoesView',true);
    private mensagemView=new MensagemView('#mensagemView');
    constructor()
    {
        // AS GARANTO QUE O TIPO VAI SER ESSE,CASTING EXPLICITO DAS DUAS MANEIRAS
        this.inputData=document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade=<HTMLInputElement>document.querySelector('#quantidade');
        this.inputValor=document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.uptade(this.negociacoes);
       
    }

    public adiciona():void{
        //CRIANDO UMA NEGOCIACAO UTILIZANDO UM METODO ESTATICO UTILIZNADO A PROPRIA CLASSE
       
        const negociacao=Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
   
        )

        //SOMENTE DIAS UTEIS 0 - 6 SABADO E 6
        if(!this.isDiaUtil(negociacao.data))
        {
            this.mensagemView.uptade('Apenas negociacoes em dias uteis são aceitas');
            return ;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
    
        this.atualizaView();
        const t2=performance.now();
    
    }

    private isDiaUtil(data:Date){
        return data.getDay()>DiasDaSemana.DOMINGO && data.getDay()<DiasDaSemana.SABADO
    }

  

    private limparFormulario():void{
        this.inputData.value='';
        this.inputQuantidade.value='';
        this.inputValor.value='';
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.uptade(this.negociacoes);
        this.mensagemView.uptade('Negociação Realizada com Sucesso');
   
    }
}