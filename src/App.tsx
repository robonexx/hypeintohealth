import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Logo from './components/logo/Logo';
import Home from './pages/Home';
import Planner from './pages/Planner';
import Contact from './pages/Contact';
import Exercises from './pages/Exercises';
import ScrollToTop from './components/scrolltotop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header>
        <Logo title='HIH' />
        <Nav />
      </Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planner' element={<Planner />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
