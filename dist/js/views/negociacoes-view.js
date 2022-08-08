import { View } from "./view.js";
export class NegociacoesView extends View {
    //COLCOANDO PROTECTED IREMOS DIMINIUR A VISIBILIDADE DESSE METODO NA CONTROLER
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
                          
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao._quantidade}</td>
                                <td>${negociacao._valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>

            </table>    
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
    uptade(model) {
        const template = this.template(model);
        this.elemento.innerHTML = this.template(model);
    }
}
