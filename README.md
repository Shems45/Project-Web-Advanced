# LoL Champions Stats App (v3.2 – Vite Edition)

Een interactieve webapplicatie voor het verkennen, filteren en vergelijken van League of Legends champions. Gebouwd met **Vite** voor razendsnelle development, betere bundling en moderne features. Versie 3.2 bevat volledige Vite-integratie, mobile-first optimalisaties, en geavanceerde visualisatie.

---

## 🆕 Wat is nieuw in versie 3.2?

- ⚡ **Vite-integratie**: Snelle build, live reload, HMR en productieklare output
- 📱 **Mobiele verbeteringen**:
  - Popup past zich perfect aan kleine schermen aan
  - Touch-vriendelijk: ✋ **Long-press op mobiel** opent popup (in plaats van dubbelklik)
- 🌙 **Verbeterde donkere modus**:
  - Popup stylet nu ook consistent in dark mode
- 📊 **Chart.js** toont statgrafiek met percentages t.o.v. maxwaarden
- 🔄 **Reset-knop** voor filters, zoekopdracht en favorieten
- 🧠 **Tooltips** bij statistieken voor extra duidelijkheid
- 🎯 **Volledige herstructurering** naar Vite-compatible `/src` mappenstructuur
- 📦 Nieuwe scripts: `npm run dev`, `npm run build`, `npm run preview`

---

## 📁 Projectstructuur

```
project-root/
├── index.html
├── vite.config.js
├── package.json
├── README.md      
└── src/
    ├── scripts/
    │   ├── app.js
    │   └── utils.js
    └── styles/
        └── style.css

---

## 🧩 Functionaliteiten

- 🔍 Zoek op naam
- ↕️ Sorteer op stats (HP, armor, attack speed, enz.)
- 🧙 Filter op champion rol (Fighter, Mage, Support, ...)
- ⭐ Voeg toe aan favorieten (bewaard in localStorage)
- 🌓 Automatische én togglebare dark mode
- 🖼️ Splash-art popup + Chart.js grafiek
- 🧠 Tooltip-uitleg per stat
- 🔄 Resetfilter-knop
- 💾 Cache en voorkeuren worden lokaal opgeslagen
- 🖱️ Dubbelklik op desktop / long press op mobiel om popups te openen
- 🎯 Lazy loading en animaties via `IntersectionObserver`

---

## ▶️ Hoe gebruik je dit met Vite?

### 🔧 Installeren en starten:

1. Zorg dat je [Node.js](https://nodejs.org) hebt geïnstalleerd
2. Clone dit project
3. Open een terminal in de projectmap en voer uit:

```
npm install
npm run dev

```

4. Bezoek `http://localhost:5501` of de poort die je hebt ingesteld in `vite.config.js`

---

## 🔗 Externe bronnen

- [Riot Games Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)
- [Chart.js](https://www.chartjs.org/)
- [Vite](https://vitejs.dev/)

---

🎓 Gemaakt als leerproject – versie 3.2 (met Vite)
