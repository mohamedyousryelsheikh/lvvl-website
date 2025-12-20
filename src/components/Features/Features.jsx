import { Container, Grid, Paper, Box, Typography, Button } from '@mui/material';
import { Visibility, GppGood, Storage } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Assuming Link is from react-router-dom for 'to' prop
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Visibility fontSize="large" sx={{ color: '#06b6d4' }} />, // Cyan
            bg: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.2) 100%)',
            title: 'Observability',
            desc: 'Gain deep, threat-level visibility across your entire stack. Monitor metrics, logs, traces in real time.', // Updated text from image slightly
            link: '/observability',
            btnColor: '#06b6d4'
        },
        {
            icon: <GppGood fontSize="large" sx={{ color: '#a855f7' }} />, // Purple
            bg: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.2) 100%)',
            title: 'Cybersecurity',
            desc: 'Proactive threat detection and SOC excellence. Secure your infrastructure with correlation rules and data lakes.',
            link: '/cybersecurity',
            btnColor: '#a855f7'
        },
        {
            icon: <Storage fontSize="large" sx={{ color: '#3b82f6' }} />, // Blue
            bg: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.2) 100%)',
            title: 'Data Engineering',
            desc: 'Scalable lakehouse architectures. Streamline pipelines and enable semantic search on tiered object storage.',
            link: '/data-engineering',
            btnColor: '#3b82f6'
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 15 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" fontWeight={800} gutterBottom sx={{ color: '#0f172a' }}>
                    Seamless Integration <br /> for Your Infrastructure
                </Typography>
            </Box>
            <Grid container spacing={4}>
                {features.map((feature, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 4,
                                height: '100%',
                                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                                border: '1px solid',
                                borderColor: 'rgba(226, 232, 240, 0.8)',
                                borderRadius: 5,
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    borderColor: feature.btnColor
                                },
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Box sx={{
                                mb: 3,
                                p: 2,
                                background: feature.bg,
                                width: 64,
                                height: 64,
                                borderRadius: 3,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </Box>
                            <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#0f172a' }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ flexGrow: 1, lineHeight: 1.7 }}>
                                {feature.desc}
                            </Typography>
                            {feature.link && (
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        component={Link}
                                        to={feature.link}
                                        sx={{
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            color: '#0f172a', // Dark text
                                            p: 0,
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                                color: feature.btnColor // Color on hover
                                            }
                                        }}
                                    >
                                        View details <Box component="span" sx={{ ml: 1, color: feature.btnColor, fontSize: '1.2em' }}>→</Box>
                                    </Button>
                                </Box>
                            )}
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Features;
