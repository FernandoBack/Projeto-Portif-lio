// projetos.js - Renderiza cards de projetos dinamicamente
const projetos = [
  {
    titulo: "Clone Netflix",
    descricao: "Projeto feito com HTML, CSS e JS para treinar grid layout e responsividade.",
    link: "https://github.com/seuusuario/clone-netflix"
  },
  {
    titulo: "App de Tarefas",
    descricao: "To-do list com tema escuro e armazenamento local.",
    link: "https://github.com/seuusuario/todo-app"
  },
  {
    titulo: "Site Portfólio",
    descricao: "Meu site pessoal com animações, projetos e formulário de contato.",
    link: "https://github.com/seuusuario/portfolio"
  }
];

export function carregarProjetos() {
  const container = document.getElementById("lista-projetos");

  projetos.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card-projeto");

    card.innerHTML = `
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
      <a href="${p.link}" target="_blank">Ver projeto</a>
    `;
    container.appendChild(card);
  });
}
