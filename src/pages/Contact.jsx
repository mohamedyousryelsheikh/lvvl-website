import { Box, Container, Grid, Typography, TextField, Button, Stack, Paper } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Contact = () => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <Box component="main" sx={{ flexGrow: 1, pt: 15, pb: 10 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="secondary.main" fontWeight={700}>
                            CONTACT US
                        </Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom>
                            Get in Touch
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
                            Ready to transform your operations? Our team is here to help you build a more resilient and efficient future.
                        </Typography>
                    </Box>

                    <Grid container spacing={8}>
                        {/* Contact Info */}
                        <Grid item xs={12} md={5}>
                            <Stack spacing={4}>
                                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                                    <Stack direction="row" spacing={3} alignItems="flex-start">
                                        <Box sx={{ p: 1.5, bgcolor: 'rgba(130, 0, 255, 0.1)', borderRadius: 2, color: 'secondary.main', display: 'flex' }}>
                                            <Email />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" fontWeight={700} gutterBottom>Chat to us</Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>Our friendly team is here to help.</Typography>
                                            <Typography variant="body1" fontWeight={600} component="a" href="mailto:hello@LVVL.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                                hello@LVVL.com
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>

                                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                                    <Stack direction="row" spacing={3} alignItems="flex-start">
                                        <Box sx={{ p: 1.5, bgcolor: 'rgba(130, 0, 255, 0.1)', borderRadius: 2, color: 'secondary.main', display: 'flex' }}>
                                            <LocationOn />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" fontWeight={700} gutterBottom>Visit us</Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>Come say hello at our office HQ.</Typography>
                                            <Typography variant="body1" fontWeight={600}>
                                                100 Smith Street<br />
                                                Collingwood VIC 3066 AU
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>

                                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                                    <Stack direction="row" spacing={3} alignItems="flex-start">
                                        <Box sx={{ p: 1.5, bgcolor: 'rgba(130, 0, 255, 0.1)', borderRadius: 2, color: 'secondary.main', display: 'flex' }}>
                                            <Phone />
                                        </Box>
                                        <Box>
                                            <Typography variant="h6" fontWeight={700} gutterBottom>Call us</Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>Mon-Fri from 8am to 5pm.</Typography>
                                            <Typography variant="body1" fontWeight={600} component="a" href="tel:+15550000000" sx={{ textDecoration: 'none', color: 'inherit' }}>
                                                +1 (555) 000-0000
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Stack>
                        </Grid>

                        {/* Contact Form */}
                        <Grid item xs={12} md={7}>
                            <Paper elevation={0} sx={{ p: 6, borderRadius: 4, border: '1px solid', borderColor: 'divider', height: '100%' }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="subtitle2" fontWeight={700} gutterBottom>First name</Typography>
                                        <TextField fullWidth placeholder="First name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="subtitle2" fontWeight={700} gutterBottom>Last name</Typography>
                                        <TextField fullWidth placeholder="Last name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" fontWeight={700} gutterBottom>Email</Typography>
                                        <TextField fullWidth placeholder="you@company.com" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" fontWeight={700} gutterBottom>Phone number</Typography>
                                        <TextField fullWidth placeholder="+1 (555) 000-0000" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle2" fontWeight={700} gutterBottom>Message</Typography>
                                        <TextField fullWidth multiline rows={4} placeholder="Tell us how we can help..." variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" size="large" fullWidth endIcon={<Send />}>
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                {/* Map Section */}
                <Box sx={{ mt: 10 }}>
                    <Container maxWidth="lg">
                        <Paper
                            elevation={0}
                            sx={{
                                width: '100%',
                                height: 450,
                                borderRadius: 4,
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'divider'
                            }}
                        >
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.053154131577!2d144.98144677684692!3d-37.80093843389028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642eb941913b3%3A0x629c4ba54955776d!2s100%20Smith%20St%2C%20Collingwood%20VIC%203066%2C%20Australia!5e0!3m2!1sen!2sus!4v1704620000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </Paper>
                    </Container>
                </Box>
            </Box>

            <Footer />
        </Box>
    );
};

export default Contact;
