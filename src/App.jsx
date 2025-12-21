import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Observability from './pages/Observability';
import Cybersecurity from './pages/Cybersecurity';
import DataEngineering from './pages/DataEngineering';
import AIAgentProduct from './pages/AIAgentProduct';

import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/observability" element={<Observability />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/data-engineering" element={<DataEngineering />} />
          <Route path="/product/ai-agent" element={<AIAgentProduct />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
