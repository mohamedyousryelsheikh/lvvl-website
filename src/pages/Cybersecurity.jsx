import { Box, Container, Typography, Grid, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Security, VerifiedUser, Policy, Storage, Cloud, Memory } from '@mui/icons-material'; // Icons relevant to Cybersecurity
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Cybersecurity = () => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Hero Section */}
            <Box sx={{ pt: 20, pb: 15, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="overline" color="secondary" fontWeight={700}>
                        CYBERSECURITY
                    </Typography>
                    <Typography variant="h1" sx={{ mt: 2, mb: 4, fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: '900px' }}>
                        Proactive Cybersecurity Built on Real-Time Intelligence
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6 }}>
                        Detect threats faster, respond smarter, and secure your infrastructure using correlated, data-driven security insights.
                    </Typography>
                </Container>
            </Box>

            {/* Overview Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Overview
                        </Typography>
                        <Box sx={{ width: 60, height: 6, bgcolor: 'secondary.main', mb: 4, borderRadius: 2 }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" paragraph fontSize="1.1rem">
                            LVVL Cybersecurity transforms raw security telemetry into actionable intelligence by combining real-time detection, behavioral analytics, and centralized visibility.
                        </Typography>
                        <Typography variant="body1" fontSize="1.1rem">
                            We help SOC teams move from reactive alerting to proactive threat detection and response, without overwhelming analysts or inflating costs.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Key Capabilities */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight={700} gutterBottom sx={{ textAlign: 'center', mb: 8 }}>
                        Key Capabilities
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: 'Security Event Correlation', desc: 'Centralized security event ingestion and correlation', icon: <Security fontSize="large" sx={{ color: '#a855f7' }} /> },
                            { title: 'Real-time Detection', desc: 'Real-time threat detection and alerting', icon: <VerifiedUser fontSize="large" sx={{ color: '#a855f7' }} /> },
                            { title: 'SOC Dashboards', desc: 'SOC-ready dashboards and workflows', icon: <Policy fontSize="large" sx={{ color: '#a855f7' }} /> },
                            { title: 'Log Normalization', desc: 'Log normalization and enrichment', icon: <Storage fontSize="large" sx={{ color: '#a855f7' }} /> },
                            { title: 'Zero Trust Foundation', desc: 'Zero Trust–aligned observability foundations', icon: <Cloud fontSize="large" sx={{ color: '#a855f7' }} /> },
                            { title: 'Long-term Retention', desc: 'Long-term security data retention via data lakes', icon: <Memory fontSize="large" sx={{ color: '#a855f7' }} /> },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
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
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                            borderColor: '#a855f7'
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        mb: 3,
                                        p: 2,
                                        background: 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(168,85,247,0.2) 100%)',
                                        width: 64,
                                        height: 64,
                                        borderRadius: 3,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#0f172a' }}>{item.title}</Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Typical Use Cases & Business Outcomes */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 5, bgcolor: 'grey.50', borderRadius: 4, height: '100%' }}>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Typical Use Cases
                            </Typography>
                            <List>
                                {[
                                    'SOC modernization and visibility enhancement',
                                    'Threat hunting across logs and telemetry',
                                    'Compliance and audit readiness',
                                    'Insider threat and anomaly detection',
                                    'Security data cost optimization'
                                ].map((item, index) => (
                                    <ListItem key={index} disableGutters alignItems="flex-start">
                                        <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                                            <CheckCircle color="secondary" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 500 }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={0} sx={{ p: 5, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 4, height: '100%' }}>
                            <Typography variant="h4" fontWeight={700} gutterBottom color="inherit">
                                Business Outcomes
                            </Typography>
                            <List>
                                {[
                                    'Faster threat detection and response',
                                    'Reduced alert fatigue',
                                    'Improved security posture',
                                    'Scalable, cost-efficient security analytics'
                                ].map((item, index) => (
                                    <ListItem key={index} disableGutters>
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <CheckCircle sx={{ color: 'secondary.main' }} fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} primaryTypographyProps={{ fontWeight: 600 }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Supported Integrations */}
            <Box sx={{ py: 10, bgcolor: 'background.paper', textAlign: 'center' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 6 }}>
                        Supported Integrations
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {['Splunk Enterprise Security', 'SIEM / SOAR platforms', 'Endpoint & Network Security', 'Cloud Security (AWS, Azure)', 'Data Lakes (S3, Object Storage)'].map((item) => (
                            <Grid item xs={6} md={2} key={item}>
                                <Typography variant="h6" fontWeight={600} color="text.secondary">
                                    {item}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 12 }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" fontWeight={800} gutterBottom>
                        Strengthen Your Security Operations
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 4, px: 6, py: 2, fontSize: '1.2rem' }}
                    >
                        Talk to a Security Expert
                    </Button>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default Cybersecurity;
