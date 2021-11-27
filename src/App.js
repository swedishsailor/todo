import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Login/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
