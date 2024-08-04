import keys from './keys.jpeg';
import logo from './GDG_Logo.png'
import './App.css';
import Collapsible from 'react-collapsible';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      
        
      </header>
      <div class= "main">
      <div class="head-image">
        <img src={keys} className="App-logo" />
        </div>
      <div>
        <img src={logo} className="GDGlogo" />
      </div>
      <div class="main-layout">
      <h1>Plate File List - 7/25/2024</h1>
      </div>
      <Collapsible trigger="40-60%">
        <ul>
          <Collapsible trigger="Candybar"><li>Candybar</li></Collapsible>
          <Collapsible trigger="Plate Name 2"><li>Plate Name 2</li></Collapsible>
          <Collapsible trigger="Plate Name 3"><li>Plate Name 3</li></Collapsible>
          <Collapsible trigger="Plate Name 4"><li>Plate Name 4</li></Collapsible>
          <Collapsible trigger="Plate Name 5"><li>Plate Name 5</li></Collapsible>
          <Collapsible trigger="Plate Name 6"><li>Plate Name 6</li></Collapsible>
        </ul>
      </Collapsible>
      <Collapsible trigger="75%">
        <ul>
          <Collapsible trigger="Plate Name 1"><li>Plate Name 1</li></Collapsible>
          <Collapsible trigger="Plate Name 2"><li>Plate Name 2</li></Collapsible>
          <Collapsible trigger="Plate Name 3"><li>Plate Name 3</li></Collapsible>
          <Collapsible trigger="Plate Name 4"><li>Plate Name 4</li></Collapsible>
          <Collapsible trigger="Plate Name 5"><li>Plate Name 5</li></Collapsible>
          <Collapsible trigger="Plate Name 6"><li>Plate Name 6</li></Collapsible>
        </ul>
      </Collapsible>
      <Collapsible trigger="TKL">
        <ul>
          <Collapsible trigger="Plate Name 1"><li>Plate Name 1</li></Collapsible>
          <Collapsible trigger="Plate Name 2"><li>Plate Name 2</li></Collapsible>
          <Collapsible trigger="Plate Name 3"><li>Plate Name 3</li></Collapsible>
          <Collapsible trigger="Plate Name 4"><li>Plate Name 4</li></Collapsible>
          <Collapsible trigger="Plate Name 5"><li>Plate Name 5</li></Collapsible>
          <Collapsible trigger="Plate Name 6"><li>Plate Name 6</li></Collapsible>
        </ul>
      </Collapsible>
      </div>
    </div>

  );
}

export default App;
