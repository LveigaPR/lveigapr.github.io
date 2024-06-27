async function fetchDataAndAnalyze() {
    const data = await fetchData();
    const suggestions = analyzeData(data);
    displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '<h2>Jogos Sugeridos</h2>';
    suggestions.forEach((game, index) => {
        const gameDiv = document.createElement('div');
        gameDiv.textContent = `Jogo ${index + 1}: ${game.join(', ')}`;
        suggestionsDiv.appendChild(gameDiv);
    });
}
