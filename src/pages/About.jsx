import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import { motion } from 'framer-motion';

const About = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeLeftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeRightVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Navbar />

            <Box component="main">
                {/* Header Section */}
                <Box sx={{ pt: 15, pb: 10, bgcolor: 'background.paper', textAlign: 'center' }}>
                    <Container maxWidth="md">
                        <Box
                            component={motion.div}
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <Box component={motion.div} variants={itemVariants}>
                                <Typography variant="h2" fontWeight={700} gutterBottom>
                                    About LVVL
                                </Typography>
                            </Box>
                            <Box component={motion.div} variants={itemVariants}>
                                <Typography variant="h5" color="text.secondary">
                                    We are dedicated to empowering innovators and businesses to reach their full potential through cutting-edge technology and strategic guidance.
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {/* Story Section */}
                <Container maxWidth="lg" sx={{ py: 10 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid
                            item xs={12} md={6}
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeLeftVariants}
                        >
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: 3 }}
                            />
                        </Grid>
                        <Grid
                            item xs={12} md={6}
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeRightVariants}
                        >
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Our Story
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Founded in 2024, LVVL began with a simple idea: that technology should be a catalyst for growth, not a barrier. We saw too many great ideas get stuck in development hell or fail to scale due to poor infrastructure.
                            </Typography>
                            <Typography paragraph color="text.secondary">
                                Today, we help hundreds of companies worldwide streamline their operations, connect with their communities, and build products that matter.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>

                {/* Team Section */}
                <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <Typography variant="h3" fontWeight={700} textAlign="center" gutterBottom sx={{ mb: 6 }}>
                            Meet the Team
                        </Typography>
                        <Grid
                            container
                            spacing={4}
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={containerVariants}
                        >
                            {[1, 2, 3, 4, 5, 6, 7].map((member) => (
                                <Grid item xs={12} sm={6} md={3} key={member} component={motion.div} variants={itemVariants}>
                                    <Paper
                                        elevation={0}
                                        sx={{ p: 3, textAlign: 'center', bgcolor: 'transparent' }}
                                        component={motion.div}
                                        whileHover={{ y: -10 }}
                                    >
                                        <Avatar
                                            src={`https://i.pravatar.cc/300?u=${member + 10}`}
                                            sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
                                        />
                                        <Typography variant="h6" fontWeight={700}>Team Member</Typography>
                                        <Typography variant="body2" color="text.secondary">Position</Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default About;
