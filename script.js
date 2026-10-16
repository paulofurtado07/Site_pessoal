/* ==========================================================
   Paulo Sérgio Furtado Filho — site acadêmico
   Dados editáveis ficam no topo; a lógica de interface abaixo.
   ========================================================== */

// ========================================
// CURRÍCULO (PDF)
// ========================================
const CURRICULO_PDF = "";

// ========================================
// GRUPOS DE PESQUISA
// ========================================
const researchGroups = [
  { name: "GSE", institution: "PUCRS" }
];

// ========================================
// PUBLICAÇÕES
// ========================================
const publications = [
  {
    group: "avaliacao",
    venue: "Revista Brasileira de Computação Aplicada — RBCA · Universidade de Passo Fundo — UPF",
    title: "Alocação Dinâmica de Memória no FreeRTOS: Comparativo entre First-Fit e Best-Fit no ESP32",
    status: "Em avaliação",
    statusKind: "evaluation",
    statusNote: "Artigo submetido na RBCA (UPF).",
    advisor: "Me. Paulo Sergio Furtado",
    abstractShort: "Avaliação experimental comparativa das estratégias First-Fit (heap_4) e Best-Fit (heap_2) do FreeRTOS no ESP32, com 58.068 operações de memória analisadas.",
    abstractFull: "Sistemas embarcados e dispositivos de Internet das Coisas (IoT) operam sob restrições de memória e processamento, exigindo previsibilidade temporal em sistemas operacionais de tempo real (RTOS). Este trabalho apresenta uma avaliação experimental comparativa das estratégias de alocação dinâmica First-Fit (heap_4) e Best-Fit (heap_2) do FreeRTOS, executadas no microcontrolador dual-core ESP32. Foi desenvolvido um ambiente de testes controlado e estocástico utilizando ESP-IDF v5.3.1, simulando requisições de memória com diferentes tamanhos e liberações não ordenadas. Foram analisadas 58.068 operações de memória, coletadas em 30 baterias independentes de testes distribuídas em duas placas físicas. Avaliaram-se os tempos médios de alocação e desalocação, o desvio padrão (jitter), o pior caso (Worst-Case Execution Time — WCET) e o percentil 99 (P99). Os resultados demonstram que o Best-Fit apresentou melhor desempenho na alocação, com média de 6,95 µs e WCET de 21 µs, enquanto o First-Fit obteve melhor desempenho na desalocação, com média de 5,63 µs e WCET de 16 µs, além de desvio padrão de 0,72 µs. Conclui-se que o First-Fit apresenta vantagens para aplicações de tempo real de longa duração, enquanto o Best-Fit mostra-se adequado para fases de inicialização.",
    links: [
      { label: "Acessar artigo", url: "DOC/RBCA.pdf" }
    ]
  },
  {
    group: "eventos",
    year: "2026",
    venue: "SEPEI IFSC 2026",
    title: "Como crianças e adolescentes compreendem a programação: análise do pensamento computacional e das teorias da aprendizagem na transição para a programação textual.",
    status: "Publicado",
    statusKind: "published",
    modality: "Resumo expandido",
    issn: "2357-836X",
    links: [
      { label: "Página da publicação", url: "https://periodicos.ifsc.edu.br/index.php/sepei-ifsc-anais/article/view/5237" },
      { label: "Visualizar artigo", url: "DOC/SEPEI.pdf" }
    ]
  },
  {
    group: "eventos",
    year: "2026",
    venue: "CACIC 2026 — Universidad Nacional de La Plata, Argentina",
    title: "Autismo, hiperfoco y aprendizaje en computación: un estudio aplicado para el desarrollo de estrategias educativas inclusivas para estudiantes con TEA niveles 1 y 2.",
    status: "Publicado",
    statusKind: "published",
    modality: "Resumo expandido",
    advisor: "Prof. Dr. Fábio Aiub Sperotto",
    highlight: "Trabalho distinguido (Short Papers Alumnos — SPA), conforme lista oficial do CACIC 2026.",
    links: [
      { label: "Lista oficial de trabalhos distinguidos", url: "https://www.frcu.utn.edu.ar/index.php/congreso-cacic/expositores-distinguidos" },
      { label: "Notícia no Portal do IFSC", url: "https://ifsc.edu.br/web/noticias/w/estudante-do-ifsc-campus-lages-e-destaque-em-congresso-na-argentina-com-projeto-de-computacao-inclusiva" },
      { label: "Publicação do IFSC Lages", url: "https://www.instagram.com/p/DeiDPPaxD4D/" },
      { label: "Visualizar artigo", url: "DOC/CACIC.pdf" }
    ],
  },
  {
    group: "eventos",
    year: "2026",
    venue: "CONICT 2026 — IFSP",
    title: "Sistemas Embarcados e IoT / RTOS: Como o First-Fit e o Best-Fit se comportam em microcontroladores com recursos extremamente limitados (como ESP32 rodando sistemas de tempo real – FreeRTOS)?",
    status: "Publicado",
    statusKind: "published",
    modality: "Resumo expandido",
    advisor: "Me. Paulo Sergio Furtado",
    links: [
      { label: "Visualizar artigo", url: "DOC/CONICT.pdf" }
    ]
  },
  {
    group: "eventos",
    venue: "Caderno de Resumos da Semana Nacional de Ciência e Tecnologia — IFSC",
    title: "Considerações didático-pedagógicas para estudantes com TEA (níveis 1 e 2) em conteúdos da área de Ciência da Computação.",
    status: "Aceito",
    statusKind: "accepted",
    modality: "Resumo expandido",
    issn: "2965-8772",
    advisor: "Prof. Dr. Fábio Aiub Sperotto",
    links: [
      // Dica: é sempre bom evitar espaços nos nomes de arquivos web (como "semana_academica.pdf"), mas o %20 resolve!
      { label: "Visualizar artigo", url: "DOC/semana%20academica.pdf" } 
    ]
  }
];
// ========================================
// CERTIFICADOS
// ========================================
const certificates = [
  {
    title: "Olimpíada Nacional de Ciências (ONC) 2024",
    institution: "",
    date: "04/05/2024",
    description: "Certificado de Honra ao Mérito por aprovação na olimpíada, com premiação de Medalha de Bronze.",
    details: [],
    file: "DOC/ONC.pdf",
    type: "pdf"
  },
  {
    title: "Oficina “IA Aplicada à Prática Docente”",
    institution: "Prefeitura de Lages / IFSC",
    date: "22/07/2025",
    description: "Declaração de participação como ministrante da oficina voltada a capacitar professores no uso de ferramentas de IA para criação de conteúdo educacional.",
    details: [
      "Carga horária: 20h",
      "Ferramentas: ChatGPT, Pictory, ElevenLabs, Suno, Microsoft Designer"
    ],
    file: "DOC/LAGES.pdf",
    type: "pdf"
  },
  {
    title: "Avaliador — Feira do Conhecimento",
    institution: "CEDUP Renato Ramos da Silva",
    date: "10/06/2026",
    description: "Declaração da Secretaria de Estado da Educação de Santa Catarina confirmando participação como avaliador convidado na Feira do Conhecimento da instituição.",
    details: [],
    file: "DOC/CEDUP.pdf",
    type: "pdf"
  }
];

// ========================================
// PERFIS ACADÊMICOS
// ========================================
const academicProfiles = [
  { name: "Lattes", url: "https://lattes.cnpq.br/9279585513340689" },
  { name: "ORCID", url: "https://orcid.org/0009-0002-8875-6269" },
  { name: "Google Scholar", url: "" }
];

// ========================================
// CONTATOS / REDES SOCIAIS
// ========================================
const contacts = [
  { name: "E-mail", url: "mailto:paulo.sff@aluno.ifsc.edu.br", external: false },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/paulo-s%C3%A9rgio-furtado-filho-921689290/?isSelfProfile=true", external: true },
  { name: "Instagram", url: "https://www.instagram.com/paulofurttado/", external: true },
  { name: "Lattes", url: "https://lattes.cnpq.br/9279585513340689", external: true },
  { name: "ORCID", url: "https://orcid.org/0009-0002-8875-6269", external: true },
  { name: "GitHub", url: "", external: true }
];

// ========================================
// PROJETOS
// ========================================
const projects = [];

/* ==========================================================
   LÓGICA DA INTERFACE
   ========================================================== */

document.documentElement.classList.add("js");

function h(tag, attrs, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === false || v == null) continue;
    if (k === "class") el.className = v;
    else if (k === "text") el.textContent = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat()) {
    if (c == null) continue;
    el.append(c.nodeType ? c : document.createTextNode(c));
  }
  return el;
}

/* ---------- Menu mobile ---------- */
(function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  const close = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* ---------- Currículo ---------- */
(function initCV() {
  const btn = document.getElementById("btn-cv");
  if (!btn) return;
  if (CURRICULO_PDF) {
    btn.setAttribute("href", CURRICULO_PDF);
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener");
  } else {
    btn.setAttribute("aria-disabled", "true");
    btn.setAttribute("title", "Currículo em breve");
    btn.addEventListener("click", e => e.preventDefault());
  }
})();

/* ---------- Grupos de pesquisa ---------- */
(function renderGroups() {
  const ul = document.getElementById("groups-list");
  if (!ul) return;
  researchGroups.forEach(g => {
    ul.append(h("li", {}, h("span", { text: g.name }), h("span", { class: "tag", text: g.institution })));
  });
})();

/* ---------- Publicações ---------- */
(function renderPublications() {
  const targets = {
    avaliacao: document.getElementById("pubs-avaliacao"),
    eventos: document.getElementById("pubs-eventos")
  };
  let uid = 0;

  publications.forEach(p => {
    const list = targets[p.group];
    if (!list) return;
    const id = "pub-" + (++uid);
    const bodyId = id + "-body";
    const isReview = p.group === "avaliacao";

    const body = h("div", { class: "pub-body", id: bodyId, hidden: true });
    if (isReview && p.abstractFull) {
      body.append(h("p", { text: p.abstractFull }));
    } else {
      const dl = h("dl");
      const row = (k, v) => { if (v) dl.append(h("dt", { text: k }), h("dd", { text: v })); };
      row("Modalidade", p.modality);
      row("Orientador", p.advisor);
      row("Situação", p.status);
      row("ISSN", p.issn);
      row("Destaque", p.highlight);
      body.append(dl);
      if (p.note) body.append(h("p", { text: p.note }));
    }

    const toggleLabel = isReview ? ["Ver resumo", "Ocultar resumo"] : ["Ver detalhes", "Ocultar detalhes"];
    const toggle = h("button", {
      type: "button", class: "btn btn-small",
      "aria-expanded": "false", "aria-controls": bodyId, text: toggleLabel[0]
    });
    toggle.addEventListener("click", () => {
      const open = body.hidden;
      body.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = toggleLabel[open ? 1 : 0];
    });

    const actions = h("div", { class: "pub-actions" }, toggle);
    const publicationLinks = p.links || (p.link ? [p.link] : []);
    publicationLinks.forEach(link => {
      actions.append(h("a", {
        class: "link-inline", href: link.url, target: "_blank", rel: "noopener noreferrer",
        text: link.label + " ↗"
      }));
    });

    const main = h("div", {},
      h("div", { class: "pub-venue", text: p.venue }),
      h("h4", { class: "pub-title", text: p.title }),
      isReview && p.statusNote ? h("div", { class: "pub-meta", text: p.statusNote }) : null,
      p.advisor && isReview ? h("div", { class: "pub-meta", text: "Orientador: " + p.advisor }) : null,
      isReview && p.abstractShort ? h("p", { class: "pub-short", text: p.abstractShort }) : null
    );

    const head = h("div", { class: "pub-head" },
      h("div", { class: "pub-year", text: p.year || "" }),
      main,
      h("span", { class: "status " + p.statusKind, text: p.status })
    );

    list.append(h("article", { class: "pub" }, head, h("div", { style: "padding-left:0" }, actions), body));
  });
})();

/* ---------- Perfis e contatos ---------- */
(function renderLinks() {
  const profiles = document.getElementById("profiles-list");
  if (profiles) {
    academicProfiles.forEach(p => {
      if (p.url) {
        profiles.append(h("a", { class: "pill-link", href: p.url, target: "_blank", rel: "noopener noreferrer", text: p.name }));
      } else {
        profiles.append(h("span", { class: "pill-link", "aria-disabled": "true" }, p.name, h("small", { text: "Em breve" })));
      }
    });
  }

  const visible = contacts.filter(c => c.url);

  const contactList = document.getElementById("contact-list");
  if (contactList) {
    visible.forEach(c => {
      contactList.append(h("a", {
        class: "pill-link", href: c.url,
        target: c.external ? "_blank" : false,
        rel: c.external ? "noopener noreferrer" : false,
        text: c.name
      }));
    });
  }

  const footerLinks = document.getElementById("footer-links");
  if (footerLinks) {
    visible.forEach(c => {
      footerLinks.append(h("a", {
        href: c.url,
        target: c.external ? "_blank" : false,
        rel: c.external ? "noopener noreferrer" : false,
        text: c.name
      }));
    });
  }
})();

/* ---------- Certificados + modal ---------- */
(function initCertificates() {
  const grid = document.getElementById("cert-grid");
  const modal = document.getElementById("cert-modal");
  if (!grid || !modal) return;

  const titleEl = document.getElementById("modal-title");
  const bodyEl = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");
  const zoomIn = document.getElementById("zoom-in");
  const zoomOut = document.getElementById("zoom-out");
  const zoomReset = document.getElementById("zoom-reset");
  const zoomTools = [zoomIn, zoomOut, zoomReset];
  let lastFocus = null;
  let zoom = 1;
  let imgEl = null;

  function applyZoom() { if (imgEl) imgEl.style.width = (zoom * 100) + "%"; }

  function openModal(cert, trigger) {
    lastFocus = trigger;
    titleEl.textContent = cert.title;
    bodyEl.replaceChildren();
    imgEl = null;
    zoom = 1;

    const isImage = cert.type === "image";
    zoomTools.forEach(b => { b.hidden = !(cert.file && isImage); });

    if (!cert.file) {
      bodyEl.append(h("div", { class: "modal-empty", text: "O arquivo deste certificado ainda não foi adicionado." }));
    } else if (isImage) {
      imgEl = h("img", { src: cert.file, alt: "Certificado: " + cert.title });
      bodyEl.append(imgEl);
    } else {
      bodyEl.append(h("iframe", { src: cert.file, title: "Certificado: " + cert.title }));
    }

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    modal.hidden = true;
    bodyEl.replaceChildren();
    imgEl = null;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  certificates.forEach(c => {
    const btn = h("button", { type: "button", class: "btn btn-small", text: "Visualizar certificado" });
    btn.addEventListener("click", () => openModal(c, btn));
    grid.append(h("article", { class: "cert" },
      h("div", { class: "date", text: c.date }),
      h("h3", { text: c.title }),
      c.institution ? h("div", { class: "inst", text: c.institution }) : null,
      h("p", { class: "desc", text: c.description }),
      ...(c.details || []).map(d => h("div", { class: "meta", text: d })),
      btn
    ));
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  zoomIn.addEventListener("click", () => { zoom = Math.min(zoom + 0.25, 4); applyZoom(); });
  zoomOut.addEventListener("click", () => { zoom = Math.max(zoom - 0.25, 0.5); applyZoom(); });
  zoomReset.addEventListener("click", () => { zoom = 1; applyZoom(); });

  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (e.key === "Escape") { closeModal(); return; }
    if (e.key === "Tab") {
      const f = [...modal.querySelectorAll("button:not([hidden]), [href], iframe")].filter(el => !el.hidden);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();

/* ---------- Link ativo no menu + entrada suave ---------- */
(function initObservers() {
  const links = [...document.querySelectorAll(".nav-list a")];
  const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => spy.observe(s));

    const reveal = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); reveal.unobserve(en.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = "2026";
})();