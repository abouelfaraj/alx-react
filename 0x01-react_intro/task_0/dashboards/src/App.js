import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  return (
    <div className="App">
      <header className="App-header">
	<img src={logo} className="App-logo" alt="Holberton logo" />
	<h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard></p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>     
  );
}

export default App;
