import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ColorTheme from './components/ColorTheme';

function App() {
  return (
    <>
      <div className="App">
        <Profile />
        <Login />
        <br/>
        <ColorTheme/>
      </div>
    </>
  );
}

export default App;
