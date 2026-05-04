require('dotenv').config();
const { BskyAgent } = require('@atproto/api');

const agent = new BskyAgent({ service: 'https://bsky.social' });

// ================= DATA =================

const citations = [
  { texte: "Il y aura des guerres...", source: "Matthieu 24:6-7", type: "bible" },
  { texte: "La Matrice est partout.", source: "Matrix", type: "film" },
  { texte: "L'hiver vient.", source: "Game of Thrones", type: "serie" },
  { texte: "Big Brother vous regarde.", source: "1984", type: "livre" },
  { texte: "Dieu est mort.", source: "Nietzsche", type: "philosophie" },
  // 👉 garde ta liste complète ici
];

const emojis = { bible: "📖", film: "🎬", serie: "📺", livre: "📚", philosophie: "🧠" };

const hashtags = [
  "#FinDesTemps #Prophetie",
  "#Citation #Verite",
  "#Dystopie #Futur",
  "#Conscience #Reveil",
];

// ================= CONFIG =================

const ECHEANCE = new Date('2030-12-21T00:00:00');

// Intervalle aléatoire (30 min → 2h)
function getIntervalleAleatoire() {
  const min = 30 * 60 * 1000;
  const max = 2 * 60 * 60 * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// ================= LOGIQUE =================

function getCompteARebours() {
  const maintenant = new Date();
  const diff = ECHEANCE - maintenant;

  if (diff <= 0) return "L'echeance est arrivee...";

  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `⏳ ${jours}j ${heures}h ${minutes}m`;
}

async function login() {
  await agent.login({
    identifier: process.env.BLUESKY_IDENTIFIER,
    password: process.env.BLUESKY_PASSWORD,
  });
  console.log("✅ Connecté à Bluesky");
}

async function posterCitation() {
  const citation = citations[Math.floor(Math.random() * citations.length)];
  const emoji = emojis[citation.type] || "💬";
  const hashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
  const rebours = getCompteARebours();

  const post = `${emoji} "${citation.texte}"

- ${citation.source}

${rebours}
🗓️ 21/12/2030

${hashtag}`;

  if (post.length > 300) {
    return posterCitation();
  }

  try {
    await agent.post({ text: post });
    console.log("✅ Post envoyé :", new Date().toLocaleTimeString());
  } catch (err) {
    console.log("⚠️ Erreur, tentative reconnexion...");
    await login();
    await agent.post({ text: post });
  }
}

// ================= BOUCLE =================

async function loop() {
  await posterCitation();

  const delay = getIntervalleAleatoire();
  console.log(`⏱️ Prochain post dans ${Math.round(delay / 60000)} min`);

  setTimeout(loop, delay);
}

// ================= START =================

(async () => {
  await login();
  loop();
})();