import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

export default function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <Login />
    </div>
  );
}