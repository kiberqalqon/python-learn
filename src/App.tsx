import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from './context/SettingsContext';
import Login from './pages/Login';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import Settings from './pages/Settings';
import About from './pages/About';
import { useSettings } from './context/SettingsContext';

function AppContent() {
  const { settings } = useSettings();
  
  return (
    <div className={settings.theme === 'dark' ? 'dark' : ''}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/topics/:id" element={<TopicDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <SettingsProvider>
        <AppContent />
      </SettingsProvider>
    </Router>
  );
}

export default App;