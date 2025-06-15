function WeatherInfo({ weather }) {
  if (weather.cod !== 200) {
    return <p>❌ City not found</p>;
  }

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>🌡 Temp: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>📋 Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
