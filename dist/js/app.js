import { NegociacaoController } from "./controllers/negociacao-controllers.js";
const controller = new NegociacaoController();
const handleFormSubmit = (event) => {
    event.preventDefault();
    controller.adiciona();
};
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", handleFormSubmit);
}
else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");
}
