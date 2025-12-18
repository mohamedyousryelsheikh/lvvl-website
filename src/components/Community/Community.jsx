import { Container, Grid, Typography, Button, Box, Avatar } from '@mui/material';

const Community = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={5}>
                    <Typography variant="overline" display="block" color="text.secondary" gutterBottom>
                        OUR NETWORK
                    </Typography>
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Trusted by Security <br /> Leaders Worldwide
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                        Join hundreds of enterprises who rely on our platform for mission-critical observability and defense.
                    </Typography>

                    <Box sx={{ my: 4 }}>
                        <Typography variant="h5" fontWeight={700}>500+ <Box component="span" sx={{ fontSize: '1rem', fontWeight: 400, color: 'text.secondary' }}>TB Data Managed</Box></Typography>
                        <Typography variant="h5" fontWeight={700}>Zero <Box component="span" sx={{ fontSize: '1rem', fontWeight: 400, color: 'text.secondary' }}>Breaches Missed</Box></Typography>
                    </Box>

                    <Button variant="contained" size="large">
                        Join the Network
                    </Button>
                </Grid>
                <Grid item xs={12} md={7}>
                    {/* Abstract Node/Network Visualization Placeholder */}
                    <Box sx={{ position: 'relative', height: 400, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ position: 'absolute', width: 300, height: 300, border: '1px dashed #e2e8f0', borderRadius: '50%' }} />
                        <Box sx={{ position: 'absolute', width: 450, height: 450, border: '1px dashed #e2e8f0', borderRadius: '50%' }} />

                        {/* Center Image */}
                        <Avatar
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            sx={{ width: 100, height: 100, zIndex: 2, border: '4px solid white', boxShadow: 3 }}
                        />

                        {/* Orbital Avatars */}
                        <Avatar src="https://i.pravatar.cc/150?u=1" sx={{ position: 'absolute', top: '15%', right: '20%', border: '2px solid white' }} />
                        <Avatar src="https://i.pravatar.cc/150?u=2" sx={{ position: 'absolute', bottom: '20%', left: '15%', border: '2px solid white' }} />
                        <Avatar src="https://i.pravatar.cc/150?u=3" sx={{ position: 'absolute', top: '50%', right: '5%', border: '2px solid white' }} />
                        <Avatar src="https://i.pravatar.cc/150?u=4" sx={{ position: 'absolute', top: '10%', left: '30%', width: 32, height: 32, border: '2px solid white' }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Community;
