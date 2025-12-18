import { Box, Container, Grid, Typography, Stack, IconButton } from '@mui/material';
import { Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../../assets/lvvl_logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <Box component="footer" className="footer-section">
            <Container maxWidth="lg">
                {/* Pre-footer CTA */}
                <Box sx={{
                    borderRadius: 6,
                    overflow: 'hidden',
                    position: 'relative',
                    mb: 10,
                    py: 8,
                    px: 6,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    {/* Overlay */}
                    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.6)' }} />

                    <Box sx={{ position: 'relative', zIndex: 2, color: 'white', maxWidth: '600px' }}>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Build without boundaries
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                            We innovate immediately and facilitate your products design directly to the market.
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={4} sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 6 }}>
                    <Grid item xs={12} md={4}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                            <Box
                                component="img"
                                src={logo}
                                alt="MissionLift Logo"
                                sx={{ height: 60, width: 'auto', filter: 'brightness(0) invert(1)' }} // White logo for footer
                            />
                        </Stack>
                        <Typography variant="body2" color="rgba(255,255,255,0.6)">
                            Build with us.
                        </Typography>
                    </Grid>

                    {[
                        { title: 'Menu', links: ['Home', 'Pages', 'Services', 'Portfolio', 'Blog'] },
                        { title: 'Information', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
                        { title: 'Resources', links: ['Help Center', 'Partners', 'Community', 'Status'] },
                        { title: 'Social', links: ['Twitter', 'Instagram', 'LinkedIn', 'Facebook'] }
                    ].map((column, index) => (
                        <Grid item xs={6} md={2} key={index}>
                            <Typography variant="subtitle2" color="white" fontWeight={700} sx={{ mb: 2 }}>
                                {column.title}
                            </Typography>
                            <Stack spacing={1}>
                                {column.links.map((link) => (
                                    <Typography key={link} variant="body2" color="rgba(255,255,255,0.6)" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>
                                        {link}
                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ pt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Typography variant="caption" color="rgba(255,255,255,0.4)">
                        MissionLift © {new Date().getFullYear()}
                    </Typography>
                    <Typography variant="caption" color="rgba(255,255,255,0.4)">
                        Made with love.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
