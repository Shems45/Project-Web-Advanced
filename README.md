# LoL Champions Stats App (v2)

Deze webapplicatie toont uitgebreide statistieken van League of Legends champions via de officiële Riot API. In deze tweede versie zijn er extra features toegevoegd zoals sorteren, favorieten en een popup met detailinformatie.

## 🚀 Nieuwe Features (v2)

- 🔍 Zoekfunctie om champions snel te filteren
- ↕️ Sorteer op stats: HP, movespeed, armor, attack damage, etc.
- ⭐ Voeg favorieten toe (lokaal opgeslagen in je browser)
- 🌓 Dark/Light modus toggle
- 🖼️ Detailpopup met splash art en korte beschrijving
- 💾 Slaat favorieten op in `localStorage`
- 📦 Gebruik van modules (`utils.js` en `app.js` gescheiden)

## 📁 Bestanden

- `index.html` – HTML structuur
- `style.css` – Styling + dark mode + layout
- `app.js` – Initialisatie en DOM-koppeling
- `utils.js` – Alle logica: data ophalen, sorteren, filteren, favorieten, popup
- `settings.json` – Live server configuratie (poort 5501)

## 🔗 Gebruikte API

- [Riot Games Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)

## ✅ Gebruik

1. Clone deze repository
2. Start een lokale server (bijv. met Live Server in VS Code)
3. Open `http://localhost:5501` in je browser
4. Zoek, sorteer, klik en ontdek!

## 📸 Voorbeeld

![voorbeeld](https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg)

---
