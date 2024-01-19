// Replace the API_KEY with your own OpenWeatherMap API key
const API_KEY = '5a2a47ce17457634a5ccb6cc395e267c';

// Weather card elements
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const iconElement = document.getElementById('icon');
const descriptionElement = document.getElementById('description');

// Search button and input field
const searchButton = document.getElementById('search-btn');
const locationInput = document.getElementById('location-input');

// Fetch weather data from OpenWeatherMap API
function fetchWeatherData(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${lagos}&appid=${'5a2a47ce17457634a5ccb6cc395e267c'}`;

  axios.get(url)
    .then(response => {
      const data = response.data;

      // Update DOM with weather data
      cityElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
      iconElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.log(error);
      cityElement.textContent = 'City not found';
      temperatureElement.textContent = '';
      iconElement.src = '';
      descriptionElement.textContent = '';
    });
}

// Search button click event handler
searchButton.addEventListener('click', () => {
  const cityName = locationInput.value.trim();

  if (cityName !== '') {
    fetchWeatherData(cityName);
  }
});

// Press Enter key in the input field to perform the search
locationInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const cityName = locationInput.value.trim();

    if (cityName !== '') {
      fetchWeatherData(cityName);
    }
  }
});
