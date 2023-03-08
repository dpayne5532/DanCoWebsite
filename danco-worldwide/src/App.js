import logo from './logo.svg';
import './App.css';
import {BsTwitter} from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         <code>DanCo Worldwide</code>

        </h1>
        <h3>
        <article className="contact__option">


            <a href="https://twitter.com/DanCoWorldwide" target="_blank"><BsTwitter />DanCo</a>

          </article>
        <code></code>
        </h3>

      </header>
    </div>
  );
}

export default App;
