export function inspect()
{
    return function(
        target:any,
        // NOME DO METODO
        propertyKey:string,
        descriptor:PropertyDescriptor


    )
    {
        const metodoOriginal=descriptor.value;
        descriptor.value=function(...args:any[])
        {   
            console.log(`-------Metodo ${propertyKey}`);
            console.log(`-------Parametros ${JSON.stringify(args)}`);
            const retorno=metodoOriginal.apply(this,args);
            console.log(`-------Parametros ${JSON.stringify(retorno)}`);
            return retorno
        }

        return descriptor;
    }
}