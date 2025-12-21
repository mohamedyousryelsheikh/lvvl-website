import { Box } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Partners from '../components/Partners/Partners';
import AIAgentPreview from '../components/AIAgentPreview/AIAgentPreview';
import Collaboration from '../components/Collaboration/Collaboration';
import Features from '../components/Features/Features';
import Clients from '../components/Clients/Clients';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Navbar />
            <Box component="main">
                <Hero />
                <Partners />
                <AIAgentPreview />
                <Collaboration />
                <Features />
                <Clients />
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;
