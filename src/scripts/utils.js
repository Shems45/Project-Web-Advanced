
let allChampions = [];
let showingFavorites = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


const hour = new Date().getHours();
if (hour >= 19 || hour < 7) {
    document.body.classList.add('dark-mode');
}

export async function initApp() {
    setupThemeToggle();
    allChampions = await fetchChampions();
    setupSearch();
    setupSort();
    setupFavoritesToggle();
    setupRoleFilter();
    setupPopup();
    setupClearFavorites();
    setupRandomChampion();
    setupResetStorage();
    setupResetButton();
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
    if (cached) return JSON.parse(cached);

    try {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const data = await res.json();
        const champions = Object.values(data.data);
        localStorage.setItem(cacheKey, JSON.stringify(champions));
        return champions;
    } catch {
        alert('Kon data niet ophalen.');
        return [];
    }
}

function setupSearch() {
    document.getElementById('search').addEventListener('input', renderFilteredChampions);
}
function setupSort() {
    document.getElementById('sort-select').addEventListener('change', renderFilteredChampions);
}
function setupFavoritesToggle() {
    document.getElementById('show-favorites').addEventListener('click', () => {
        showingFavorites = !showingFavorites;
        renderFilteredChampions();
    });
}
function setupRoleFilter() {
    document.getElementById('role-filter').addEventListener('change', renderFilteredChampions);
}
function setupPopup() {
    document.getElementById('close-popup').addEventListener('click', () => {
        document.getElementById('champion-popup').classList.add('hidden');
    });
}

function renderFilteredChampions() {
    const query = document.getElementById('search').value.toLowerCase();
    const sortKey = document.getElementById('sort-select').value;
    const selectedRole = document.getElementById('role-filter').value;
    let champs = [...allChampions];

    if (showingFavorites) champs = champs.filter(ch => favorites.includes(ch.id));
    if (selectedRole) champs = champs.filter(ch => ch.tags.includes(selectedRole));
    if (query) champs = champs.filter(ch => ch.name.toLowerCase().includes(query));

    if (sortKey) {
        champs.sort((a, b) => {
            const aVal = sortKey === 'magic' ? a.info.magic : a.stats[sortKey];
            const bVal = sortKey === 'magic' ? b.info.magic : b.stats[sortKey];
            return (bVal ?? 0) - (aVal ?? 0);
        });
    }

    renderChampions(champs);
    document.getElementById('results-count').textContent = `Aantal gevonden: ${champs.length}`;
}

function renderChampions(champions) {
    const container = document.getElementById('champions-container');
    container.innerHTML = champions.length ? champions.map(ch => `
        <div class="champion-card ${favorites.includes(ch.id) ? 'favorite' : ''}" data-id="${ch.id}">
            <img loading="lazy" src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${ch.image.full}" alt="${ch.name}" width="100%">
            <strong>${ch.name}</strong>
            <div class="stats"><span class="tooltip">❤️ HP <span class="tooltiptext">Health Points</span></span>: ${ch.stats.hp}<br><span class="tooltip">🛡️ Armor <span class="tooltiptext">Physical Defense</span></span>: ${ch.stats.armor}<br><span class="tooltip">⚔️ AD <span class="tooltiptext">Attack Damage</span></span>: ${ch.stats.attackdamage}<br><span class="tooltip">⚡ AS <span class="tooltiptext">Attack Speed</span></span>: ${ch.stats.attackspeed.toFixed(2)}<br><span class="tooltip">🔮 Spell Block <span class="tooltiptext">Magic Defense</span></span>: ${ch.stats.spellblock}<br><span class="tooltip">✨ Magic <span class="tooltiptext">Magic Skill Level</span></span>: ${ch.info.magic}</div>
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
        let clickTimeout;

        card.addEventListener('click', () => {
            if (clickTimeout) return; // voorkom dubbele klik-handling
        
            clickTimeout = setTimeout(() => {
                const id = card.dataset.id;
                if (favorites.includes(id)) {
                    favorites = favorites.filter(f => f !== id);
                    card.classList.remove('favorite');
                } else {
                    favorites.push(id);
                    card.classList.add('favorite');
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                clickTimeout = null;
            }, 250); // wacht 250ms om te zien of het een dubbelklik is
        });
        
        card.addEventListener('dblclick', () => {
            clearTimeout(clickTimeout);
            clickTimeout = null;
        
            const champ = allChampions.find(c => c.id === card.dataset.id);
            showPopup(champ);
        });
        

// Mobile long press support
let pressTimer;

card.addEventListener('touchstart', () => {
    pressTimer = setTimeout(() => {
        const champ = allChampions.find(c => c.id === card.dataset.id);
        showPopup(champ);
    }, 500); // long press duration
});

card.addEventListener('touchend', () => {
    clearTimeout(pressTimer);
});
    });
}

function showPopup(champ) {
    const content = `
        <h2>${champ.name}</h2>
        <p>${champ.blurb}</p>
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg" style="width:100%;border-radius:10px;">
        <canvas id="stats-chart" width="320" height="180"></canvas>
    `;
    document.getElementById('popup-content').innerHTML = content;
    document.getElementById('champion-popup').classList.remove('hidden');

    const stats = {
        hp: champ.stats.hp,
        armor: champ.stats.armor,
        attackdamage: champ.stats.attackdamage,
        attackspeed: champ.stats.attackspeed,
        spellblock: champ.stats.spellblock,
        magic: champ.info.magic
    };

    const maxStats = {
        hp: Math.max(...allChampions.map(c => c.stats.hp)),
        armor: Math.max(...allChampions.map(c => c.stats.armor)),
        attackdamage: Math.max(...allChampions.map(c => c.stats.attackdamage)),
        attackspeed: Math.max(...allChampions.map(c => c.stats.attackspeed)),
        spellblock: Math.max(...allChampions.map(c => c.stats.spellblock)),
        magic: Math.max(...allChampions.map(c => c.info.magic))
    };

    const percentData = Object.keys(stats).map(key =>
        Math.round((stats[key] / maxStats[key]) * 100)
    );

    const ctx = document.getElementById('stats-chart').getContext('2d');
    if (window.statsChart) window.statsChart.destroy();

    window.statsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['HP', 'Armor', 'AD', 'AS', 'Spell Block', 'Magic'],
            datasets: [{
                label: champ.name + ' (% t.o.v. max)',
                data: percentData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: value => value + '%'
                    }
                }
            }
        }
    });
}

function setupResetButton() {
document.getElementById('reset-filters').addEventListener('click', () => {
    document.getElementById('search').value = '';
    document.getElementById('sort-select').value = '';
    document.getElementById('role-filter').value = '';
    showingFavorites = false;
    renderFilteredChampions();
});
}


function setupClearFavorites() {
    document.getElementById('clear-favorites').addEventListener('click', () => {
        favorites = [];
        localStorage.removeItem('favorites');
        renderFilteredChampions();
    });
}

function setupRandomChampion() {
    document.getElementById('random-champion').addEventListener('click', () => {
        const random = allChampions[Math.floor(Math.random() * allChampions.length)];
        showPopup(random);
    });
}

function setupResetStorage() {
    document.getElementById('reset-storage').addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}
