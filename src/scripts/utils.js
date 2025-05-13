
let allChampions = [];
let showingFavorites = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export async function initApp() {
    setupThemeToggle();
    allChampions = await fetchChampions();
    setupSearch();
    setupSort();
    setupFavoritesToggle();
    setupPopup();
    renderChampions(allChampions);
}

function setupThemeToggle() {
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const newMode = !document.body.classList.contains('dark-mode');
        document.body.classList.toggle('dark-mode', newMode);
        localStorage.setItem('darkMode', newMode);
    });
}

async function fetchChampions() {
    const cacheKey = 'championData';
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        return JSON.parse(cached);
    }

    try {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const data = await res.json();
        const champions = Object.values(data.data);
        localStorage.setItem(cacheKey, JSON.stringify(champions));
        return champions;
    } catch (error) {
        alert('Kon data niet ophalen. Controleer je internetverbinding.');
        return [];
    }
}
    

function setupSearch() {
    document.getElementById('search').addEventListener('input', () => {
        renderFilteredChampions();
    });
}

function setupSort() {
    document.getElementById('sort-select').addEventListener('change', () => {
        renderFilteredChampions();
    });
}

function setupFavoritesToggle() {
    document.getElementById('show-favorites').addEventListener('click', () => {
        showingFavorites = !showingFavorites;
        renderFilteredChampions();
    });
}

function renderFilteredChampions() {
    const query = document.getElementById('search').value.toLowerCase();
    const sortKey = document.getElementById('sort-select').value;
    let champs = [...allChampions];

    if (showingFavorites) {
        champs = champs.filter(ch => favorites.includes(ch.id));
    }

    if (query) {
        champs = champs.filter(ch => ch.name.toLowerCase().includes(query));
    }

    if (sortKey) {
        champs.sort((a, b) => {
        const aVal = sortKey === 'magic' ? a.info.magic : a.stats[sortKey];
        const bVal = sortKey === 'magic' ? b.info.magic : b.stats[sortKey];
        return (bVal ?? 0) - (aVal ?? 0);
    });
    }

    renderChampions(champs);
}

function renderChampions(champions) {
    const container = document.getElementById('champions-container');
    container.innerHTML = champions.length ? champions.map(ch => `
        <div class="champion-card ${favorites.includes(ch.id) ? 'favorite' : ''}" data-id="${ch.id}">
            <img loading="lazy" src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${ch.image.full}" alt="${ch.name}" width="100%">
            <strong>${ch.name}</strong>
            <div class="stats">
                ❤️ HP: ${ch.stats.hp}<br>
                🏃 Movespeed: ${ch.stats.movespeed}<br>
                🛡️ Armor: ${ch.stats.armor}<br>
                ⚡ Attack Speed: ${ch.stats.attackspeed.toFixed(2)}<br>
                ⚔️ Attack Damage: ${ch.stats.attackdamage}<br>
                🔮 Spell Block: ${ch.stats.spellblock}<br>
                ✨ Magic: ${ch.info.magic}
            </div>
        </div>`).join('') : '<p>Geen champions gevonden.</p>';

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    container.querySelectorAll('.champion-card').forEach(card => {
        observer.observe(card);
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            if (favorites.includes(id)) {
                favorites = favorites.filter(f => f !== id);
                card.classList.remove('favorite');
            } else {
                favorites.push(id);
                card.classList.add('favorite');
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });

        card.addEventListener('dblclick', () => {
            const champ = allChampions.find(c => c.id === card.dataset.id);
            showPopup(champ);
        });
    });
}

function setupPopup() {
    document.getElementById('close-popup').addEventListener('click', () => {
        document.getElementById('champion-popup').classList.add('hidden');
    });
}

function showPopup(champ) {
    const content = `
        <h2>${champ.name}</h2>
        <p>${champ.blurb}</p>
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg" style="width:100%;border-radius:10px;">
    `;
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('champion-popup').classList.remove('hidden');
}
