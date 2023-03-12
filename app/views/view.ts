export abstract class View<T> {
  protected element: HTMLElement;
  private escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);

    if (element && element instanceof HTMLElement) {
      this.element = element;
    } else {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique.`);
    }

    if (escape) {
      this.escape = escape;
    }
  }

  public update(model: T): void {
    let template: string = this.template(model);

    if (this.escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }

    this.element.innerHTML = template;
  }

  protected abstract template(model: T): string;
}
