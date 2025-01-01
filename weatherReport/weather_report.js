function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'a201498f27f5bb1b214cb51a6f7d6b6f'; // Remplacez 'YOUR_API_KEY' par votre véritable clé API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
    
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );