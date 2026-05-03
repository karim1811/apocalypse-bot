require('dotenv').config();
const { BskyAgent } = require('@atproto/api');

const agent = new BskyAgent({ service: 'https://bsky.social' });

const citations = [
  { texte: "Il y aura des guerres, des rumeurs de guerres, des famines et des tremblements de terre en divers lieux.", source: "Matthieu 24:6-7", type: "bible" },
  { texte: "Nul ne peut acheter ou vendre, s'il n'a pas la marque, le nom de la bete ou le nombre de son nom.", source: "Apocalypse 13:17", type: "bible" },
  { texte: "Les hommes seront egoistes, amis de l'argent, fanfarons, hautains, blasphemateurs.", source: "2 Timothee 3:2", type: "bible" },
  { texte: "Il seduira les nations des quatre coins de la terre et les rassemblera pour la guerre.", source: "Apocalypse 20:8", type: "bible" },
  { texte: "Le soleil deviendra obscur et la lune ne donnera plus sa lumiere.", source: "Matthieu 24:29", type: "bible" },
  { texte: "Quand vous verrez toutes ces choses, sachez que le Fils de l'homme est proche, a la porte.", source: "Matthieu 24:33", type: "bible" },
  { texte: "Les hommes chercheront la mort et ne la trouveront pas.", source: "Apocalypse 9:6", type: "bible" },
  { texte: "Un quart de la terre fut frappe : par l'epee, la famine, la mort et les betes sauvages.", source: "Apocalypse 6:8", type: "bible" },
  { texte: "Il n'y a rien de cache qui ne doive etre decouvert, ni de secret qui ne doive etre connu.", source: "Matthieu 10:26", type: "bible" },
  { texte: "La vanite, definitivement mon peche prefere.", source: "L'Associe du Diable (1997) - John Milton", type: "film" },
  { texte: "Dieu est un planque. Il te donne la vie, la liberte et le droit au bonheur... et puis il regarde.", source: "L'Associe du Diable (1997) - John Milton", type: "film" },
  { texte: "Le libre arbitre... c'est le plus beau cadeau et la plus grande torture que j'aie jamais infligee a l'humanite.", source: "L'Associe du Diable (1997) - John Milton", type: "film" },
  { texte: "Le plus grand tour que le diable ait jamais joue, c'est de convaincre le monde qu'il n'existait pas.", source: "Usual Suspects (1995) - Verbal Kint", type: "film" },
  { texte: "La Matrice est partout. Elle est autour de nous. Meme maintenant dans cette piece.", source: "Matrix (1999) - Morpheus", type: "film" },
  { texte: "L'ignorance est la beatitude.", source: "Matrix (1999) - Cypher", type: "film" },
  { texte: "C'est seulement apres avoir tout perdu qu'on est libre de faire n'importe quoi.", source: "Fight Club (1999) - Tyler Durden", type: "film" },
  { texte: "L'horreur... l'horreur.", source: "Apocalypse Now (1979) - Kurtz", type: "film" },
  { texte: "Quand vous jouez au jeu des trones, vous gagnez ou vous mourez.", source: "Game of Thrones - Cersei Lannister", type: "serie" },
  { texte: "Le pouvoir reside la ou les hommes croient qu'il reside.", source: "Game of Thrones - Lord Varys", type: "serie" },
  { texte: "L'hiver vient.", source: "Game of Thrones - Stark", type: "serie" },
  { texte: "Nous sommes la mort qui marche.", source: "The Walking Dead - Rick Grimes", type: "serie" },
  { texte: "Toute cette technologie, et on est plus seuls que jamais.", source: "Black Mirror", type: "serie" },
  { texte: "La guerre c'est la paix. La liberte c'est l'esclavage. L'ignorance c'est la force.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Big Brother vous regarde.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Celui qui controle le passe controle l'avenir. Celui qui controle le present controle le passe.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Quand tu regardes trop longtemps dans l'abime, l'abime regarde aussi en toi.", source: "Friedrich Nietzsche", type: "philosophie" },
  { texte: "Dieu est mort. Et c'est nous qui l'avons tue.", source: "Friedrich Nietzsche", type: "philosophie" },
];

const emojis = { bible: "📖", film: "🎬", serie: "📺", livre: "📚", philosophie: "🧠" };

const hashtags = [
  "#FinDesTemps #Prophetie #Actualite",
  "#Citation #Verite #Societe",
  "#Bible #Philosophie #Eveil",
  "#Cinema #Citation #2030",
];

const ECHEANCE = new Date('2030-12-21T00:00:00');
const INTERVALLE = 30 * 60 * 1000;

function getCompteARebours() {
  const maintenant = new Date();
  const diff = ECHEANCE - maintenant;
  if (diff <= 0) return "L'echeance est arrivee...";
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const ans = Math.floor(jours / 365);
  const moisRestants = Math.floor((jours % 365) / 30);
  const joursRestants = jours % 30;
  return "⏳ " + ans + " an(s), " + moisRestants + " mois, " + joursRestants + " jour(s), " + heures + "h" + minutes + "m";
}

async function posterCitation() {
  const citation = citations[Math.floor(Math.random() * citations.length)];
  const emoji = emojis[citation.type] || "💬";
  const hashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
  const rebours = getCompteARebours();

  const post = emoji + ' "' + citation.texte + '"\n\n- ' + citation.source + '\n\n' + rebours + '\n🗓️ Solstice 21/12/2030\n\n' + hashtag;

  if (post.length > 300) {
    console.log("⚠️ Post trop long, passage au suivant...");
    await posterCitation();
    return;
  }

  try {
    await agent.post({ text: post });
    console.log("✅ Post publie a " + new Date().toLocaleTimeString());
    console.log(rebours);
  } catch (err) {
    console.error("❌ Erreur :", err.message);
  }
}

async function main() {
  console.log('🔮 Bot Apocalyptique demarre !');
  console.log('📅 Compte a rebours vers le Solstice du 21/12/2030');
  console.log(getCompteARebours());

  await agent.login({
    identifier: process.env.BLUESKY_IDENTIFIER,
    password: process.env.BLUESKY_PASSWORD,
  });

  console.log('✅ Connecte a Bluesky !');
  console.log('\nPremier post en cours...\n');

  await posterCitation();
  setInterval(posterCitation, INTERVALLE);
}

main();