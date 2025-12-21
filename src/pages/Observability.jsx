import { Box, Container, Typography, Grid, Paper, Stack, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Speed, Security, Visibility, TrendingUp, Storage, Memory, AccountTree } from '@mui/icons-material'; // Added generic icons
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Observability = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            {/* Hero Section */}
            <Box sx={{ pt: 20, pb: 15, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="overline" color="secondary" fontWeight={700}>
                                OBSERVABILITY
                            </Typography>
                        </Box>
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="h1" sx={{ mt: 2, mb: 4, fontSize: { xs: '2.5rem', md: '4rem' }, maxWidth: '900px' }}>
                                Full-Stack Observability for Modern, Distributed Systems
                            </Typography>
                        </Box>
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', lineHeight: 1.6 }}>
                                Gain real-time, end-to-end visibility across your infrastructure, applications, and services — from kernel-level metrics to business-impact insights.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Overview Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid
                    container
                    spacing={8}
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <Grid item xs={12} md={6}>
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="h3" fontWeight={700} gutterBottom>
                                Overview
                            </Typography>
                        </Box>
                        <Box component={motion.div} variants={itemVariants}>
                            <Box sx={{ width: 60, height: 6, bgcolor: 'secondary.main', mb: 4, borderRadius: 2 }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="body1" paragraph fontSize="1.1rem">
                                LVVL Observability enables teams to detect, diagnose, and resolve issues faster by unifying metrics, logs, traces, and events into a single operational intelligence layer.
                            </Typography>
                        </Box>
                        <Box component={motion.div} variants={itemVariants}>
                            <Typography variant="body1" fontSize="1.1rem">
                                Whether you run cloud-native microservices, hybrid workloads, or mission-critical enterprise systems, LVVL helps you see everything that matters — in real time.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Key Capabilities */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" fontWeight={700} gutterBottom sx={{ textAlign: 'center', mb: 8 }}>
                        Key Capabilities
                    </Typography>
                    <Grid
                        container
                        spacing={4}
                        component={motion.div}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        {[
                            { title: 'Unified Correlation', desc: 'Unified metrics, logs, and traces correlation', icon: <AccountTree fontSize="large" sx={{ color: '#06b6d4' }} /> },
                            { title: 'High-Volume Ingestion', desc: 'High-volume telemetry ingestion at scale', icon: <Storage fontSize="large" sx={{ color: '#06b6d4' }} /> },
                            { title: 'Real-time Detection', desc: 'Real-time anomaly detection and alerting', icon: <Speed fontSize="large" sx={{ color: '#06b6d4' }} /> },
                            { title: 'SLO Tracking', desc: 'SLO and error budget tracking', icon: <TrendingUp fontSize="large" sx={{ color: '#06b6d4' }} /> },
                            { title: 'Root-Cause Analysis', desc: 'Root-cause analysis with contextual enrichment', icon: <Visibility fontSize="large" sx={{ color: '#06b6d4' }} /> },
                            { title: 'Cost-Aware Pipelines', desc: 'Cost-aware observability pipelines', icon: <Memory fontSize="large" sx={{ color: '#06b6d4' }} /> },
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} component={motion.div} variants={itemVariants}>
                                <Paper
                                    component={motion.div}
                                    whileHover={{ y: -10 }}
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        height: '100%',
                                        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                                        border: '1px solid',
                                        borderColor: 'rgba(226, 232, 240, 0.8)',
                                        borderRadius: 5,
                                        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                        '&:hover': {
                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                            borderColor: '#06b6d4'
                                        }
                                    }}
                                >
                                    <Box
                                        component={motion.div}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        sx={{
                                            mb: 3,
                                            p: 2,
                                            background: 'linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.2) 100%)',
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
                <Grid
                    container
                    spacing={8}
                    component={motion.div}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
                        <Paper elevation={0} sx={{ p: 5, bgcolor: 'grey.50', borderRadius: 4, height: '100%' }}>
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Typical Use Cases
                            </Typography>
                            <List>
                                {[
                                    'Proactively detect service degradation before customers are impacted',
                                    'Reduce MTTR across distributed applications',
                                    'Monitor cloud, on-prem, and hybrid environments',
                                    'Eliminate blind spots in complex microservices architectures'
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
                    <Grid item xs={12} md={6} component={motion.div} variants={itemVariants}>
                        <Paper elevation={0} sx={{ p: 5, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 4, height: '100%' }}>
                            <Typography variant="h4" fontWeight={700} gutterBottom color="inherit">
                                Business Outcomes
                            </Typography>
                            <List>
                                {[
                                    'Faster incident resolution',
                                    'Improved system reliability',
                                    'Lower observability costs',
                                    'Higher engineering productivity'
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
                        {['Splunk', 'OpenTelemetry', 'AWS CloudWatch', 'Kubernetes & Prometheus', 'Elastic / OpenSearch'].map((item) => (
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
                        See Your Infrastructure in Real Time
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 4, px: 6, py: 2, fontSize: '1.2rem' }}
                    >
                        Request an Observability Demo
                    </Button>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default Observability;
