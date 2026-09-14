// --- DATA A KONFIGURACE ---

// Průměrné hrubé měsíční mzdy v ČR pro kontext
const AVERAGE_WAGES = {
  1993: 5900,
  2000: 13614,
  2007: 20957,
  2015: 26467
};

// Rozšířená databáze položek (po 5 položkách na ročník)
const itemsDatabase = [
  // --- 1993 ---
  {
    id: 1,
    title: "Chléb konzumní (1 kg)",
    desc: "Kvasový pšenično-žitný chléb",
    year: 1993,
    price: 14,
    todayPrice: 42,
    image: "images/chleb.jpg"
  },
  {
    id: 2,
    title: "Časopis Čtyřlístek",
    desc: "Sešitové číslo v PNS stánku",
    year: 1993,
    price: 12,
    todayPrice: 50,
    image: "images/ctyrlistek.jpg"
  },
  {
    id: 3,
    title: "Mléko pasterované (1 liter)",
    desc: "Sáčkové mléko",
    year: 1993,
    price: 6.50,
    todayPrice: 24,
    image: "images/mleko.jpg"
  },
  {
    id: 4,
    title: "Lístek na MHD v Praze",
    desc: "Základní přestupní jízdenka",
    year: 1993,
    price: 6,
    todayPrice: 40,
    image: "images/mhd.jpg"
  },
  {
    id: 5,
    title: "Cigarety Sparta",
    desc: "Krabička tvrdých Spart",
    year: 1993,
    price: 28,
    todayPrice: 150,
    image: "images/sparty.jpg"
  },

  // --- 2000 ---
  {
    id: 6,
    title: "Škoda Fabia 1.4 MPI (nová)",
    desc: "Základní výbava Classic",
    year: 2000,
    price: 249900,
    todayPrice: 380000,
    image: "images/fabia.jpg"
  },
  {
    id: 7,
    title: "Nokia 3310",
    desc: "Legendární mobilní telefon",
    year: 2000,
    price: 9990,
    todayPrice: 1500,
    image: "images/nokia.jpg"
  },
  {
    id: 8,
    title: "Lahvové pivo Gambrinus 10°",
    desc: "Půllitrová láhev (vč. zálohy)",
    year: 2000,
    price: 9.90,
    todayPrice: 21,
    image: "images/pivo.jpg"
  },
  {
    id: 9,
    title: "Čokoláda Studentská pečeť",
    desc: "Tabulka 180g",
    year: 2000,
    price: 32,
    todayPrice: 75,
    image: "images/specet.jpg"
  },
  {
    id: 10,
    title: "Big Mac Menu v McDonald's",
    desc: "Sendvič, střední hranolky a nápoj",
    year: 2000,
    price: 89,
    todayPrice: 169,
    image: "images/bigmac.jpg"
  },

  // --- 2007 ---
  {
    id: 11,
    title: "Benzín Natural 95 (1 litr)",
    desc: "Průměrná cena na čerpacích stanicích",
    year: 2007,
    price: 29.50,
    todayPrice: 38.50,
    image: "images/benzin.jpg"
  },
  {
    id: 12,
    title: "Lístek do kina na film Vratné lahve",
    desc: "Standardní vstupenka v multiplexu",
    year: 2007,
    price: 110,
    todayPrice: 220,
    image: "images/kino.jpg"
  },
  {
    id: 13,
    title: "Káva Nescafé Gold (200g)",
    desc: "Instantní káva ve skle",
    year: 2007,
    price: 159,
    todayPrice: 230,
    image: "images/nescafe.jpg"
  },
  {
    id: 14,
    title: "Měsíční paušál T-Mobile / O2",
    desc: "Průměrný základní balíček s volnými minutami",
    year: 2007,
    price: 499,
    todayPrice: 650,
    image: "images/pausal.jpg"
  },
  {
    id: 15,
    title: "LCD TV Samsung 32\" (81 cm)",
    desc: "HD Ready televizor",
    year: 2007,
    price: 18990,
    todayPrice: 4500,
    image: "images/lcdtv.jpg"
  },

  // --- 2015 ---
  {
    id: 16,
    title: "Kofola (2 litry)",
    desc: "PET láhev v akci / běžná cena",
    year: 2015,
    price: 26,
    todayPrice: 39,
    image: "images/kofola.jpg"
  },
  {
    id: 17,
    title: "PlayStation 4 500GB",
    desc: "Herní konzole",
    year: 2015,
    price: 9990,
    todayPrice: 6500,
    image: "images/ps4.jpg"
  },
  {
    id: 18,
    title: "Apple iPhone 6 (16GB)",
    desc: "Nový smartphone od Apple",
    year: 2015,
    price: 21190,
    todayPrice: 25000,
    image: "images/iphone.jpg"
  },
  {
    id: 19,
    title: "Maslo 250g",
    desc: "Čerstvé kostkové máslo",
    year: 2015,
    price: 34,
    todayPrice: 62,
    image: "images/maslo.jpg"
  },
  {
    id: 20,
    title: "Měsíční předplatné Netflix",
    desc: "Standard balíček (HD rozlišení)",
    year: 2015,
    price: 219,
    todayPrice: 309,
    image: "images/netflix.jpg"
  }
];

// --- HERNÍ STAV ---
let currentItems = [];
let currentRound = 0;
let totalScore = 0;

// Generátor náhradního SVG obrázku v případě chybějícího souboru
function createFallbackSVG(title) {
  const encodedTitle = encodeURIComponent(title);
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="100%" height="100%" fill="%230f172a"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23f59e0b" font-family="sans-serif" font-size="28" font-weight="bold">${encodedTitle}</text><text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="%2364748b" font-family="sans-serif" font-size="16">RetroCena.cz</text></svg>`;
}

// --- HERNÍ LOGIKA ---

function resetToHome(e) {
  if (e) e.preventDefault();
  document.getElementById('start-screen').classList.remove('hidden');
  document.getElementById('game-card').classList.add('hidden');
  document.getElementById('final-screen').classList.add('hidden');
}

function startGame(mode) {
  if (mode === 'mix') {
    // Zamícháme všechny a vybereme přesně 10 položek pro 10 kol
    currentItems = [...itemsDatabase].sort(() => 0.5 - Math.random()).slice(0, 10);
  } else {
    const selectedYear = parseInt(mode);
    // Vybereme všechny dostupné položky z daného roku
    currentItems = itemsDatabase.filter(item => item.year === selectedYear).sort(() => 0.5 - Math.random());
  }

  if (currentItems.length === 0) {
    alert("Pro tento ročník zatím nemáme dostatek položek!");
    return;
  }

  currentRound = 0;
  totalScore = 0;

  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('final-screen').classList.add('hidden');
  document.getElementById('game-card').classList.remove('hidden');

  loadRound();
}

function loadRound() {
  const item = currentItems[currentRound];

  document.getElementById('round-indicator').innerText = `Kolo ${currentRound + 1}/${currentItems.length}`;
  document.getElementById('item-year').innerText = item.year;
  document.getElementById('item-title').innerText = item.title;
  document.getElementById('item-desc').innerText = item.desc;

  const imgEl = document.getElementById('item-image');
  imgEl.onerror = () => { imgEl.src = createFallbackSVG(item.title); };
  imgEl.src = item.image;

  document.getElementById('price-input').value = '';
  document.getElementById('price-input').disabled = false;
  document.getElementById('guess-form').classList.remove('hidden');
  document.getElementById('result-panel').classList.add('hidden');
}

function submitGuess() {
  const inputEl = document.getElementById('price-input');
  const userGuess = parseFloat(inputEl.value);

  if (isNaN(userGuess) || userGuess < 0) {
    alert("Zadej prosím platnou cenu!");
    return;
  }

  const item = currentItems[currentRound];
  const realPrice = item.price;

  // Výpočet přesnosti a skóre (max 1000 na kolo)
  const diffPercent = Math.abs(userGuess - realPrice) / realPrice;
  let roundScore = Math.max(0, Math.round(1000 * (1 - diffPercent)));
  totalScore += roundScore;

  // Zobrazení výsledků kola
  document.getElementById('res-year').innerText = item.year;
  document.getElementById('real-price').innerText = `${realPrice.toLocaleString('cs-CZ')} Kč`;
  document.getElementById('today-price').innerText = `${item.todayPrice.toLocaleString('cs-CZ')} Kč`;

  const diffTextEl = document.getElementById('diff-text');
  if (diffPercent === 0) {
    diffTextEl.innerHTML = `<span class="text-emerald-400 font-black">🎯 Přesně! (+1000 b.)</span>`;
  } else if (diffPercent <= 0.1) {
    diffTextEl.innerHTML = `<span class="text-emerald-400 font-bold">Skvělý odhad! (+${roundScore} b.)</span>`;
  } else if (diffPercent <= 0.3) {
    diffTextEl.innerHTML = `<span class="text-amber-400 font-bold">Docela blízko. (+${roundScore} b.)</span>`;
  } else {
    diffTextEl.innerHTML = `<span class="text-rose-400 font-bold">Mimo terč... (+${roundScore} b.)</span>`;
  }

  // Kontext průměrné mzdy
  const avgWage = AVERAGE_WAGES[item.year];
  if (avgWage) {
    const pcsFromWage = Math.floor(avgWage / realPrice);
    document.getElementById('wage-context').innerHTML = 
      `V roce <b>${item.year}</b> byla průměrná mzda <b>${avgWage.toLocaleString('cs-CZ')} Kč</b>.<br>Za jeden plat šlo koupit cca <b>${pcsFromWage.toLocaleString('cs-CZ')} ks</b> tohoto produktu.`;
  } else {
    document.getElementById('wage-context').innerHTML = '';
  }

  document.getElementById('price-input').disabled = true;
  document.getElementById('guess-form').classList.add('hidden');
  document.getElementById('result-panel').classList.remove('hidden');
}

function nextRound() {
  currentRound++;
  if (currentRound < currentItems.length) {
    loadRound();
  } else {
    showFinalScreen();
  }
}

function showFinalScreen() {
  document.getElementById('game-card').classList.add('hidden');
  document.getElementById('final-screen').classList.remove('hidden');

  const maxPossible = currentItems.length * 1000;
  document.getElementById('final-score').innerText = `${totalScore.toLocaleString('cs-CZ')} / ${maxPossible.toLocaleString('cs-CZ')}`;

  const rankEl = document.getElementById('final-rank');
  const ratio = totalScore / maxPossible;

  if (ratio >= 0.9) {
    rankEl.innerText = "🏆 Legenda pamětníků! Tvoje vzpomínky jsou přesné jako hodinky.";
  } else if (ratio >= 0.7) {
    rankEl.innerText = "👏 Skvělý výkon! Ceny minulosti máš velmi dobře v malíku.";
  } else if (ratio >= 0.4) {
    rankEl.innerText = "Slušný pokus, ale pár cen tě zaskočilo. Zkus to znovu!";
  } else {
    rankEl.innerText = "😅 Zřejmě jsi v té době ještě nebyl na světě nebo jsi nechodil nakupovat!";
  }
}

// --- FUNKCE PRO SDÍLENÍ A POZVÁNÍ PŘÁTEL ---

function getShareText() {
  const scoreElement = document.getElementById('final-score');
  const scoreText = scoreElement ? scoreElement.innerText : '0 / 10 000';
  
  return `Získal jsem ${scoreText} bodů v retrokvízu na RetroCena.cz! 🕹️ Poznáš, kolik stály věci v letech 1993–2015? Zkus mě překonat na: https://retrocena.cz`;
}

async function shareResult() {
  const shareData = {
    title: 'RETROCENA.CZ - Můj výsledek',
    text: getShareText(),
    url: 'https://retrocena.cz'
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log('Sdílení zrušeno:', err);
    }
  } else {
    copyResultText();
  }
}

function copyResultText() {
  const text = getShareText();
  const copyBtn = document.getElementById('copy-btn');
  
  navigator.clipboard.writeText(text).then(() => {
    if (copyBtn) {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '✅ Zkopírováno!';
      copyBtn.classList.add('bg-emerald-600', 'text-white');
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.classList.remove('bg-emerald-600', 'text-white');
      }, 2500);
    }
  }).catch(err => {
    alert('Text výzvy:\n\n' + text);
  });
}
