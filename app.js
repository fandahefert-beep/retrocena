// --- FIREBASE KONFIGURACE ---
const firebaseConfig = {
  apiKey: "AIzaSyBJSYFbmGtIOZkA91RJzz3JSslTloX7gY0",
  authDomain: "project-8891257192597548136.firebaseapp.com",
  databaseURL: "https://project-8891257192597548136-default-rtdb.firebaseio.com",
  projectId: "project-8891257192597548136",
  storageBucket: "project-8891257192597548136.firebasestorage.app",
  messagingSenderId: "778792675176",
  appId: "1:778792675176:web:3c9a220e70a94e400f58dd",
  measurementId: "G-5712NB10KN"
};

// Inicializace Firebase
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
}

// --- DATA A KONFIGURACE ---

const AVERAGE_WAGES = {
  1993: 5900,
  2000: 13614,
  2007: 20957,
  2015: 26467
};

const itemsDatabase = [
  // ==================== ROK 1993 (10 položek) ====================
  { id: 1, title: "Chléb konzumní (1 kg)", desc: "Kvasový pšenično-žitný chléb", year: 1993, price: 14, todayPrice: 42, image: "images/chleb.jpg" },
  { id: 2, title: "Časopis Čtyřlístek", desc: "Sešitové číslo v PNS stánku", year: 1993, price: 12, todayPrice: 50, image: "images/ctyrlistek.jpg" },
  { id: 3, title: "Mléko pasterované (1 l)", desc: "Sáčkové polotučné mléko", year: 1993, price: 6.50, todayPrice: 24, image: "images/mleko.jpg" },
  { id: 4, title: "Jízdenka na MHD v Praze", desc: "Základní přestupní jízdenka", year: 1993, price: 6, todayPrice: 40, image: "images/jizdenka.jpg" },
  { id: 5, title: "Cigarety Sparta", desc: "Krabička tvrdých Spart", year: 1993, price: 28, todayPrice: 150, image: "images/cigarety.jpg" },
  { id: 6, title: "Škoda Favorit 135L (nová)", desc: "Nový osobní automobil Škoda", year: 1993, price: 198000, todayPrice: 380000, image: "images/favorit.jpg" },
  { id: 7, title: "Poštovní známka na dopis", desc: "Standardní poštovné po ČR", year: 1993, price: 3, todayPrice: 34, image: "images/znamka.jpg" },
  { id: 8, title: "Kostka másla (250g)", desc: "Tradiční čerstvé máslo", year: 1993, price: 18, todayPrice: 62, image: "images/maslo93.jpg" },
  { id: 9, title: "Čokoláda Studentská pečeť", desc: "Mléčná čokoláda 200g", year: 1993, price: 25, todayPrice: 75, image: "images/studentka.jpg" },
  { id: 10, title: "Pivo Pilsner Urquell (0.5l)", desc: "Lahvový světlý ležák", year: 1993, price: 12, todayPrice: 38, image: "images/pilsner93.jpg" },

  // ==================== ROK 2000 (10 položek) ====================
  { id: 11, title: "Škoda Fabia 1.4 MPI (nová)", desc: "Základní výbava Classic", year: 2000, price: 249900, todayPrice: 380000, image: "images/fabia.jpg" },
  { id: 12, title: "Nokia 3310", desc: "Legendární mobilní telefon", year: 2000, price: 9990, todayPrice: 1500, image: "images/nokia.jpg" },
  { id: 13, title: "Lahvové pivo Gambrinus 10°", desc: "Půllitrová láhev (bez zálohy)", year: 2000, price: 9.90, todayPrice: 21, image: "images/pivo.jpg" },
  { id: 14, title: "Míša nanuk (55 ml)", desc: "Tvarohový nanuk v čokoládě", year: 2000, price: 8, todayPrice: 24, image: "images/misa.jpg" },
  { id: 15, title: "Cukrářská vata / Sladkosti", desc: "Balíček vatových bonbónů", year: 2000, price: 15, todayPrice: 45, image: "images/vata.jpg" },
  { id: 16, title: "Kola Coca-Cola (2 litry)", desc: "PET láhev nápoje", year: 2000, price: 29.90, todayPrice: 48, image: "images/cocacola.jpg" },
  { id: 17, title: "PlayStation 2 (konzole)", desc: "Nová herní konzole Sony", year: 2000, price: 18990, todayPrice: 13500, image: "images/ps2.jpg" },
  { id: 18, title: "Káva Jihlavanka (75g)", desc: "Mletá káva Standard", year: 2000, price: 19.90, todayPrice: 45, image: "images/jihlavanka.jpg" },
  { id: 19, title: "Lístek do kina", desc: "Běžné vstupné do kina", year: 2000, price: 70, todayPrice: 220, image: "images/kino2000.jpg" },
  { id: 20, title: "Vejce čerstvá (10 ks)", desc: "Balení 10 ks vajec", year: 2000, price: 21, todayPrice: 52, image: "images/vejce2000.jpg" },

  // ==================== ROK 2007 (10 položek) ====================
  { id: 21, title: "Benzín Natural 95 (1 litr)", desc: "Průměrná cena na čerpacích stanicích", year: 2007, price: 29.50, todayPrice: 38.50, image: "images/benzin.jpg" },
  { id: 22, title: "Lístek do kina na Vratné lahve", desc: "Standardní vstupenka v multiplexu", year: 2007, price: 110, todayPrice: 220, image: "images/kino.jpg" },
  { id: 23, title: "Kniha Harry Potter a relikvie smrti", desc: "České vázané vydání", year: 2007, price: 499, todayPrice: 599, image: "images/potter.jpg" },
  { id: 24, title: "Jablka konzumní (1 kg)", desc: "Průměrná cena čerstvých jablek", year: 2007, price: 23, todayPrice: 38, image: "images/jablka.jpg" },
  { id: 25, title: "Vstupenka na Rock for People", desc: "Celofestivalový lístek", year: 2007, price: 1150, todayPrice: 3990, image: "images/rfp.jpg" },
  { id: 26, title: "Škoda Octavia II Combi (nová)", desc: "Motorizace 1.9 TDI", year: 2007, price: 524900, todayPrice: 650000, image: "images/octavia.jpg" },
  { id: 27, title: "LCD Monitor 19\" (PC)", desc: "Stolní LCD obrazovka", year: 2007, price: 5400, todayPrice: 2500, image: "images/monitor.jpg" },
  { id: 28, title: "Kofola (2 litry)", desc: "Tradiční nealkoholický nápoj", year: 2007, price: 22.90, todayPrice: 38, image: "images/kofola.jpg" },
  { id: 29, title: "Kuřecí prsní řízky (1 kg)", desc: "Čerstvé chlazené masa", year: 2007, price: 125, todayPrice: 180, image: "images/kureci.jpg" },
  { id: 30, title: "Měsíční kupón MHD Praha", desc: "Měsíční legitimace (dospělý)", year: 2007, price: 460, todayPrice: 550, image: "images/mhd2007.jpg" },

  // ==================== ROK 2015 (10 položek) ====================
  { id: 31, title: "Apple iPhone 6 (16GB)", desc: "Nový smartphone od Apple", year: 2015, price: 21190, todayPrice: 25000, image: "images/iphone.jpg" },
  { id: 32, title: "Čerstvé máslo 250g", desc: "Kostka tradičního másla", year: 2015, price: 34, todayPrice: 62, image: "images/maslo.jpg" },
  { id: 33, title: "Vejce čerstvá (10 ks)", desc: "Balení vajec velikosti M", year: 2015, price: 28, todayPrice: 52, image: "images/vajicka.jpg" },
  { id: 34, title: "Školní obědy (měsíčně)", desc: "Průměrná cena stravného na ZŠ", year: 2015, price: 520, todayPrice: 950, image: "images/obedy.jpg" },
  { id: 35, title: "Čistý nájem bytu 2+1 (mimo Prahu)", desc: "Průměrný měsíční nájem bez energií", year: 2015, price: 7500, todayPrice: 15000, image: "images/najem.jpg" },
  { id: 36, title: "PlayStation 4 (500GB)", desc: "Herní konzole Sony", year: 2015, price: 9990, todayPrice: 12000, image: "images/ps4.jpg" },
  { id: 37, title: "Předplatné Netflix (Basic/měsíc)", desc: "Měsíční tarif pro 1 zařízení", year: 2015, price: 199, todayPrice: 239, image: "images/netflix.jpg" },
  { id: 38, title: "Cukr krystal (1 kg)", desc: "Balení bílého cukru", year: 2015, price: 14.50, todayPrice: 28, image: "images/cukr.jpg" },
  { id: 39, title: "Cigarety Marlboro", desc: "Krabička Marlboro Red", year: 2015, price: 94, todayPrice: 160, image: "images/marlboro.jpg" },
  { id: 40, title: "Mletá káva Tchibo (250g)", desc: "Balení kávy Tchibo Gold", year: 2015, price: 69, todayPrice: 110, image: "images/tchibo.jpg" }
];

// --- HERNÍ STAV ---
let currentItems = [];
let currentRound = 0;
let totalScore = 0;

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
    currentItems = [...itemsDatabase].sort(() => 0.5 - Math.random()).slice(0, 10);
  } else {
    const selectedYear = parseInt(mode);
    currentItems = itemsDatabase.filter(item => item.year === selectedYear).sort(() => 0.5 - Math.random()).slice(0, 10);
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

  const diffPercent = Math.abs(userGuess - realPrice) / realPrice;
  let roundScore = Math.max(0, Math.round(1000 * (1 - diffPercent)));
  totalScore += roundScore;

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

  const saveForm = document.getElementById('save-score-form');
  if (saveForm) saveForm.classList.remove('hidden');

  // Načíst aktuální žebříček z Firebase
  loadLeaderboard();
}

// --- ONLINE ŽEBŘÍČEK (FIREBASE) ---

function saveScoreToLeaderboard() {
  const nameInput = document.getElementById('player-name');
  const playerName = nameInput.value.trim();

  if (!playerName) {
    alert("Zadej prosím své jméno!");
    return;
  }

  if (typeof firebase === 'undefined') {
    alert("Databáze není dostupná.");
    return;
  }

  const db = firebase.database();
  const leaderboardRef = db.ref('leaderboard');

  leaderboardRef.push({
    name: playerName,
    score: totalScore,
    date: new Date().toLocaleDateString('cs-CZ')
  }).then(() => {
    document.getElementById('save-score-form').classList.add('hidden');
    loadLeaderboard();
  }).catch((err) => {
    console.error("Chyba při ukládání:", err);
    alert("Došlo k chybě při ukládání skóre. Zkontroluj nastavení Rules ve Firebase.");
  });
}

function loadLeaderboard() {
  const listEl = document.getElementById('leaderboard-list');
  if (!listEl) return;

  if (typeof firebase === 'undefined') {
    listEl.innerHTML = '<div class="text-slate-400 text-center italic">Databáze není připojená.</div>';
    return;
  }

  listEl.innerHTML = '<div class="text-center text-slate-400 py-2">Načítání žebříčku...</div>';

  const db = firebase.database();
  const topScoresRef = db.ref('leaderboard').orderByChild('score').limitToLast(10);

  topScoresRef.once('value', (snapshot) => {
    const scores = [];
    snapshot.forEach((child) => {
      scores.push(child.val());
    });

    // Seřadíme od nejvyššího po nejnižší
    scores.reverse();

    if (scores.length === 0) {
      listEl.innerHTML = '<div class="text-center text-slate-400 py-2">Zatím žádné zapsané skóre. Buď první!</div>';
      return;
    }

    listEl.innerHTML = scores.map((item, index) => {
      const isTop3 = index < 3 ? 'text-amber-400 font-bold' : 'text-slate-300';
      const medal = index === 0 ? '🥇 ' : index === 1 ? '🥈 ' : index === 2 ? '🥉 ' : `${index + 1}. `;
      return `
        <div class="flex justify-between items-center py-1.5 px-2 rounded bg-slate-900/50 border-b border-slate-700/30">
          <span class="${isTop3}">${medal}${item.name}</span>
          <span class="font-mono ${isTop3}">${item.score.toLocaleString('cs-CZ')} b.</span>
        </div>
      `;
    }).join('');
  });
}

// --- FUNKCE PRO SDÍLENÍ ---

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
  
  navigator.clipboard.writeText(text).then(() => {
    alert('Výsledek a pozvánka byly zkopírovány do schránky! Můžeš je poslat přátelům.');
  }).catch(err => {
    alert('Text výzvy:\n\n' + text);
  });
}
