const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const championsContainer = document.getElementById('champions-container');
const searchInput = document.getElementById('search');

async function fetchChampions() {
    const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
    const data = await response.json();
    return Object.values(data.data);
}

function displayChampions(champions) {
    championsContainer.innerHTML = champions.map(champion => `
        <div class="champion-card">
            <img src="https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}" alt="${champion.name}">
            <h3>${champion.name}</h3>
        </div>
    `).join('');
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    fetchChampions().then(champions => {
        const filtered = champions.filter(champion => champion.name.toLowerCase().includes(query));
        displayChampions(filtered);
    });
});

fetchChampions().then(displayChampions);
