import { Box, Container, Typography, Grid, Paper, Button, Stack } from '@mui/material';
import {
    Storage, Hub, Insights, AutoGraph, Security, VerifiedUser,
    Visibility, Dns, CompareArrows, GppGood, Water, Psychology, Search, TableChart
} from '@mui/icons-material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Partners from '../components/Partners/Partners';

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Navbar />

            <Box component="main">
                {/* Hero / Header Section */}
                <Box sx={{ pt: 15, pb: 10, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
                    <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <Typography variant="overline" display="block" color="secondary.main" fontWeight={700} gutterBottom>
                            OUR SERVICES
                        </Typography>
                        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ mb: 3 }}>
                            Operational Intelligence
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4, lineHeight: 1.6 }}>
                            Aggregate observability and security telemetry across your infrastructure. Powered by AI/ML to detect anomalies, threats, and performance issues in real time.
                        </Typography>
                        <Button variant="contained" size="large">
                            Get a Constultation
                        </Button>
                    </Container>

                    {/* Background decoration */}
                    <Box sx={{
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(255,255,255,0) 70%)',
                        zIndex: 0
                    }} />
                </Box>

                {/* Framework Section */}
                <Container maxWidth="lg" sx={{ py: 12 }}>
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Unified Telemetry & Analytics Framework
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                            Break down data silos across your entire infrastructure. Gain comprehensive, real-time visibility through unified end-to-end telemetry collection.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {[
                            {
                                title: 'Flexible Data Collection',
                                desc: 'Ingest logs, metrics, traces, and security events from any source, agent-based or agentless. Easily swap or extend components as your needs evolve.',
                                icon: <Storage fontSize="large" color="secondary" />
                            },
                            {
                                title: 'Smart Data Pipelines',
                                desc: 'Design & deploy high-throughput pipelines that ingest, normalize, and route data from any source into your analytics backbone. Scalable and resilient.',
                                icon: <AutoGraph fontSize="large" color="secondary" />
                            },
                            {
                                title: 'Actionable Insights & Alerts',
                                desc: 'Deliver real-time dashboards and adaptive alerts powered by AI/ML anomaly detection, giving teams predictive context to resolve issues fast.',
                                icon: <Insights fontSize="large" color="secondary" />
                            }
                        ].map((item, index) => (
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
                                    <Box sx={{ mb: 2, p: 2, bgcolor: 'secondary.main', width: 'fit-content', borderRadius: 3, bgOpacity: 0.1, opacity: 0.1 }}>
                                        {item.icon}
                                    </Box>
                                    {/* Hack to show icon color correctly since opacity affects child */}
                                    <Box sx={{ mt: -7, mb: 3, ml: 2 }}>{item.icon}</Box>

                                    <Typography variant="h5" fontWeight={700} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        {item.desc}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Partner Section */}
                <Box sx={{ py: 12, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={6} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: 400,
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: 3
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 20,
                                            right: 20,
                                            bgcolor: 'white',
                                            p: 2,
                                            borderRadius: 2,
                                            boxShadow: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1
                                        }}
                                    >
                                        <VerifiedUser color="primary" />
                                        <Typography fontWeight={700}>Certified Partner</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="overline" color="secondary.main" fontWeight={700}>
                                    PARTNERSHIP
                                </Typography>
                                <Typography variant="h3" fontWeight={700} gutterBottom>
                                    Certified Splunk Partner
                                </Typography>
                                <Typography variant="body1" paragraph color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                                    As a Certified Splunk Partner, we harness Splunk’s “Data-to-Everything” platform to deliver unified observability and security analytics.
                                </Typography>
                                <Stack spacing={2}>
                                    {['Real-time threat detection', 'Operational intelligence', 'Compliance assurance', 'Optimized performance at scale'].map((item) => (
                                        <Stack direction="row" alignItems="center" spacing={2} key={item}>
                                            <Security color="secondary" fontSize="small" />
                                            <Typography variant="body1" fontWeight={500}>{item}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>


                {/* Cybersecurity Operations Section */}
                <Box sx={{ py: 12, bgcolor: 'background.paper' }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={8} alignItems="center">
                            {/* Left Side: 4 Light Cards Grid */}
                            <Grid item xs={12} md={7}>
                                <Grid container spacing={3}>
                                    {[
                                        {
                                            title: 'SIEM Setup',
                                            desc: 'Design and configuration of SIEM platforms for advanced threat detection',
                                            icon: <Dns fontSize="large" color="secondary" />
                                        },
                                        {
                                            title: 'Correlation Rules',
                                            desc: 'Development of correlation rules aligned to behavior-based attack frameworks',
                                            icon: <CompareArrows fontSize="large" color="secondary" />
                                        },
                                        {
                                            title: 'SOC Excellence',
                                            desc: 'Consultative security services: aligning tech, people, and processes for resilient security operations.',
                                            icon: <GppGood fontSize="large" color="secondary" />
                                        },
                                        {
                                            title: 'Security Data Lake',
                                            desc: 'Security lake architecture with compliance-focused retention and auditability',
                                            icon: <Water fontSize="large" color="secondary" />
                                        }
                                    ].map((item, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
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
                                                <Box sx={{ mb: 2, p: 2, bgcolor: 'secondary.main', width: 'fit-content', borderRadius: 3, opacity: 0.1 }}>
                                                    {item.icon}
                                                </Box>
                                                <Box sx={{ mt: -7, mb: 3, ml: 2 }}>{item.icon}</Box>

                                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                    {item.desc}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* Right Side: Text Content */}
                            <Grid item xs={12} md={5}>
                                <Typography variant="overline" color="secondary.main" fontWeight={700} display="block" gutterBottom>
                                    CYBERSECURITY
                                </Typography>
                                <Typography variant="h3" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                                    Cybersecurity Operations
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                                    Our Cybersecurity practice delivers end-to-end security solutions—from SIEM implementation and security data lake architecture to custom correlation rule development and comprehensive security services.
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                    Leveraging the MITRE ATT&CK framework, we assess your SOC maturity, design tailored roadmaps, deploy and tune detection platforms, centralize and enrich security data, and deliver hands-on education and training. The result is proactive threat detection, streamlined compliance, and resilient security operations.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Data Engineering Section */}
                <Container maxWidth="lg" sx={{ py: 12 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="overline" color="secondary.main" fontWeight={700}>
                            DATA ENGINEERING
                        </Typography>
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Lakehouse Architecture
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
                            Streamlined pipelines for structured and semi-structured data. Balancing performance and cost with tiered object storage strategies.
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {[
                            { title: 'AI-Driven RCA', desc: 'Workflows for root cause analysis, anomaly detection, and alert prioritization.', icon: <Psychology fontSize="large" color="secondary" /> },
                            { title: 'Semantic Search', desc: 'Embedding machine-generated data for semantic search and historical investigation.', icon: <Search fontSize="large" color="secondary" /> },
                            { title: 'Lakehouse Models', desc: 'Enabling SQL-based exploration and reporting on tiered object storage.', icon: <TableChart fontSize="large" color="secondary" /> },
                        ].map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'grey.50', borderRadius: 4, textAlign: 'center' }}>
                                    <Box sx={{ mb: 2, display: 'inline-flex', p: 2, borderRadius: '50%', bgcolor: 'white' }}>
                                        {item.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight={700} gutterBottom>{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Partners Grid */}
                <Box sx={{ py: 6, borderTop: '1px solid', borderColor: 'divider' }}>
                    <Container maxWidth="lg">
                        <Typography variant="overline" display="block" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
                            OUR PARTNERS
                        </Typography>
                        <Partners />
                    </Container>
                </Box>

            </Box>

            <Footer />
        </Box >
    );
};

export default Services;
