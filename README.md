# LoL Champions Stats App (v3.0)

Een interactieve webapplicatie voor het verkennen van League of Legends champions met filtering, visualisatie en gebruikerservaring als prioriteit. Deze versie brengt nieuwe UX-features, prestatieverbeteringen en visuele upgrades.

---

## 🚀 Wat is nieuw in versie 3.0?

- 🌙 **Automatische dark mode** gebaseerd op tijd van de dag
- 🔄 **Reset-knop** voor zoeken, sorteren, en filters
- 🧠 **Tooltip-uitleg** bij stat icons (hover voor uitleg)
- 📊 **Chart.js-visualisatie met procentuele vergelijking** t.o.v. max-waardes
- 📱 **Responsive layout** (aanpassingen voor kleinere schermen)
- 🖼️ **Verbeterde lazy loading** en fade-in met `IntersectionObserver`
- 💾 Gebruik van `localStorage` voor dark mode + favorieten + cache
- 🔧 Code opgeschoond en componenten gestructureerd (o.a. `setupResetButton()` toegevoegd)

---

## 📁 Bestanden

- `index.html` – HTML structuur en Chart.js integratie
- `style.css` – Styling, animatie, tooltips, responsive
- `app.js` – App-startpunt
- `utils.js` – Functionaliteit voor filteren, popup, charts, events
- `settings.json` – Live Server poort (5501)

---

## 🧩 Functionaliteiten

- 🔍 Zoek op naam
- ↕️ Sorteer op stats (HP, armor, attack speed, enz.)
- 🧙 Filter op champion rol (Fighter, Mage, Support, ...)
- ⭐ Voeg toe aan favorieten (lokaal opgeslagen)
- 🌓 Donkere modus (automatisch of toggle)
- 🖼️ Popup met splash-art + Chart.js stat-grafiek
- 🧠 Tooltips voor duidelijkheid bij statistieken
- 🔄 Reset alle filters en zoekopdrachten

---

## 🔗 Externe bronnen

- [Riot Games Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)
- [Chart.js](https://www.chartjs.org/)

---

## ▶️ Starten

1. Clone deze repo
2. Open in VS Code en start Live Server
3. Navigeer naar `http://localhost:5501`
4. Filter, vergelijk en ontdek champions!

---

🎓 Gemaakt als leerproject – versie 3.0
