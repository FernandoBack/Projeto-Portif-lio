// form.js - Validação básica do formulário
export function validarFormulario() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const tel = form.telefone.value.trim();

    if (!nome || !email || !tel) {
      e.preventDefault();
      alert("Preencha todos os campos obrigatórios.");
    }
  });
}
