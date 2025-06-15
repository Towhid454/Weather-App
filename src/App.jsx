import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState('Dhaka');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = '6d26217adc8b7985586b480bd89fe43b'; // ⛔ Replace with your OpenWeather API key

  useEffect(() => {
    if (!city) return;
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, [city]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🌦 Weather App</h1>
      <SearchForm setCity={setCity} />
      {loading && <p>Loading...</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
