import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacoes) {
        const negociacoes_list = negociacoes
            .lista()
            .map((negociacao) => {
            return `
        <tr>
          <td>${this.formatDate(negociacao.data)}</td>
          <td>${negociacao.quantidade}</td>
          <td>${negociacao.valor}</td>
        </tr>
      `;
        })
            .join("");
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
          ${negociacoes_list}
        </tbody>
      </table>
    `;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
