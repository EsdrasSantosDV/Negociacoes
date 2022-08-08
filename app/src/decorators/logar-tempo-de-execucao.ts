//DECORATOR E BASICAMENTE UMA FUNÇÃO
export function logarTempoDeExecucao(emSegundos:boolean=false)
{
    return function(
        //METODO ESTATICO,FUNCAO CONSTRUTORA
        //NÃO ESTATICO,RETORNA O PROTOTYPE
        target:any,
        propertyKey:string,
        descriptor:PropertyDescriptor

    )
    {
        const metodoOriginal=descriptor.value;
        //Mudar o comportamento
        descriptor.value=function(...args:Array<any>)
        {
            //CHECAR SE E SEGUNDOS OU MILI
            let divisor=1;
            let unidade='milisegundos';
            if(emSegundos)
            {
                divisor=1000;
                unidade='segundos';
            }
            const t1 =performance.now();
            //CHAMAR O METODO ORIGINAL EX
            //apply permite executar um contexto
            const retorno =metodoOriginal.apply(this,args);
            const t2 =performance.now();
            console.log(`${propertyKey},tempo de execucao: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        };

        return descriptor;
    }


}