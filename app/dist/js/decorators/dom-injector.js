export function domInjector(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            console.log(`buscando elemento do DOM COM O SELETOR
            ${seletor} PARA INJETAR EM
            ${propertyKey}`);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
