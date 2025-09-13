/* ─── DATA ────────────────────────────────────────────────────── */
const events = [
  {
    title: "AI & Robotics Summit 2025",
    date: "2025-07-18",
    description:
      "A day-long symposium with keynotes, demos, and student posters.",
    image: "rrrr.jpg"
  },
  {
    title: "EduTrack Hackathon",
    date: "2025-08-02",
    description:
      "48-hour coding sprint on sustainability challenges. Prizes worth €5 000!",
    image: "hack.jpg"
  },
];

const clubs = [
  {
    title: "Green Earth Society",
    description:
      "Recycling drives, tree-planting, and environmental awareness campaigns.",
    image: "green.png"
  },
  {
    title: "Debate & Model UN Club",
    description:
      "Sharpen public speaking and represent EduTrack at international MUN conferences.",
    image: "debate1.webp"
  },
];

/* ─── CARD RENDERING ──────────────────────────────────────────── */
function createCard(item, isEvent = false) {
  const article = document.createElement("article");
  article.className = "card";
  article.innerHTML = `
    <div class="card-img-container">
      <img src="${item.image}" alt="${item.title}" class="card-img" />
    </div>
    <div class="card-body">
      <h3>${item.title}</h3>
      ${isEvent ? `<time datetime="${item.date}">${new Date(item.date).toLocaleDateString()}</time>` : ""}
      <button class="details-btn">Details</button>
    </div>
  `;
  article.querySelector(".details-btn").addEventListener("click", () => openModal(item));
  return article;
}

function render() {
  document.getElementById("eventsGrid").replaceChildren(...events.map(ev => createCard(ev, true)));
  document.getElementById("clubsGrid").replaceChildren(...clubs.map(cl => createCard(cl)));
}
document.addEventListener("DOMContentLoaded", render);

/* ─── MODAL ───────────────────────────────────────────────────── */
const modal      = document.getElementById("modal");
const modalImg   = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalBody  = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function openModal(item) {
  modalImg.src         = item.image;
  modalImg.alt         = item.title;
  modalTitle.textContent = item.title;
  modalBody.textContent  = item.description;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", e => { if (e.target === modal) hideModal(); });
