import { useState, useRef } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import InsightsIcon from '@mui/icons-material/Insights';
import HubIcon from '@mui/icons-material/Hub';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// --- Components ---

const FeatureCard = ({ icon: Icon, title, description, delay, color }) => (
    <Paper
        elevation={0}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, type: "spring", stiffness: 50 }}
        whileHover={{
            y: -10,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        sx={{
            p: 4,
            height: '100%',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            border: '1px solid config',
            borderColor: 'rgba(226, 232, 240, 0.8)',
            borderRadius: 5,
            transition: 'border-color 0.3s ease',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
            '&:hover': {
                borderColor: color
            },
            display: 'flex',
            flexDirection: 'column'
        }}
    >
        <Box sx={{
            mb: 3,
            p: 2,
            bgcolor: `${color}1A`, // 10% opacity hex
            width: 64,
            height: 64,
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Icon sx={{ color: color, fontSize: 32 }} />
        </Box>
        <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#0f172a' }}>
            {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ flexGrow: 1, lineHeight: 1.7 }}>
            {description}
        </Typography>
    </Paper>
);

const StickySection = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 0,
            title: "1. Connect Data Sources",
            description: "Seamlessly integrate with splunk, AWS, Azure, and on-premise logs. Our agent automatically maps your topology.",
            visual: (
                <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ position: 'absolute', width: '300px', height: '300px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '50%' }}
                    />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: 2 }}
                    >
                        <HubIcon sx={{ fontSize: 80, color: '#38bdf8' }} />
                    </motion.div>
                    {/* Orbiting Icons */}
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: -360 }} // Counter rotate to keep upright if needed, or just orbit
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '2px',
                                height: '140px',
                                transformOrigin: 'top center',
                                transform: `rotate(${i * 90}deg)`
                            }}
                        >
                            <Box sx={{ position: 'absolute', bottom: 0, left: '-10px', width: 20, height: 20, bgcolor: '#64748b', borderRadius: '50%' }} />
                        </motion.div>
                    ))}
                </Box>
            )
        },
        {
            id: 1,
            title: "2. Define Objectives",
            description: "Tell the agent what to monitor. Set up natural language policies like 'Alert me on any unauthorized admin access'.",
            visual: (
                <Box sx={{ p: 4, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Paper sx={{ p: 3, width: '100%', maxWidth: 400, bgcolor: '#1e293b', color: 'white', borderRadius: 2 }}>
                        <Typography variant="subtitle2" color="grey.500" mb={2}>Policy Configuration</Typography>
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <CheckCircleIcon color="success" />
                            <Typography>Monitor Admin Login</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <CheckCircleIcon color="success" />
                            <Typography>Detect Data Exfiltration</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Box sx={{ width: 24, height: 24, borderRadius: '50%', border: '2px dashed #475569' }} />
                            <Typography color="grey.600">Add custom rule...</Typography>
                        </Box>
                    </Paper>
                </Box>
            )
        },
        {
            id: 2,
            title: "3. Receive Actionable Intel",
            description: "Get real-time insights, not just alerts. The agent connects the dots across your stack to pinpoint root causes.",
            visual: (
                <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Simplified Graph Visual */}
                    <Box sx={{ position: 'relative', width: 300, height: 200 }}>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(0deg, rgba(56, 189, 248, 0.2) 0%, transparent 100%)', transformOrigin: 'bottom' }}
                        />
                        <motion.svg width="100%" height="100%" viewBox="0 0 300 200" style={{ overflow: 'visible' }}>
                            <motion.path
                                d="M0,150 C50,150 50,100 100,100 C150,100 150,180 200,80 C250,-20 300,50 300,50"
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="3"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </motion.svg>
                    </Box>
                </Box>
            )
        }
    ];

    return (
        <Box sx={{ py: 20 }}>
            <Container maxWidth="xl">
                <Grid container spacing={8}>
                    {/* Left Column: Scrollable Text */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ position: 'relative' }}>
                            {steps.map((step, index) => {
                                const ref = useRef(null);
                                const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

                                if (isInView && activeStep !== index) {
                                    setActiveStep(index);
                                }

                                return (
                                    <Box
                                        key={step.id}
                                        ref={ref}
                                        sx={{
                                            minHeight: '80vh',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            opacity: activeStep === index ? 1 : 0.3,
                                            transition: 'opacity 0.5s ease'
                                        }}
                                    >
                                        <Typography variant="h3" fontWeight={700} gutterBottom color="text.primary">
                                            {step.title}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" lineHeight={1.6}>
                                            {step.description}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>

                    {/* Right Column: Sticky Visual */}
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: '20vh',
                                height: '60vh',
                                bgcolor: '#1e293b',
                                borderRadius: 8,
                                border: '1px solid rgba(255,255,255,0.1)',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {steps[activeStep].visual}
                                </motion.div>
                            </AnimatePresence>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// --- Main Page Component ---

const AIAgentProduct = () => {
    return (
        <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', color: '#1e293b', display: 'flex', flexDirection: 'column' }}>
            <Navbar mode="light" />

            {/* Hero Section */}
            <Box sx={{
                pt: 25,
                pb: 20,
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#0f172a', // Keep Hero dark
                color: 'white', // Explicit white text for Hero
                background: 'radial-gradient(circle at 50% -20%, #1e293b 0%, #0f172a 100%)'
            }}>
                <Box sx={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ mb: 3, display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, borderRadius: 20, bgcolor: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.2)' }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }} />
                            <Typography variant="caption" color="#d8b4fe" fontWeight={600} letterSpacing={1}>
                                LIVE PREVIEW
                            </Typography>
                        </Box>

                        <Typography variant="h1" fontWeight={800} sx={{
                            mb: 4,
                            fontSize: { xs: '3rem', md: '5rem' },
                            lineHeight: 1.1,
                            background: 'linear-gradient(180deg, #fff 0%, #94a3b8 100%)',
                            backgroundClip: 'text',
                            textFillColor: 'transparent'
                        }}>
                            The Intelligence Layer <br /> For Your Infrastructure
                        </Typography>

                        <Typography variant="h5" color="grey.400" sx={{ mb: 6, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
                            Stop reacting to dashboards. Start conversing with your data.
                            SmartOps Agent unifies observability and security into a single, proactive intelligence.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button variant="contained" size="large" sx={{
                                borderRadius: 50, px: 5, py: 1.5, fontSize: '1.1rem',
                                bgcolor: '#7c3aed', '&:hover': { bgcolor: '#6d28d9' }
                            }}>
                                Check Demo
                            </Button>

                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Features Grid */}
            <Container maxWidth="xl" sx={{ py: 10 }}>
                <Typography variant="h2" textAlign="center" fontWeight={700} sx={{ mb: 2 }} color="text.primary">
                    Why Choose SmartOps Agent?
                </Typography>
                <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 10, maxWidth: 600, mx: 'auto' }}>
                    Built for modern SRE and SecOps teams who need more than just charts.
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={AutoAwesomeIcon}
                            title="Generative Analysis"
                            description="Transforms raw logs into plain-english summaries. Understand 'why' it happened, not just 'what' happened."
                            delay={0}
                            color="#06b6d4"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={SpeedIcon}
                            title="Instant Remediation"
                            description="Auto-generate remediation scripts for common incidents. Approve and execute with one click."
                            delay={0.1}
                            color="#a855f7"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={SecurityIcon}
                            title="Security First"
                            description="SOC2 compliant architecture. Detects threat patterns that traditional SIEMs miss."
                            delay={0.2}
                            color="#3b82f6"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={InsightsIcon}
                            title="Predictive Scaling"
                            description="Forecasts resource usage 24 hours ahead. Auto-scale your K8s clusters before traffic spikes."
                            delay={0.3}
                            color="#10b981"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={HubIcon}
                            title="Unified Topology"
                            description="Visualizes dependencies across multi-cloud environments. See the blast radius of any alert."
                            delay={0.4}
                            color="#f59e0b"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FeatureCard
                            icon={PsychologyIcon}
                            title="Continuous Learning"
                            description="The agent learns from your team's feedback. Every interaction makes the model smarter."
                            delay={0.5}
                            color="#ef4444"
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Sticky "How it works" Section */}
            <StickySection />

            {/* Final CTA */}
            <Box sx={{ py: 20, bgcolor: 'white', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h2" fontWeight={800} gutterBottom color="text.primary">
                        Ready to supercharge your ops?
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
                        Join 500+ engineering teams using SmartOps to reduce downtime by 40%.
                    </Typography>
                    <Button variant="contained" size="large" sx={{
                        borderRadius: 50, px: 8, py: 2, fontSize: '1.25rem',
                        background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)',
                        boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)'
                    }}>
                        Get Started Now
                    </Button>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default AIAgentProduct;
