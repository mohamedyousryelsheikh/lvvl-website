import { Container, Grid, Typography, Box, Paper, Stack } from '@mui/material';
import { Visibility, SupportAgent, Bolt } from '@mui/icons-material';

const Collaboration = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Seamless Integration with Your Ecosystem
                    </Typography>
                    <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
                        We integrate deeply with your existing infrastructure to ensure 100% data fidelity and compliant operations.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                        {[
                            { value: '100%', label: 'Visibility', icon: <Visibility /> },
                            { value: '24/7', label: 'SOC Support', icon: <SupportAgent /> },
                            { value: '<1 sec', label: 'Response Time', icon: <Bolt /> }
                        ].map((stat, index) => (
                            <Paper
                                key={index}
                                elevation={0}
                                sx={{
                                    p: 2.5,
                                    borderRadius: 4,
                                    flex: 1,
                                    minWidth: { sm: 140 },
                                    bgcolor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'grey.100',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Box sx={{ position: 'absolute', top: 12, right: 12, color: 'grey.300', opacity: 0.8 }}>
                                    {stat.icon}
                                </Box>
                                <Typography variant="h4" fontWeight={800} sx={{ color: '#a855f7', mb: 0.5 }}>
                                    {stat.value}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ fontSize: '0.85rem' }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                    <Typography
                        variant="body2"
                        component="a"
                        href="/integrations"
                        sx={{
                            mt: 4,
                            display: 'inline-flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            fontWeight: 700,
                            color: '#3b82f6',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        See Integrations <Box component="span" sx={{ ml: 0.5 }}>&rarr;</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Placeholder for the team meeting image */}
                    <Paper
                        elevation={0}
                        sx={{
                            height: 400,
                            bgcolor: 'grey.200',
                            borderRadius: 4,
                            overflow: 'hidden'
                            // In production, use background-image here
                        }}
                    >
                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Collaboration;
