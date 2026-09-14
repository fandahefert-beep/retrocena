// Průměrná mzda dnes pro porovnání (ČSÚ)
const TODAY_AVG_WAGE = 45000;

// Databáze položek s lokálními cestami do složky images/
const itemsDatabase = [
  // --- ROK 1993 ---
  {
    title: "1 kg Chleba konzumního kmínového",
    desc: "Balený bochník 1 kg v samoobsluze",
    year: 1993,
    price: 16,
    todayPrice: 48,
    avgWage: 5900,
    imageUrl: "images/chleb.jpg",
    icon: "🍞"
  },
  {
    title: "Časopis Čtyřlístek (číslo 205)",
    desc: "Sešitové číslo v PNS stánku",
    year: 1993,
    price: 12,
    todayPrice: 59,
    avgWage: 5900,
    imageUrl: "images/ctyrlistek.jpg",
    icon: "📚"
  },
  {
    title: "1 kg Jablek (odrůda Idared)",
    desc: "Tuzemská konzumní jablka v samoobsluze",
    year: 1993,
    price: 16,
    todayPrice: 39,
    avgWage: 5900,
    imageUrl: "images/jablka.jpg",
    icon: "🍎"
  },
  {
    title: "1l Mléka polotučného pasterovaného",
    desc: "Krabicové MLÉKO 1,5% tuku v prodejně potravin",
    year: 1993,
    price: 8,
    todayPrice: 24,
    avgWage: 5900,
    imageUrl: "images/mleko.jpg",
    icon: "🥛"
  },
  {
    title: "Cukrová vata na špejli",
    desc: "Střední porce u stánku na Matějské pouti",
    year: 1993,
    price: 10,
    todayPrice: 60,
    avgWage: 5900,
    imageUrl: "images/vata.jpg",
    icon: "🍭"
  },

  // --- ROK 2000 ---
  {
    title: "Nokia 3310 (nová při zahájení prodeje)",
    desc: "Nedotovaný telefon u operátora Eurotel",
    year: 2000,
    price: 9000,
    todayPrice: 1600,
    avgWage: 13600,
    imageUrl: "images/nokia.jpg",
    icon: "📱"
  },
  {
    title: "Škoda Fabia I Hatchback 1.4 MPI (50 kW)",
    desc: "Nové auto v dealerské síti v základní výbavě Classic",
    year: 2000,
    price: 249000,
    todayPrice: 380000,
    avgWage: 13600,
    imageUrl: "images/fabia.jpg",
    icon: "🚗"
  },
  {
    title: "Nanuk Míša Tvarohový (55 ml)",
    desc: "Tradiční nanuk v mrazicím boxu v prodejně",
    year: 2000,
    price: 8,
    todayPrice: 24,
    avgWage: 13600,
    imageUrl: "images/misa.jpg",
    icon: "🍦"
  },
  {
    title: "Lístek do Kina Lucerna Praha (večerní představení)",
    desc: "Základní jednorázové vstupné pro 1 dospělou osobu",
    year: 2000,
    price: 60,
    todayPrice: 220,
    avgWage: 13600,
    imageUrl: "images/kino.jpg",
    icon: "🎟️"
  },
  {
    title: "Kniha Harry Potter a Kámen mudrců",
    desc: "1. české vydání v pevné vazbě (nakladatelství Albatros)",
    year: 2000,
    price: 199,
    todayPrice: 399,
    avgWage: 13600,
    imageUrl: "images/potter.jpg",
    icon: "⚡"
  },

  // --- ROK 2007 ---
  {
    title: "1 litr Benzínu Natural 95",
    desc: "Průměrná cena na ČS Shell v ČR",
    year: 2007,
    price: 29,
    todayPrice: 38,
    avgWage: 20900,
    imageUrl: "images/benzin.jpg",
    icon: "⛽"
  },
  {
    title: "Krabička Cigarety Marlboro Red (20 ks)",
    desc: "Trafiková cena s oficiální tabákovou nálepkou",
    year: 2007,
    price: 64,
    todayPrice: 165,
    avgWage: 20900,
    imageUrl: "images/cigarety.jpg",
    icon: "🚬"
  },
  {
    title: "Celodenní vstupenka Rock for People (Český Brod)",
    desc: "Jednodenní lístek v předprodeji na místě festivalu",
    year: 2007,
    price: 750,
    todayPrice: 3900,
    avgWage: 20900,
    imageUrl: "images/rfp.jpg",
    icon: "🎸"
  },
  {
    title: "Jihočeské Máslo Madeta (250 g)",
    desc: "Klasická kostka čerstvého másla v supermarketech",
    year: 2007,
    price: 28,
    todayPrice: 65,
    avgWage: 20900,
    imageUrl: "images/maslo.jpg",
    icon: "🧈"
  },
  {
    title: "0,5l Čepovaný Pilsner Urquell 12°",
    desc: "Čepovaný ležák v běžné restauraci II. cenové skupiny",
    year: 2007,
    price: 28,
    todayPrice: 69,
    avgWage: 20900,
    imageUrl: "images/pivo.jpg",
    icon: "🍺"
  },

  // --- ROK 2015 ---
  {
    title: "Apple iPhone 6 (16 GB verze)",
    desc: "Oficiální nedotovaná cena v Česku při startu prodeje",
    year: 2015,
    price: 21190,
    todayPrice: 23990,
    avgWage: 26400,
    imageUrl: "images/iphone.jpg",
    icon: "📲"
  },
  {
    title: "Polední menu (Polévka + Hlavní chod)",
    desc: "Průměrná cena denního menu v restauraci v krajském městě",
    year: 2015,
    price: 92,
    todayPrice: 195,
    avgWage: 26400,
    imageUrl: "images/obedy.jpg",
    icon: "🍲"
  },
  {
    title: "Měsíční nájem bytu 2+kk (cca 50 m² v Brně)",
    desc: "Čistý měsíční nájem bez záloh na energie a služby",
    year: 2015,
    price: 10500,
    todayPrice: 22000,
    avgWage: 26400,
    imageUrl: "images/najem.jpg",
    icon: "🏠"
  },
  {
    title: "Jízdenka MHD Praha (přestupní na 32 minut)",
    desc: "Papírová základní jízdenka zakoupená v trafice/automatu",
    year: 2015,
    price: 24,
    todayPrice: 30,
    avgWage: 26400,
    imageUrl: "images/jizdenka.jpg",
    icon: "🎫"
  },
  {
    title: "10 ks Čerstvých vajec (velikost M)",
    desc: "Balení vajec z klecového chovu v supermarketech",
    year: 2015,
    price: 29,
    todayPrice: 55,
    avgWage: 26400,
    imageUrl: "images/vajicka.jpg",
    icon: "🥚"
  }
];

let currentGameItems = [];
let currentRound = 0;
let totalScore = 0;
let roundScores = [];
const TOTAL_ROUNDS = 10;

// Generátor záložního SVG v případě, že lokální obrázek chybí
function createFallbackSvg(item) {
  const title = item.title;
  const icon = item.icon || "🏷️";
  const year = item.year;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
    <rect width="800" height="400" fill="#1e293b"/>
    <rect x="16" y="16" width="768" height="368" rx="12" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="8 8"/>
    <text x="50%" y="38%" dominant-baseline="middle" text-anchor="middle" font-size="80">${icon}</text>
    <text x="50%" y="68%" dominant-baseline="middle" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-size="26" font-weight="bold">${title}</text>
    <text x="50%" y="82%" dominant-baseline="middle" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="16">RETROCENA.CZ • ${year}</text>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Návrat do hlavní nabídky
window.resetToHome = function(e) {
  if (e) e.preventDefault();
  
  const startScreen = document.getElementById("start-screen");
  const gameCard = document.getElementById("game-card");
  const finalScreen = document.getElementById("final-screen");

  if (gameCard) gameCard.classList.add("hidden");
  if (finalScreen) finalScreen.classList.add("hidden");
  if (startScreen) startScreen.classList.remove("hidden");
};

window.startGame = function(selectedYear) {
  let selectedPool = [];

  if (!selectedYear || selectedYear === 'mix') {
    selectedPool = [...itemsDatabase].sort(() => Math.random() - 0.5);
  } else {
    const yearNumber = parseInt(selectedYear, 10);
    const yearItems = itemsDatabase.filter(item => item.year === yearNumber).sort(() => Math.random() - 0.5);
    const otherItems = itemsDatabase.filter(item => item.year !== yearNumber).sort(() => Math.random() - 0.5);
    selectedPool = [...yearItems, ...otherItems];
  }

  currentGameItems = selectedPool.slice(0, TOTAL_ROUNDS);
  currentRound = 0;
  totalScore = 0;
  roundScores = [];

  const startScreen = document.getElementById("start-screen");
  const gameCard = document.getElementById("game-card");
  const finalScreen = document.getElementById("final-screen");

  if (startScreen) startScreen.classList.add("hidden");
  if (finalScreen) finalScreen.classList.add("hidden");
  if (gameCard) gameCard.classList.remove("hidden");

  loadRound();
};

function loadRound() {
  const item = currentGameItems[currentRound];

  const roundIndicator = document.getElementById("round-indicator");
  const itemImageEl = document.getElementById("item-image");
  const itemYearEl = document.getElementById("item-year");
  const itemTitleEl = document.getElementById("item-title");
  const itemDescEl = document.getElementById("item-desc");
  const priceInputEl = document.getElementById("price-input");
  const guessForm = document.getElementById("guess-form");
  const resultPanel = document.getElementById("result-panel");

  if (roundIndicator) roundIndicator.textContent = `Kolo ${currentRound + 1}/${TOTAL_ROUNDS}`;
  
  if (itemImageEl) {
    itemImageEl.onerror = function() {
      this.onerror = null;
      this.src = createFallbackSvg(item);
    };
    itemImageEl.src = item.imageUrl;
    itemImageEl.alt = item.title;
  }

  if (itemYearEl) itemYearEl.textContent = item.year;
  if (itemTitleEl) itemTitleEl.textContent = item.title;
  if (itemDescEl) itemDescEl.textContent = item.desc;
  
  if (priceInputEl) priceInputEl.value = "";
  if (guessForm) guessForm.classList.remove("hidden");
  if (resultPanel) resultPanel.classList.add("hidden");
}

function handleGuess() {
  const priceInputEl = document.getElementById("price-input");
  const userGuess = parseFloat(priceInputEl.value);
  if (isNaN(userGuess) || userGuess < 0) return;

  const currentItem = currentGameItems[currentRound];
  const actualPrice = currentItem.price;

  const percentDiff = Math.abs((userGuess - actualPrice) / actualPrice);
  let roundScore = Math.max(0, Math.round(1000 * (1 - percentDiff)));
  totalScore += roundScore;
  roundScores.push(roundScore);

  const resYearEl = document.getElementById("res-year");
  const realPriceEl = document.getElementById("real-price");
  const todayPriceEl = document.getElementById("today-price");
  const diffTextEl = document.getElementById("diff-text");
  const wageContextEl = document.getElementById("wage-context");

  if (resYearEl) resYearEl.textContent = currentItem.year;
  if (realPriceEl) realPriceEl.textContent = actualPrice.toLocaleString('cs-CZ') + " Kč";
  if (todayPriceEl) todayPriceEl.textContent = currentItem.todayPrice.toLocaleString('cs-CZ') + " Kč";

  if (diffTextEl) {
    if (userGuess === actualPrice) {
      diffTextEl.textContent = "🎯 Přesný zásah! +1000 bodů";
      diffTextEl.className = "text-base font-semibold text-emerald-400";
    } else {
      const diffVal = userGuess - actualPrice;
      const sign = diffVal > 0 ? "+" : "";
      diffTextEl.textContent = `Tvůj tip byl o ${sign}${diffVal.toLocaleString('cs-CZ')} Kč vedle. (+${roundScore} bodů)`;
      diffTextEl.className = "text-base font-semibold text-amber-400";
    }
  }

  const oldPct = ((actualPrice / currentItem.avgWage) * 100).toFixed(1);
  const newPct = ((currentItem.todayPrice / TODAY_AVG_WAGE) * 100).toFixed(1);
  
  if (wageContextEl) {
    wageContextEl.innerHTML = `
      V roce <b>${currentItem.year}</b> stála tato položka <b>${oldPct} %</b> tehdejšího platu (${currentItem.avgWage.toLocaleString('cs-CZ')} Kč).<br>
      <b>Dnes</b> stojí cca <b>${newPct} %</b> dnešní průměrné mzdy (${TODAY_AVG_WAGE.toLocaleString('cs-CZ')} Kč).
    `;
  }

  document.getElementById("guess-form").classList.add("hidden");
  document.getElementById("result-panel").classList.remove("hidden");
}

function handleNext() {
  currentRound++;
  if (currentRound < TOTAL_ROUNDS) {
    loadRound();
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  document.getElementById("game-card").classList.add("hidden");
  document.getElementById("final-screen").classList.remove("hidden");
  
  const finalScoreEl = document.getElementById("final-score");
  const finalRankEl = document.getElementById("final-rank");

  if (finalScoreEl) finalScoreEl.textContent = `${totalScore.toLocaleString('cs-CZ')} / 10 000`;

  if (finalRankEl) {
    if (totalScore > 8500) {
      finalRankEl.textContent = "🏆 Šéf Českého statistického úřadu! Máš neuvěřitelný přehled.";
    } else if (totalScore > 6000) {
      finalRankEl.textContent = "👍 Velmi dobrý tipér! Pamatuješ si toho opravdu hodně.";
    } else if (totalScore > 3000) {
      finalRankEl.textContent = "📜 Průměrný pamětník. Některé ceny tě dost zaskočily!";
    } else {
      finalRankEl.textContent = "🧊 Tvůj odhad zamrzl v hluboké minulosti!";
    }
  }

  let shareBtn = document.getElementById("share-btn");
  if (!shareBtn) {
    shareBtn = document.createElement("button");
    shareBtn.id = "share-btn";
    shareBtn.className = "w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-6 rounded-2xl text-xl transition-transform active:scale-95 shadow-lg mt-3";
    const restartBtn = document.getElementById("restart-btn");
    if (restartBtn && restartBtn.parentNode) {
      restartBtn.parentNode.insertBefore(shareBtn, restartBtn);
    }
  }
  shareBtn.textContent = "📋 Kopírovat výsledek pro přátele";
  shareBtn.onclick = copyShareText;
}

function copyShareText() {
  let emojiResult = roundScores.map(score => {
    if (score >= 800) return "🟩";
    if (score >= 400) return "🟨";
    return "🟥";
  }).join("");

  const textToCopy = `${emojiResult}\nRETROCENA.CZ\nMoje skóre: ${totalScore.toLocaleString('cs-CZ')} / 10 000 bodů!\nVyzkoušej to také!`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const shareBtn = document.getElementById("share-btn");
    if (shareBtn) {
      shareBtn.textContent = "✅ Výsledek zkopírován do schránky!";
      setTimeout(() => {
        shareBtn.textContent = "📋 Kopírovat výsledek pro přátele";
      }, 3000);
    }
  });
}

// Navázání posluchačů událostí
document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-btn");
  const nextBtn = document.getElementById("next-btn");
  const priceInputEl = document.getElementById("price-input");

  if (submitBtn) submitBtn.addEventListener("click", handleGuess);
  if (nextBtn) nextBtn.addEventListener("click", handleNext);

  if (priceInputEl) {
    priceInputEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleGuess();
    });
  }
});