const api = {
    key: 'e63ce2206c50a1ff42c22560a27b9f2d',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    
}
const temp = document.getElementById('temp');

async function search() {
    try {
      const response = await fetch(`${api.url}?q=San Nicolás de los Arroyos&appid=${api.key}&lang=es`);
      const data = await response.json();
      temp.innerHTML = `${toCelsius(data.main.temp)}c`;
    } catch (err) {
      console.log(err);
      alert('Hubo un error');
      return search;
    }
  }
  
  function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }
  window.onload = search()