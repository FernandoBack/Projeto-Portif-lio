// Seleciona o botão e o span do ícone
const btnToggle = document.getElementById("toggle-theme");
const iconTema = document.getElementById("icon-tema");

// Define o tema salvo ou padrão
const temaSalvo = localStorage.getItem("theme");
const temaInicial = temaSalvo || "light";
document.body.classList.add(temaInicial);
iconTema.textContent = temaInicial === "dark" ? "🌞" : "🌙";

// Alterna tema ao clicar
btnToggle.addEventListener("click", () => {
  const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
  const novoTema = temaAtual === "dark" ? "light" : "dark";

  document.body.classList.remove(temaAtual);
  document.body.classList.add(novoTema);
  localStorage.setItem("theme", novoTema);

  iconTema.textContent = novoTema === "dark" ? "🌞" : "🌙";
});
