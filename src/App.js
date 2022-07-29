import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ColorTheme from './components/ColorTheme';
import Hide from './components/Hide';

function App() {
  return (
    <>
      <div className="App">
        <Profile />
        <Login />
        <br/>
        <ColorTheme/>
        <br/>
        <Hide/>
      </div>
    </>
  );
}

export default App;
