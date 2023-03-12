import { NegociacaoController } from "./controllers/negociacao-controllers.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();

const handleFormSubmit = (event: Event) => {
  event.preventDefault();
  
  controller.adiciona(); // Ativando o controller.
};

const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", handleFormSubmit);
} else {
  throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
}

