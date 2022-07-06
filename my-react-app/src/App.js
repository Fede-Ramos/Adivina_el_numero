import logo from './logo.svg';
import './App.css';
import { GameForm } from './Components/Form';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenidos a Adivina el número!</h2>
        <p>Se generará un número aleatorio entre 0 y 100 inclusive.</p>
        <p>Si aciertas que número es, ganas!!</p>
        <p>Recuerda que solo tienes 5 intentos...buena suerte!</p>
        <a>
          <GameForm/>
        </a>
      </header>
    </div>
  );
}

export default App;
