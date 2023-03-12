import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {
  protected template(negociacoes: Negociacoes): string {
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

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date);
  }
}
