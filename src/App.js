
import { useSelector } from 'react-redux';
import './App.css';
import Authentication from './components/Authentication';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const isAuthentic=useSelector((state)=>state.authReducer.isAuthenticate)

  return (
    <div className="App">
      {!isAuthentic && <Authentication />}
      {isAuthentic && <WelcomeScreen />}
    </div>
  );
}

export default App;
