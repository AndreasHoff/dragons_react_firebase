import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header";
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>  
  );
}

export default App;
