import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Priya is learning in Git workshop and created this react application
        </p>
        <a
          className="App-link"
          href="https://github.com/Pri-gop/My_first_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          look at this program in git hub
        </a>
      </header>
    </div>
  );
}

export default App;
