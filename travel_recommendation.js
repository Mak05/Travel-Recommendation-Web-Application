document.addEventListener('DOMContentLoaded', () => {
  const btnSearch = document.getElementById('btnSearch');
  const btnClear = document.getElementById('btnClear');
  const searchInput = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('resultsContainer');

  if (btnSearch) {
    btnSearch.addEventListener('click', handleSearch);
  }

  if (btnClear) {
    btnClear.addEventListener('click', clearResults);
  }

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';

    if (!query) {
      resultsContainer.innerHTML = '<p class="no-results">Please enter a keyword to search.</p>';
      return;
    }

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        let results = [];

        if (query.includes('beach')) {
          results = data.beaches;
        } else if (query.includes('temple')) {
          results = data.temples;
        } else if (query.includes('country') || query.includes('countries')) {
          data.countries.forEach(country => {
            results.push(...country.cities);
          });
        } else {
          // Check if user entered a specific country name (e.g., Australia, Japan, Brazil)
          const foundCountry = data.countries.find(c => c.name.toLowerCase().includes(query));
          if (foundCountry) {
            results = foundCountry.cities;
          }
        }

        displayResults(results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        resultsContainer.innerHTML = '<p class="no-results">Failed to load travel recommendations.</p>';
      });
  }

  function displayResults(items) {
    if (!items || items.length === 0) {
      resultsContainer.innerHTML = '<p class="no-results">No recommendations found for your query.</p>';
      return;
    }

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'result-card';

      card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <button class="btn-visit">Visit</button>
        </div>
      `;

      resultsContainer.appendChild(card);
    });
  }

  function clearResults() {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
  }
});