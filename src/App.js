import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="title-main">Weather Forecast</h1>
        <Weather defaultCity="Bratislava" />
        <footer className="footer">
          <p className="footer-text">
            <a
              href="https://github.com/miroslavaka/weather-app"
              target="_blank"
              className="link"
            >
              Open-source on GitHub
            </a>{' '}
            coded by{' '}
            <a
              href="https://mira-codes.netlify.app/"
              target="_blank"
              className="link"
            >
              Miroslava
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
