import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import MainNav from './components/MainNav';
import History from './components/History';
import Interviews from './components/Interviews';
import LifeAfterBoxing from './components/LifeAfterBoxing';
import Memberships from './components/Memberships';
import Tutorials from './components/Tutorials';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     <MainNav/>
    <Routes>
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/history" element={<History />} />
        <Route path="/lifeAfter" element={<LifeAfterBoxing />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
