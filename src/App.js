import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header";
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
        <Router>
          <Header />
          <div className="container">
            <Routes>
             <Route path="/home" element={<Home />} />
             <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
    </>  
  );
}

export default App;
