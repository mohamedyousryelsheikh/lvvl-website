import { Box, Container, Typography, Button } from '@mui/material';
import './Hero.css';

const Hero = () => {
    return (
        <Box className="hero-section">
            <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 15, pb: 10 }}>
                <Typography
                    variant="h1"
                    sx={{
                        mb: 3,
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        maxWidth: '900px',
                        mx: 'auto',
                        lineHeight: 1.2
                    }}
                >
                    Unified Operational Intelligence for the Modern Enterprise
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{
                        mb: 5,
                        maxWidth: '700px',
                        mx: 'auto',
                        fontSize: '1.25rem',
                        lineHeight: 1.6
                    }}
                >
                    Achieve complete visibility, robust security, and actionable insights. Transform your data into your most valuable asset with our integrated observability and cybersecurity platform.
                </Typography>
                <Button component="a" href="/services" variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: '1rem' }}>
                    Explore Our Services
                </Button>
            </Container>

            {/* Decorative Gradient Overlay if needed */}
            <Box className="hero-gradient-overlay" />
        </Box>
    );
};

export default Hero;
