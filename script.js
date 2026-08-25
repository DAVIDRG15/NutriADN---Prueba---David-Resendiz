const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const tabs = document.querySelectorAll("[data-tab]");
const tabContent = document.querySelector("[data-tab-content]");
const leadForm = document.querySelector("[data-lead-form]");
const formNote = document.querySelector("[data-form-note]");

// El contenido de cada pestaña vive aquí para mantener el HTML inicial ligero.
const geneCopy = {
  dieta: {
    title: "Influencia de la dieta en tu peso corporal",
    body: "Respuesta a grasas saturadas, grasas monoinsaturadas, carbohidratos y tipo de dieta recomendada.",
    points: ["Riesgo de recuperacion de peso", "Facilidad para perder grasa", "Preferencias y apetito"],
  },
  nutrientes: {
    title: "Requerimientos nutricionales",
    body: "Identifica necesidades particulares de vitaminas y minerales para construir una suplementacion mas precisa.",
    points: ["Vitaminas B6, B9, B12 y D", "Hierro, zinc, potasio y sodio", "Densidad osea y antioxidantes"],
  },
  metabolismo: {
    title: "Propiedades metabolicas",
    body: "Evalua como tu cuerpo procesa sustancias comunes y factores vinculados con salud metabolica.",
    points: ["Cafeina, alcohol, lactosa y gluten", "Glucosa, trigliceridos y colesterol", "Omega 3 e inflamacion"],
  },
  deporte: {
    title: "Deportes y recreacion",
    body: "Explora predisposiciones relacionadas con rendimiento fisico, tipo de ejercicio ideal y recuperacion.",
    points: ["Fuerza y volumen muscular", "VO2 max y capacidad cardiovascular", "Fatiga y riesgo de lesion"],
  },
};

// Refuerza el contraste de la cabecera cuando deja la parte superior de la página.
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMobileMenu() {
  navMenu.classList.remove("is-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMobileMenu();
  }
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.tab;
    const content = geneCopy[key];

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    tabContent.innerHTML = `
      <h3>${content.title}</h3>
      <p>${content.body}</p>
      <ul>${content.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
  });
});

// Demostración local: aquí puede conectarse el CRM o endpoint definitivo.
leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Listo. Tu solicitud quedo preparada para que un asesor te contacte por WhatsApp.";
  leadForm.reset();
});

// Cada tarjeta se anima una sola vez para evitar movimiento repetitivo al hacer scroll.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
