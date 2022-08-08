//COMO NÃO QUERO GRAVAR SOBRE O METODO ORIGINAL,ESSE NÃO E UM DECORATOR DE METODO
export function domInjector(seletor:string)
{
    //TARGET PROPRIEDADE DO PROTOTOYPE
    return function(target:any,propertyKey:string)
    {

        //METODO QUE BUSCA O ELEMENTO DO DOM EM BASE DO SELETOR

        //SEMPRE VAI LEMBRAR DESSE HTMLElement
        let elemento:HTMLElement;
        const getter=function(){
            if(!elemento)
            {
                elemento=<HTMLElement>document.querySelector(seletor); 
                 console.log(`buscando elemento do DOM COM O SELETOR
                 ${seletor} PARA INJETAR EM
                 ${propertyKey}`);
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get:getter}
            )
    }
    
}