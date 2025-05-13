# LoL Champions Stats App (v2.1)

Een geavanceerde webapplicatie om League of Legends champions te bekijken, sorteren en beheren op basis van hun statistieken. Deze versie bevat prestatieverbeteringen, lokale caching en animaties.

## 🔄 Wat is nieuw in versie 2.1?

- 💾 **Caching van champion-data in localStorage** om API-calls te verminderen
- 🌙 **Dark mode voorkeur wordt opgeslagen** in localStorage
- 🧠 **Slimmere sortering** (onderscheid tussen `stats` en `info` velden)
- 🖼️ **Lazy loading voor afbeeldingen** om performance te verbeteren
- ✨ **Fade-in animatie voor champion-kaarten** via `IntersectionObserver`
- ⚠️ **Foutafhandeling** bij netwerkproblemen met duidelijke melding
- 🧹 Kleine optimalisaties en bugfixes

## 📁 Bestanden

- `index.html` – HTML structuur
- `style.css` – Styling, dark mode, animaties
- `app.js` – Init-logica
- `utils.js` – Fetching, filtering, sorteren, popup en events
- `settings.json` – Live server poortinstelling (5501)

## 🔧 Functionaliteiten

- 🔍 Zoek op naam
- ↕️ Sorteer op HP, movespeed, armor, etc.
- ⭐ Voeg champions toe als favoriet (opgeslagen in localStorage)
- 🌓 Donkere modus toggle met herinnering van voorkeur
- 📊 Bekijk stats + splash-art popup met beschrijving
- 🖼️ Lazy loading en fade-in van kaarten voor betere UX

## 🔗 API Gebruikt

- [Riot Games Data Dragon](https://developer.riotgames.com/docs/lol#data-dragon)

## 🚀 Starten

1. Clone de repo
2. Start met Live Server in VS Code
3. Navigeer naar `http://localhost:5501`
4. Begin met zoeken, sorteren en ontdekken!

## 📸 Voorbeeld

![voorbeeld](https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg)

---


