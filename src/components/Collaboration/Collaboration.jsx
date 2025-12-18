import { Container, Grid, Typography, Box, Paper, Stack } from '@mui/material';

const Collaboration = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} md={5}>
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Seamless Integration with Your Ecosystem
                    </Typography>
                    <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
                        We integrate deeply with your existing infrastructure to ensure 100% data fidelity and compliant operations.
                    </Typography>

                    <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
                        <Box>
                            <Typography variant="h4" fontWeight={800}>100%</Typography>
                            <Typography variant="caption" color="text.secondary">Visibility</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" fontWeight={800}>24/7</Typography>
                            <Typography variant="caption" color="text.secondary">SOC Support</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" fontWeight={800}>&lt;1 sec</Typography>
                            <Typography variant="caption" color="text.secondary">Query Speed</Typography>
                        </Box>
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 4, textDecoration: 'underline', cursor: 'pointer', fontWeight: 600 }}>
                        See integration docs <Box component="span">→</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={7}>
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
