
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './components/Authentication';
import Inbox from './components/Inbox';
import SentBox from './components/SentBox';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const isAuthentic=useSelector((state)=>state.authReducer.isAuthenticate)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={!isAuthentic ? <Authentication /> : <WelcomeScreen />}></Route>
        <Route path='/Inbox' element={!isAuthentic ? <Authentication /> : <Inbox />}></Route>
        <Route path='/SentBox' element={!isAuthentic ? <Authentication /> : <SentBox />}></Route>

      </Routes>
      
      
    </div>
  );
}

export default App;
