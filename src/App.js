import logo from './logo.svg';
import './App.css';
import { Card } from "./components/card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to nullpointerqueen.dev!
        </p>
        <p>Go on, take a peek at what I'm learning...</p>
      </header>
      <Card/>
    </div>
  );
}

export default App;
