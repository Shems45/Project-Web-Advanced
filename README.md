# LoL Champions Stats App (v3.3 – Vite Edition)

Een interactieve webapplicatie voor het doorzoeken, filteren en vergelijken van League of Legends champions. Deze versie is volledig gebouwd met **Vite**, bevat mobiele optimalisaties, visuele grafieken, en caching voor offline gebruik.

---

## 📖 Projectbeschrijving

Deze webapplicatie maakt gebruik van de officiële Riot Games Data Dragon API om informatie over champions dynamisch op te halen. Gebruikers kunnen champions filteren, sorteren en in detail bekijken via interactieve popups met grafieken en tooltips.

---

## ⚙️ Functionaliteiten

- 🔍 Zoeken op naam (real-time filtering)
- ↕️ Sorteren op statistieken: HP, armor, attack speed, enz.
- 🧙 Filteren op rol: Fighter, Mage, Tank, enz.
- ⭐ Favorieten opslaan via `localStorage`
- 🌙 Donkere modus (automatisch + toggle)
- 🖱️ Dubbelklik / Long press opent detail-popup
- 📊 Statistieken weergegeven met Chart.js grafieken
- 🔄 Resetknop voor alle filters
- ⚡ Lazy loading + animatie via `IntersectionObserver`
- 🧠 Tooltips bij stat-iconen
- 📱 Volledig responsive + mobiele gestures

---

## 🔗 Gebruikte API's en libraries

- [Riot Games Data Dragon API](https://developer.riotgames.com/docs/lol#data-dragon)
- [Chart.js](https://www.chartjs.org/)
- [Vite](https://vitejs.dev/) 

---

## 🛠️ Technische implementatie (met regelnummers)

Hieronder worden de belangrijkste functies en technische vereisten gekoppeld aan hun locatie in de code (`utils.js`):

| Functionaliteit                     | Functie                           | Regels in `utils.js` |
|------------------------------------|-----------------------------------|-----------------------|
| **API data ophalen**               | `fetchChampions()`                | regel 27 – 41         |
| **Caching met localStorage**       | `localStorage.getItem/setItem`    | regel 3 – 4, 27 – 41  |
| **Zoekfunctie**                    | `setupSearch()`                   | regel 43 – 46         |
| **Sorteren op statistieken**       | `setupSort()`                     | regel 47 – 50         |
| **Filter op rol**                  | `setupRoleFilter()`               | regel 55 – 58         |
| **Favorieten toggle**             | `setupFavoritesToggle()`         | regel 51 – 54         |
| **Favorieten opslaan/laden**       | `favorites`, `renderChampions()`  | regel 1 – 4, 83 – 143 |
| **Popup sluiten**                  | `setupPopup()`                    | regel 59 – 62         |
| **Popup tonen**                    | `showPopup()`                     | regel 145 – 202       |
| **Chart.js grafiek**               | in `showPopup()`                  | regel 179 – 202       |
| **Lazy loading & animatie**        | `IntersectionObserver`            | regel 94 – 106        |
| **Long press support (mobiel)**    | touch events in `renderChampions` | regel 129 – 140       |
| **Reset filters knop**             | `setupResetButton()`              | regel 204 – 211       |
| **Favorieten wissen**              | `setupClearFavorites()`           | regel 214 – 219       |
| **Random champion popup**          | `setupRandomChampion()`           | regel 221 – 225       |
| **Opslag resetten + reload**       | `setupResetStorage()`             | regel 227 – 231       |
| **Dark mode toggle**               | `setupThemeToggle()`              | regel 13 – 25         |
| **Automatisch dark mode (tijd)**   | `const hour = ...`                | regel 6 – 8           |
| **Applicatie-initialisatie**       | `initApp()`                       | regel 10 – 12         |

---

### 🧠 Wat doet `app.js`?

Het bestand `app.js` fungeert als de **entreepunt van de applicatie**. Het importeert de functies uit `utils.js` en roept ze aan zodra de DOM is geladen. Het zorgt ervoor dat alle componenten van de app correct geïnitialiseerd worden.

**Belangrijkste functies in `app.js`:**

- `initializeApp()` (vanaf regel 3):  
  Roept alle setup-functies aan voor zoeken, sorteren, dark mode, popup-eventhandlers, etc.
- Zorgt ervoor dat alles pas start **na DOMContentLoaded**, dus als de HTML klaar is om met JS te communiceren.

➡️ Het bestand is dus verantwoordelijk voor het starten van de app zodra de gebruiker de pagina opent.

---

## 🖼️ Screenshots

### 💻 Desktop

![Screenshot desktop](./Screenshots/Screenshot%201.png)
![Screenshot desktop](./Screenshots/Screenshot%202.png)

### 📱 Smartphone

![Screenshot mobiel](./Screenshots/Screenshot%201%20-%20Smartphone.png)
![Screenshot mobiel](./Screenshots/Screenshot%202%20-%20Smartphone.png)

---

## 🚀 Installatiehandleiding (met Vite)

1. Zorg dat je [Node.js](https://nodejs.org/) hebt geïnstalleerd
2. Clone de repository of download het project
3. Voer in de terminal uit:

```bash
npm install
npm run dev
```

4. Open `http://localhost:5501` in je browser

---

## 📦 Projectstructuur

```
LoL_Champions_App/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── scripts/
│   │   ├── app.js
│   │   └── utils.js
│   └── styles/
│       └── style.css
└── Screenshots/
```

---

## 📚 Gebruikte bronnen

- Riot API documentatie
- [Chart.js docs](https://www.chartjs.org/docs/latest/)
- [Vite documentatie](https://vitejs.dev/guide/)
- OpenAI ChatGPT-4 – [gesprekslog](https://chatgpt.com/share/682d0e44-cdf0-800c-b86e-478cdd87ec9b)  

---

🎓 Gemaakt als leerproject – Versie 3.3 (Vite)
