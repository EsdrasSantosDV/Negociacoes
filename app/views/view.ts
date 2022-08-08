
// T PODE SER QUALQUER TIPO E NAS CLASSES FILHAS E QEU EU DECIDO

//PRA CRIAR CLASSES ABSTRACT
export abstract class View<T>{
    protected elemento:HTMLElement;
    private escapar =false;

    //?PARAMETRO OPCIONAL ESCOLHA CASO TENTEM COLOCAR UM SCRIPT NO SITE
    //O PARAMETRO OPCIONAL NUNCA PODE SER NO PRIMEIRO PARAMETRO
    constructor(seletor:string,escapar?:boolean){
        const elemento=document.querySelector(seletor);
        if(elemento)
        {
            this.elemento=elemento as HTMLElement;
        }
        else
        {
            Error(`Seletor ${seletor} não existe no DOM.Verifique Desenvolvedor `)
        }
       
        if(escapar)
        {
            this.escapar=escapar;
        }
    }   


    protected abstract template(model:T):string;

    uptade(model:T):void{
       

        let template=this.template(model);
        if(this.escapar)
        {
            template=template.replace(/<script>[\s\S]*?<\/script>/,'');      
        }
    
        this.elemento.innerHTML=template;
       
    }

}