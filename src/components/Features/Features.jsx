import { Container, Grid, Paper, Box, Typography } from '@mui/material';
import { Visibility, GppGood, Storage } from '@mui/icons-material';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Visibility fontSize="large" color="secondary" />,
            title: 'Observability',
            desc: 'Gain deep, kernel-level visibility across your entire stack. Monitor metrics, logs, and traces in real-time.'
        },
        {
            icon: <GppGood fontSize="large" color="secondary" />,
            title: 'Cybersecurity',
            desc: 'Proactive threat detection and SOC excellence. Secure your infrastructure with correlation rules and data lakes.'
        },
        {
            icon: <Storage fontSize="large" color="secondary" />,
            title: 'Data Engineering',
            desc: 'Scalable lakehouse architectures. Streamline pipelines and enable semantic search on tiered object storage.'
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
                                }
                            }}
                        >
                            <Box sx={{ mb: 2, p: 2, bgcolor: 'primary.light', width: 'fit-content', borderRadius: 3, opacity: 0.1 }}>
                                {feature.icon}
                            </Box>
                            {/* Hack to show icon color correctly since opacity affects child */}
                            <Box sx={{ mt: -7, mb: 3, ml: 2 }}>{feature.icon}</Box>

                            <Typography variant="h5" fontWeight={700} gutterBottom>
                                {feature.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                                {feature.desc}
                            </Typography>
                            <Typography variant="body2" fontWeight={600} color="primary" sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                View details <Box component="span" sx={{ ml: 0.5 }}>→</Box>
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Features;
