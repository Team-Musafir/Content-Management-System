import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import HomePage from './Pages/HomePage';
import AuthPage from './Pages/AuthPage';
import { ThemeProvider } from './Components/theme-provider.jsx';


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;