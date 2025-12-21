import { Container, Grid, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import almaraiLogo from '../../assets/clientsLogos/almarai_Logo.png';
import almoayyedLogo from '../../assets/clientsLogos/almoayyed_logo.jpeg';
import eLogo from '../../assets/clientsLogos/e&Logo.png';
import qiibLogo from '../../assets/clientsLogos/qiiblogo.jpg';

const Clients = () => {
    const clients = [
        { name: 'Almarai', logo: almaraiLogo },
        { name: 'QIIB', logo: qiibLogo },
        { name: 'Almoayyed', logo: almoayyedLogo },
        { name: 'e&', logo: eLogo },
    ];

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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 20
            }
        }
    };

    return (
        <Box sx={{ py: 15, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: 'center', mb: 8 }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#a855f7', // Purple
                            fontWeight: 700,
                            letterSpacing: 2,
                            fontSize: '0.9rem',
                            display: 'block',
                            mb: 1
                        }}
                    >
                        CUSTOMER - TESTIMONIALS
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight={800}
                        sx={{
                            color: '#0f172a',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Trusted by Security Leaders Worldwide
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center"
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {clients.map((client, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index} component={motion.div} variants={cardVariants}>
                            <Paper
                                elevation={0}
                                component={motion.div}
                                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                sx={{
                                    p: 3,
                                    height: 100,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: '#F8FAFC', // Very light gray from image
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease', // Fallback transition
                                    cursor: 'pointer'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={client.logo}
                                    alt={client.name}
                                    sx={{
                                        maxHeight: '100%',
                                        maxWidth: '80%',
                                        objectFit: 'contain',
                                        filter: 'grayscale(100%)',
                                        opacity: 0.6,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            filter: 'none',
                                            opacity: 1
                                        }
                                    }}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Clients;
