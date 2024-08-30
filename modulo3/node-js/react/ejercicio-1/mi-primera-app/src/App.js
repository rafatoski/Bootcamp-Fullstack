import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';

function App() {
  function Saludo({ nombre }) {
    return <h4>¡Hola Bienvenido, {nombre}!</h4>;
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
      <Saludo nombre="Rafael" /> 
      <Contador />
    </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
