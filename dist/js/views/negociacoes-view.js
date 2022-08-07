export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(model) {
        return `
             <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>


                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                          
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>

            </table>    
        `;
    }
    uptade(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = this.template(model);
    }
}
