import { NegociacaoController } from "./controllers/negociacao-controllers.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");

const handleFormSubmit = (event: Event) => {
  event.preventDefault();

  controller.adiciona(); // Ativando o controller.
};

form.addEventListener("submit", handleFormSubmit);
