import logo from './components/assets/logo.png';
import './App.css';
import Login from './components/login/login';

function App() {
  return (
    <>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Yet Anoter React Task App
          </p>
        </header>
      </div>
      <Login></Login>
    </>
  );
}

export default App;
