export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(
    dateString: string,
    quantityString: string,
    valueString: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ","));
    const quantity = parseInt(quantityString);
    const value = parseInt(valueString);

    // Instance Negociacao.
    return new Negociacao(date, quantity, value);
  }
}
