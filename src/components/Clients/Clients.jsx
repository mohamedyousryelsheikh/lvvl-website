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
        // Duplicating for demo purposes to fill the grid as per design feel, 
        // but realistically we only have 4 unique ones. 
        // I will display just the 4 centered for now to be authentic.
    ];

    return (
        <Box sx={{ py: 15, bgcolor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
            {/* Dotted Pattern Background - Top Left */}
            <Box sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: 200,
                height: 200,
                backgroundImage: 'radial-gradient(#e2e8f0 2px, transparent 2px)',
                backgroundSize: '20px 20px',
                opacity: 0.6,
                zIndex: 0
            }} />

            {/* Dotted Pattern Background - Bottom Right */}
            <Box sx={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                width: 200,
                height: 200,
                backgroundImage: 'radial-gradient(#e2e8f0 2px, transparent 2px)',
                backgroundSize: '20px 20px',
                opacity: 0.6,
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: '#8200ff', // Teal/Greenish color from design
                            fontWeight: 800,
                            letterSpacing: 2,
                            fontSize: '0.8rem'
                        }}
                    >
                        CLIENTS / PARTNERS
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight={800}
                        sx={{
                            mt: 2,
                            mb: 2,
                            background: 'linear-gradient(to right, #1e293b, #334155)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Trusted by Security Leaders Worldwide
                    </Typography>
                </Box>

                <Grid container spacing={3} justifyContent="center">
                    {clients.map((client, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    height: 120,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid',
                                    borderColor: 'grey.200',
                                    borderRadius: 4,
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                                        borderColor: 'transparent'
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
                                        filter: 'grayscale(100%)', // Optional: Start grayscale like modern SaaS sites
                                        opacity: 0.7,
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
