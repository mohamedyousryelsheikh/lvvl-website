import { Container, Grid, Paper, Box, Typography, Button } from '@mui/material';
import { Visibility, GppGood, Storage } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Assuming Link is from react-router-dom for 'to' prop
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Visibility fontSize="large" color="secondary" />,
            title: 'Observability',
            desc: 'Gain deep, kernel-level visibility across your entire stack. Monitor metrics, logs, and traces in real-time.',
            link: '/observability'
        },
        {
            icon: <GppGood fontSize="large" color="secondary" />,
            title: 'Cybersecurity',
            desc: 'Proactive threat detection and SOC excellence. Secure your infrastructure with correlation rules and data lakes.',
            link: '/cybersecurity'
        },
        {
            icon: <Storage fontSize="large" color="secondary" />,
            title: 'Data Engineering',
            desc: 'Scalable lakehouse architectures. Streamline pipelines and enable semantic search on tiered object storage.',
            link: '/data-engineering'
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" fontWeight={700} gutterBottom>
                    End-to-End Intelligence <br /> for Your Infrastructure
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
                                border: '1px solid',
                                borderColor: 'divider',
                                borderRadius: 4,
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: 4,
                                    borderColor: 'primary.main'
                                },
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Box sx={{ mb: 2, p: 2, bgcolor: 'rgba(130, 0, 255, 0.1)', width: 'fit-content', borderRadius: 3 }}>
                                {feature.icon}
                            </Box>
                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                                {feature.desc}
                            </Typography>
                            {feature.link && (
                                <Box sx={{ mt: 2 }}>
                                    <Button
                                        component={Link}
                                        to={feature.link}
                                        color="secondary"
                                        sx={{
                                            fontWeight: 700,
                                            p: 0,
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                                '& .MuiButton-startIcon': { textDecoration: 'none' }, // Just in case
                                                '& .view-details-text': { textDecoration: 'underline' }
                                            }
                                        }}
                                        endIcon={<span>→</span>}
                                    >
                                        <span className="view-details-text">View Details</span>
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
