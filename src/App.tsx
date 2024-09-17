import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Top from './components/Top';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  const [isNavExpanded, setExpandedNav] = useState<boolean>(false);
  return (
    <div className="min-h-screen">
      <Top setExpandedNav={setExpandedNav} />
      <div className="flex flex-col md:flex-row">
        <Nav isNavExpanded={isNavExpanded} setExpandedNav={setExpandedNav} />
        <div className="flex-grow">
          <div className="p-4">
            <HomePage />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
