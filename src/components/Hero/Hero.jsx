import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const backgroundBoxY = useTransform(scrollY, [0, 1000], [0, 200]); // Reduced range for stability

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children elements
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const backgroundVariants = {
        animate: {
            background: [
                'radial-gradient(100% 100% at 50% -15%, #0f172a 0%, #7c3aed 20%, #22d3ee 50%, #ffffff 90%)',
                'radial-gradient(100% 100% at 50% -15%, #0f172a 0%, #4f41cdff 20%, #103b7f 60%, #ffffff 90%)',
                'radial-gradient(100% 100% at 50% -15%, #0f172a 0%, #7c3aed 20%, #22d3ee 50%, #ffffff 90%)'
            ],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // AI Particle Configuration
    const particleCount = 30;
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2, // Size between 2px and 6px
        duration: Math.random() * 10 + 10,
    }));

    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            pt: 10,
            pb: 10,
            overflow: 'hidden',
            // Fallback background from theme
            background: (theme) => ({
                xs: theme.palette.custom.gradient.heroMobile,
                md: theme.palette.custom.gradient.hero
            }),
        }}>
            {/* Animated Background Layer */}
            <Box
                component={motion.div}
                variants={backgroundVariants}
                animate="animate"
                style={{ y: backgroundBoxY }} // Apply parallax here
                sx={{
                    position: 'absolute',
                    top: '-10%', // Start higher
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller to cover parallax movement
                    zIndex: 0,
                    willChange: 'transform' // Optimize rendering
                }}
            />

            {/* AI Floating Particles Effect */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
                {particles.map((particle) => (
                    <Box
                        key={particle.id}
                        component={motion.div}
                        animate={{
                            y: [0, -30, 0], // Float up and down
                            x: [0, 20, 0],  // Drift sideways
                            opacity: [0.3, 0.8, 0.3], // Pulse opacity
                            scale: [1, 1.2, 1] // Pulse size
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        sx={{
                            position: 'absolute',
                            top: particle.top,
                            left: particle.left,
                            width: particle.size,
                            height: particle.size,
                            borderRadius: '50%',
                            backgroundColor: (theme) => theme.palette.secondary.light,
                            boxShadow: '0 0 10px 2px rgba(167, 139, 250, 0.4)' // Glowing effect
                        }}
                    />
                ))}
            </Box>

            <Container
                maxWidth="lg"
                sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Box component={motion.div} variants={itemVariants}>
                    <Typography
                        variant="h1"
                        sx={{
                            mb: 3,
                            fontSize: { xs: '3rem', md: '5rem' },
                            fontWeight: 800,
                            maxWidth: '1100px',
                            mx: 'auto',
                            lineHeight: 1.1,
                            color: 'white'
                        }}
                    >
                        Unified Operational Intelligence for the Modern Enterprise
                    </Typography>
                </Box>

                <Box component={motion.div} variants={itemVariants}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 5,
                            maxWidth: '700px',
                            mx: 'auto',
                            fontSize: '1.25rem',
                            lineHeight: 1.6,
                            color: 'rgba(255, 255, 255, 1)'
                        }}
                    >
                        Achieve complete visibility, robust security, and actionable insights. Transform your data into your most valuable asset with our integrated observability and cybersecurity platform.
                    </Typography>
                </Box>

                <Box component={motion.div} variants={itemVariants}>
                    <Button
                        component={Link}
                        to="/services"
                        variant="contained"
                        size="large"
                        sx={{
                            px: 6,
                            py: 2,
                            fontSize: '1.1rem',
                            borderRadius: '50px',
                            background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255,255,255,0.1) inset',
                            transition: 'background 0.3s ease, box-shadow 0.3s ease', // Keep non-transform transitions
                            '&:hover': {
                                background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.2) inset'
                            }
                        }}
                    >
                        Explore Our Services &nbsp; <Box component="span" sx={{ fontSize: '1.2em' }}>&rsaquo;</Box>
                    </Button>
                </Box>

                {/* Partner Logos Strip Placeholder */}
                <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center', gap: 6, opacity: 0.7, filter: 'grayscale(100%) invert(0)' }}>
                    {/* Placeholder content if needed */}
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
