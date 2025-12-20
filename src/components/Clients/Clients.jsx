import { Container, Grid, Typography, Box, Paper } from '@mui/material';
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

    return (
        <Box sx={{ py: 15, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
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

                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    {clients.map((client, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: 100,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    bgcolor: '#F8FAFC', // Very light gray from image
                                    borderRadius: 3,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: '#F1F5F9',
                                        transform: 'translateY(-3px)'
                                    }
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

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Box
                        component="a"
                        href="/customers"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            px: 4,
                            py: 1.5,
                            borderRadius: '50px',
                            border: '1px solid #E2E8F0',
                            color: '#06b6d4', // Cyan text
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.3s',
                            '&:hover': {
                                bgcolor: 'rgba(6, 182, 212, 0.05)',
                                borderColor: '#06b6d4'
                            }
                        }}
                    >
                        View Case Studies <Box component="span" sx={{ ml: 1 }}>&rarr;</Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Clients;
