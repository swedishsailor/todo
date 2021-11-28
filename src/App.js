import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MainView from './components/MainView/MainView';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/mainview" exact element={<MainView/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
