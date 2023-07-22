import Weather from './Weather';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="title">Weather Forecast</h1>
        <Weather />
        <Footer />
      </div>
    </div>
  );
}

export default App;
