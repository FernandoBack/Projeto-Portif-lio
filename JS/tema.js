// tema.js - Alternância de tema claro/escuro
export function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.body.classList.add("escuro");
    document.getElementById("btn-tema").textContent = "☀️ Modo Claro";
  }
}

export function alternarTema() {
  const body = document.body;
  const botaoTema = document.getElementById("btn-tema");

  if (body.classList.contains("escuro")) {
    // Se já estiver no modo escuro, voltar para claro
    body.classList.remove("escuro");
    localStorage.setItem("tema", "claro");
    botaoTema.textContent = "🌙 Modo Escuro";
  } else {
    // Se estiver no claro, trocar para escuro
    body.classList.add("escuro");
    localStorage.setItem("tema", "escuro");
    botaoTema.textContent = "☀️ Modo Claro";
  }
}
