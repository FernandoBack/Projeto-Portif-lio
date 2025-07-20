// scroll.js - Animação de scroll suave e destaque de links

const links = document.querySelectorAll("nav a");

export function ativarScroll() {
  // Scroll suave
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.hash) {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Destaque ao rolar
  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        const id = entrada.target.getAttribute("id");
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (entrada.isIntersecting && navLink) {
          links.forEach((l) => l.classList.remove("active"));
          navLink.classList.add("active");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    }
  );

  document.querySelectorAll("section[id]").forEach((secao) => {
    observer.observe(secao);
  });
}