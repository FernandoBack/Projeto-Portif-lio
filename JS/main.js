import { aplicarTemaSalvo } from "./tema.js";
import { ativarScroll } from "./scroll.js";
import { validarFormulario } from "./form.js";
import { carregarProjetos } from "./projetos.js";

document.addEventListener("DOMContentLoaded", () => {
  aplicarTemaSalvo();
  ativarScroll();
  validarFormulario();
  carregarProjetos();
});
