import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundTrailAnimation from './components/backgroundTrail';
import Sidebar from './components/sideBar';
import Dashboard from './routes/Dashboard';
import Transactions from './routes/Transactions';
import Entries from './routes/Entries';
import Exits from './routes/Exit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from './components/main';
import GlobalProvider from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="relative min-h-screen flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Área principal */}
          <div className="flex-1">
            <BackgroundTrailAnimation />
            <Main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/entries" element={<Entries />} />
                <Route path="/exits" element={<Exits />} />
              </Routes>
            </Main>
          </div>
        </div>
      </Router>
    </GlobalProvider>
    
  );
}

export default App;
