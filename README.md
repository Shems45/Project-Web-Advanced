# LoL Champions Stats App (v2.2)

Een uitgebreide webapplicatie om League of Legends champions te doorzoeken, filteren, vergelijken en visualiseren met moderne browserfeatures.

## 🆕 Wat is nieuw in versie 2.2?

- 📊 **Toegevoegd: Chart.js statistiekenbalk** in popup voor visuele vergelijking van HP, armor, AD, AS, spell block & magic
- 🧪 **Nieuwe filter op champion role**: Fighter, Tank, Mage, etc.
- ✅ Gecombineerde filters: zoeken + sorteren + rollen tegelijk
- 💡 Slimme herstructurering van `utils.js` voor overzichtelijke logica
- 🐞 Diverse bugfixes & code cleanup

## 📁 Bestanden

- `index.html` – Structuur van de pagina + Chart.js import
- `style.css` – Layout, kleuren, dark mode
- `app.js` – Startpunt van de app
- `utils.js` – Alle functionaliteit: ophalen, sorteren, filteren, charts
- `settings.json` – Poortinstelling voor Live Server (5501)

## 🔧 Functionaliteiten

- 🔍 Zoekfunctie op naam
- ↕️ Sorteer op HP, movespeed, armor, attack damage, enz.
- ⭐ Markeer favorieten (opgeslagen via localStorage)
- 🌓 Dark/Light mode toggle + voorkeur opslaan
- 🧙 Filter op champion rol (Fighter, Mage, Support, ...)
- 🖼️ Lazy loading + fade-in animaties
- 📊 Statistiekenvisualisatie met Chart.js in popup
- ⚠️ Foutmelding als de API niet beschikbaar is

## 🔗 Gebruikte API

- [Riot Games Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)
- [Chart.js](https://www.chartjs.org/) voor grafieken

## 🚀 Starten

1. Clone deze repository
2. Open de projectmap in VS Code
3. Start Live Server
4. Ga naar `http://localhost:5501`
5. Zoek, sorteer, filter, klik en bekijk stats!

---

Gemaakt voor leerdoeleinden – versie 2.2
