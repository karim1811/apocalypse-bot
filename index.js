require('dotenv').config();
const { BskyAgent } = require('@atproto/api');

const agent = new BskyAgent({ service: 'https://bsky.social' });

const citations = [
  // BIBLE
  { texte: "Il y aura des guerres, des rumeurs de guerres, des famines et des tremblements de terre en divers lieux.", source: "Matthieu 24:6-7", type: "bible" },
  { texte: "Nul ne peut acheter ou vendre, s'il n'a pas la marque, le nom de la bete ou le nombre de son nom.", source: "Apocalypse 13:17", type: "bible" },
  { texte: "Les hommes seront egoistes, amis de l'argent, fanfarons, hautains, blasphemateurs.", source: "2 Timothee 3:2", type: "bible" },
  { texte: "Il seduira les nations des quatre coins de la terre et les rassemblera pour la guerre.", source: "Apocalypse 20:8", type: "bible" },
  { texte: "Le soleil deviendra obscur et la lune ne donnera plus sa lumiere.", source: "Matthieu 24:29", type: "bible" },
  { texte: "Quand vous verrez toutes ces choses, sachez que le Fils de l'homme est proche, a la porte.", source: "Matthieu 24:33", type: "bible" },
  { texte: "Les hommes chercheront la mort et ne la trouveront pas.", source: "Apocalypse 9:6", type: "bible" },
  { texte: "Un quart de la terre fut frappe : par l'epee, la famine, la mort et les betes sauvages.", source: "Apocalypse 6:8", type: "bible" },
  { texte: "Il n'y a rien de cache qui ne doive etre decouvert, ni de secret qui ne doive etre connu.", source: "Matthieu 10:26", type: "bible" },
  { texte: "Et la mer rendit les morts qui etaient en elle.", source: "Apocalypse 20:13", type: "bible" },
  { texte: "Je suis l'Alpha et l'Omega, le premier et le dernier, le commencement et la fin.", source: "Apocalypse 22:13", type: "bible" },
  { texte: "Voici, je viens bientot, et ma recompense est avec moi.", source: "Apocalypse 22:12", type: "bible" },
  { texte: "Une grande etoile ardente comme un flambeau tomba du ciel.", source: "Apocalypse 8:10", type: "bible" },
  { texte: "Le troisieme ange sonna de la trompette et une grande etoile tomba du ciel.", source: "Apocalypse 8:10", type: "bible" },
  { texte: "Heureux celui qui lit et ceux qui entendent les paroles de la prophetie.", source: "Apocalypse 1:3", type: "bible" },
  { texte: "La terre fut ebranblee, le soleil devint noir comme un sac de crin.", source: "Apocalypse 6:12", type: "bible" },
  { texte: "Veillez donc, car vous ne savez ni le jour ni l'heure.", source: "Matthieu 25:13", type: "bible" },
  { texte: "Nation s'elevera contre nation, et royaume contre royaume.", source: "Matthieu 24:7", type: "bible" },
  { texte: "Celui qui vaincra heriter de toutes choses.", source: "Apocalypse 21:7", type: "bible" },
  { texte: "Le temps est proche.", source: "Apocalypse 1:3", type: "bible" },

  // FILMS
  { texte: "La vanite, definitivement mon peche prefere.", source: "L'Associe du Diable (1997)", type: "film" },
  { texte: "Dieu est un planque. Il te donne la vie, la liberte et le droit au bonheur... et puis il regarde.", source: "L'Associe du Diable (1997)", type: "film" },
  { texte: "Le plus grand tour que le diable ait jamais joue, c'est de convaincre le monde qu'il n'existait pas.", source: "Usual Suspects (1995)", type: "film" },
  { texte: "La Matrice est partout. Elle est autour de nous. Meme maintenant dans cette piece.", source: "Matrix (1999)", type: "film" },
  { texte: "L'ignorance est la beatitude.", source: "Matrix (1999)", type: "film" },
  { texte: "C'est seulement apres avoir tout perdu qu'on est libre de faire n'importe quoi.", source: "Fight Club (1999)", type: "film" },
  { texte: "L'horreur... l'horreur.", source: "Apocalypse Now (1979)", type: "film" },
  { texte: "Nous avons construit nos pyramides comme le voulait pharaon.", source: "Snowpiercer (2013)", type: "film" },
  { texte: "La guerre n'a jamais change.", source: "Fallout (1997)", type: "film" },
  { texte: "Personne ne peut en sortir vivant de toute facon.", source: "No Country for Old Men (2007)", type: "film" },
  { texte: "Ce que nous faisons dans la vie resonne dans l'eternite.", source: "Gladiator (2000)", type: "film" },
  { texte: "Vous ne pouvez pas arreter ce qui arrive.", source: "Terminator 2 (1991)", type: "film" },
  { texte: "Le futur n'est pas fixe. Il n'y a pas de destin, seulement ce que nous faisons.", source: "Terminator 2 (1991)", type: "film" },
  { texte: "Bienvenue au desert du reel.", source: "Matrix (1999)", type: "film" },
  { texte: "Je suis devenu la mort, le destructeur des mondes.", source: "Oppenheimer (2023)", type: "film" },
  { texte: "Il n'y a pas de bien et de mal, il n'y a que le pouvoir.", source: "Harry Potter (2001)", type: "film" },
  { texte: "Tout ce que vous pouvez imaginer est reel.", source: "Pi (1998)", type: "film" },
  { texte: "On ne peut pas fuir ce qu'on est.", source: "Blade Runner (1982)", type: "film" },
  { texte: "Tous ces moments seront perdus dans le temps comme des larmes sous la pluie.", source: "Blade Runner (1982)", type: "film" },
  { texte: "La societe a obtenu ce qu'elle meritait.", source: "Joker (2019)", type: "film" },

  // SERIES
  { texte: "Quand vous jouez au jeu des trones, vous gagnez ou vous mourez.", source: "Game of Thrones", type: "serie" },
  { texte: "Le pouvoir reside la ou les hommes croient qu'il reside.", source: "Game of Thrones", type: "serie" },
  { texte: "L'hiver vient.", source: "Game of Thrones", type: "serie" },
  { texte: "Nous sommes la mort qui marche.", source: "The Walking Dead", type: "serie" },
  { texte: "Toute cette technologie, et on est plus seuls que jamais.", source: "Black Mirror", type: "serie" },
  { texte: "Sous son oeil.", source: "The Handmaid's Tale", type: "serie" },
  { texte: "Blessed be the fruit.", source: "The Handmaid's Tale", type: "serie" },
  { texte: "Ils nous ont pris tout ce qu'on avait. Maintenant on prend ce dont on a besoin.", source: "The Walking Dead", type: "serie" },
  { texte: "Le chaos n'est pas un gouffre. Le chaos est une echelle.", source: "Game of Thrones", type: "serie" },
  { texte: "On ne choisit pas son epoque.", source: "Dark (Netflix)", type: "serie" },
  { texte: "Le commencement est la fin, et la fin est le commencement.", source: "Dark (Netflix)", type: "serie" },
  { texte: "Tout est lie. Tout est un.", source: "Dark (Netflix)", type: "serie" },
  { texte: "Nous vivons dans une societe.", source: "Seinfeld", type: "serie" },

  // LIVRES
  { texte: "La guerre c'est la paix. La liberte c'est l'esclavage. L'ignorance c'est la force.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Big Brother vous regarde.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Celui qui controle le passe controle l'avenir. Celui qui controle le present controle le passe.", source: "1984 - George Orwell", type: "livre" },
  { texte: "La liberte c'est la liberte de dire que deux et deux font quatre.", source: "1984 - George Orwell", type: "livre" },
  { texte: "On peut tout faire disparaitre sauf le passe.", source: "1984 - George Orwell", type: "livre" },
  { texte: "Il faut imaginer Sisyphe heureux.", source: "Le Mythe de Sisyphe - Camus", type: "livre" },
  { texte: "L'humanite ne peut supporter beaucoup de realite.", source: "T.S. Eliot", type: "livre" },
  { texte: "La civilisation est une course entre l'education et la catastrophe.", source: "H.G. Wells", type: "livre" },
  { texte: "Nous sommes tous fous. La seule question est de savoir a quel point.", source: "Philip K. Dick", type: "livre" },
  { texte: "La realite est ce qui, lorsqu'on cesse d'y croire, ne disparait pas.", source: "Philip K. Dick", type: "livre" },
  { texte: "Dieu crea l'homme a son image. L'homme le lui rendit bien.", source: "Voltaire", type: "livre" },
  { texte: "Le silence est le seul langage que le gouvernement n'a pas encore reussi a corrompre.", source: "Ambrose Bierce", type: "livre" },

  // PHILOSOPHIE
  { texte: "Quand tu regardes trop longtemps dans l'abime, l'abime regarde aussi en toi.", source: "Friedrich Nietzsche", type: "philosophie" },
  { texte: "Dieu est mort. Et c'est nous qui l'avons tue.", source: "Friedrich Nietzsche", type: "philosophie" },
  { texte: "Ce qui ne me tue pas me rend plus fort.", source: "Friedrich Nietzsche", type: "philosophie" },
  { texte: "L'homme est condamne a etre libre.", source: "Jean-Paul Sartre", type: "philosophie" },
  { texte: "L'enfer c'est les autres.", source: "Jean-Paul Sartre", type: "philosophie" },
  { texte: "Je pense, donc je suis.", source: "Rene Descartes", type: "philosophie" },
  { texte: "Le but de la vie est de vivre, et de vivre c'est d'etre conscient.", source: "Oscar Wilde", type: "philosophie" },
  { texte: "La seule vraie sagesse est de savoir qu'on ne sait rien.", source: "Socrate", type: "philosophie" },
  { texte: "Connais-toi toi-meme.", source: "Socrate", type: "philosophie" },
  { texte: "Le temps est un cercle plat.", source: "True Detective", type: "philosophie" },
  { texte: "Nous sommes les createurs de notre propre destruction.", source: "Carl Jung", type: "philosophie" },
  { texte: "Les masses n'ont jamais soif de verite. Elles demandent des illusions.", source: "Sigmund Freud", type: "philosophie" },
];

const emojis = { bible: "📖", film: "🎬", serie: "📺", livre: "📚", philosophie: "🧠" };

const hashtags = [
  "#FinDesTemps #Prophetie #Actualite",
  "#Citation #Verite #Societe",
  "#Bible #Philosophie #Eveil",
  "#Cinema #Citation #2030",
  "#Apocalypse #Solstice #Conscience",
  "#Dystopie #Futur #Verite",
  "#2030 #ComptaRebours #Prophetie",
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
    await posterCitation();
    return;
  }

  try {
    await agent.login({
      identifier: process.env.BLUESKY_IDENTIFIER,
      password: process.env.BLUESKY_PASSWORD,
    });
    await agent.post({ text: post });
    console.log("✅ Post publie a " + new Date().toLocaleTimeString());
    console.log(rebours);
  } catch (err) {
    console.error("❌ Erreur : " + err.message);
  }
}

async function main() {
  console.log('🔮 Bot Apocalyptique demarre !');
  console.log('📅 Compte a rebours vers le Solstice du 21/12/2030');
  console.log(getCompteARebours());
  console.log('\nPremier post en cours...\n');
  await posterCitation();
  setInterval(posterCitation, INTERVALLE);
}

main();