import { useRef, useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Skeleton } from '@mui/material';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import { AutoAwesome, Storage, Terminal, InsertChart, SmartToy, Send, Add, ContentCopy, BookmarkBorder, Menu } from '@mui/icons-material';

// Step Content
const steps = [
    {
        id: 0,
        title: "Connect Your Data",
        description: "Seamlessly integrate with your existing Data Lake, S3 buckets, or SQL databases. No migration needed.",
        icon: <Storage fontSize="large" />,
    },
    {
        id: 1,
        title: "Just Ask",
        description: "Interact with your data using natural language. Like chatting with a senior data analyst who knows everything.",
        icon: <Terminal fontSize="large" />,
    },
    {
        id: 2,
        title: "Instant Insights",
        description: "Get real-time visualizations, anomaly detection, and actionable reports generated in seconds.",
        icon: <InsertChart fontSize="large" />,
    }
];

const AIAgentPreview = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Box sx={{ py: 10, bgcolor: '#0f172a' }}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 10, textAlign: 'center' }}>
                        <Skeleton variant="text" width="60%" height={80} sx={{ mx: 'auto', bgcolor: 'rgba(255,255,255,0.1)' }} />
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={5}>
                            {[1, 2, 3].map((i) => (
                                <Box key={i} sx={{ height: '80vh', display: 'flex', alignItems: 'center', p: 4 }}>
                                    <Box sx={{ width: '100%' }}>
                                        <Skeleton variant="circular" width={60} height={60} sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
                                        <Skeleton variant="text" width="80%" height={60} sx={{ mb: 2, bgcolor: 'rgba(255,255,255,0.1)' }} />
                                        <Skeleton variant="text" width="100%" height={20} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                                        <Skeleton variant="text" width="90%" height={20} sx={{ bgcolor: 'rgba(255,255,255,0.1)' }} />
                                    </Box>
                                </Box>
                            ))}
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    position: 'sticky',
                                    top: 'calc(50vh - 400px)', // Center vertically
                                    height: '800px', // Increased height to avoid scrolling
                                    width: '100%',
                                    borderRadius: 4,
                                    bgcolor: '#1e293b',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Skeleton variant="rectangular" width="100%" height="100%" sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }

    return (
        <Box sx={{
            pt: 10,
            pb: 20, // Increased bottom padding to prevent sticking to screen bottom
            bgcolor: '#0f172a',
            position: 'relative',
            // overflow: 'hidden' removed to allow position: sticky to work
            // Grid Pattern Background
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 1) 100%), 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 40px 40px, 40px 40px'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <Typography variant="h2" fontWeight={800} gutterBottom sx={{ background: 'linear-gradient(90deg, #fff, #94a3b8)', backgroundClip: 'text', textFillColor: 'transparent' }}>
                        SmartOps Assistant <br /> Agentic AI Chatbot
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Left Column: Scrollable Steps */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            {steps.map((step) => (
                                <StepCard key={step.id} step={step} setActiveStep={setActiveStep} />
                            ))}
                            {/* Spacer to allow scrolling past the last item */}
                            <Box sx={{ height: '50vh' }} />
                        </Box>
                    </Grid>

                    {/* Right Column: Sticky Visuals */}
                    <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
                        <Box
                            sx={{
                                position: 'sticky',
                                top: 'calc(50vh - 400px)', // Center vertically (800px height / 2)
                                height: '800px', // Increased height to avoid scrolling
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 4,
                                overflow: 'hidden',
                                bgcolor: '#1e293b',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {activeStep === 0 && <SceneConnect key="connect" />}
                                {activeStep === 1 && <SceneAsk key="ask" />}
                                {activeStep === 2 && <SceneReveal key="reveal" />}
                            </AnimatePresence>
                        </Box>
                    </Grid>
                    {/* CTA Section */}
                    <Grid item xs={12} sx={{ mt: 8, textAlign: 'center' }}>
                        <Button
                            component={motion.a}
                            href="/product/ai-agent"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                borderRadius: 50,
                                background: 'linear-gradient(45deg, #3b82f6 30%, #22d3ee 90%)',
                                boxShadow: '0 10px 20px -10px rgba(59, 130, 246, 0.5)',
                                textTransform: 'none'
                            }}
                        >
                            Request a Demo
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// --- Sub-Components ---

const StepCard = ({ step, setActiveStep }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" }); // Trigger when in middle of screen

    useEffect(() => {
        if (isInView) setActiveStep(step.id);
    }, [isInView, step.id, setActiveStep]);

    return (
        <Box
            ref={ref}
            component={motion.div}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: isInView ? 1 : 0.3, scale: isInView ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
            sx={{
                height: '80vh', // Each step takes up mostly active viewport height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ textAlign: 'left', p: 4 }}>
                <Box sx={{ display: 'inline-flex', p: 2, borderRadius: '50%', bgcolor: 'rgba(34, 211, 238, 0.1)', color: 'secondary.main', mb: 3 }}>
                    {step.icon}
                </Box>
                <Typography variant="h3" fontWeight={700} gutterBottom color="white">
                    {step.title}
                </Typography>
                <Typography variant="h6" color="grey.400" sx={{ lineHeight: 1.6 }}>
                    {step.description}
                </Typography>
            </Box>
        </Box>
    );
};

// --- Scenes (Animations) ---

const SceneConnect = () => (
    <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
    >
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <AutoAwesome sx={{ fontSize: 80, color: 'secondary.main' }} />
        </motion.div>

        {/* Animated Data Streams */}
        {[...Array(6)].map((_, i) => (
            <Box
                key={i}
                component={motion.div}
                initial={{ opacity: 0, x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
                sx={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: '#22d3ee',
                    boxShadow: '0 0 15px #22d3ee'
                }}
            />
        ))}
        <Typography variant="h6" color="secondary" sx={{ mt: 4, opacity: 0.8 }}>Connecting to Data Lake...</Typography>
    </Box>
);

const SceneAsk = () => {
    const typingText = "Show me which ips, have the most failed authentication attempts";

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            sx={{ width: '100%', height: '100%', bgcolor: '#0B1120', display: 'flex', overflow: 'hidden', fontFamily: '"Inter", sans-serif' }}
        >

            {/* Sidebar (25%) */}
            <Box sx={{ width: '25%', borderRight: '1px solid rgba(255,255,255,0.05)', p: 2, display: { xs: 'none', sm: 'flex' }, flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="subtitle2" fontWeight={600} color="white">Chatbot AI</Typography>
                    <Menu sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }} />
                </Box>

                <Button
                    startIcon={<Add />}
                    variant="outlined"
                    fullWidth
                    sx={{
                        justifyContent: 'flex-start',
                        borderColor: 'rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.7)',
                        textTransform: 'none',
                        borderRadius: 2,
                        mb: 3
                    }}
                >
                    New Chat
                </Button>

                <Typography variant="caption" color="rgba(255,255,255,0.4)" sx={{ mb: 1, letterSpacing: 1 }}>RECENT</Typography>
                <Box sx={{
                    p: 1.5,
                    bgcolor: 'rgba(59, 130, 246, 0.15)',
                    borderRadius: 2,
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    cursor: 'pointer'
                }}>
                    <Typography variant="body2" color="white" fontWeight={500}>Hello</Typography>
                </Box>

                <Box sx={{ mt: 'auto' }}>
                    <Typography variant="caption" color="rgba(255,255,255,0.3)">LVVL INTELLIGENCE</Typography>
                </Box>
            </Box>

            {/* Main Chat Area (75%) */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3, position: 'relative' }}>

                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
                    <Box>
                        <Typography variant="h6" fontWeight={700} color="white">SmartOps Assistant</Typography>
                        <Typography variant="caption" color="rgba(255,255,255,0.5)">Your AI co-pilot for operational insights.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, px: 1.5, py: 0.5 }}>
                        <Typography variant="caption" color="rgba(255,255,255,0.7)">Online</Typography>
                        <Box sx={{ width: 8, height: 8, bgcolor: '#22c55e', borderRadius: '50%' }} />
                    </Box>
                </Box>

                {/* Messages */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {/* Bot Message 1 */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <SmartToy sx={{ fontSize: 18, color: 'white' }} />
                        </Box>
                        <Box sx={{ bgcolor: '#1e293b', p: 2, borderRadius: '0 12px 12px 12px', maxWidth: '80%' }}>
                            <Typography variant="body2" color="rgba(255,255,255,0.9)" sx={{ mb: 1.5 }}>Welcome to SmartOps Assistant — what can I do for you?</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.5, cursor: 'pointer' }}>
                                    <ContentCopy sx={{ fontSize: 14 }} /> <Typography variant="caption">Copy</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.5, cursor: 'pointer' }}>
                                    <BookmarkBorder sx={{ fontSize: 14 }} /> <Typography variant="caption">Keep as Note</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Bot Message 2 */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box sx={{ width: 32, height: 32, borderRadius: '50%', bgcolor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <SmartToy sx={{ fontSize: 18, color: 'white' }} />
                        </Box>
                        <Box sx={{ bgcolor: '#1e293b', p: 2, borderRadius: '0 12px 12px 12px', maxWidth: '80%' }}>
                            <Typography variant="body2" color="rgba(255,255,255,0.9)" sx={{ mb: 1.5 }}>Hi there! How can I help you today?</Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.5, cursor: 'pointer' }}>
                                    <ContentCopy sx={{ fontSize: 14 }} /> <Typography variant="caption">Copy</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.5, cursor: 'pointer' }}>
                                    <BookmarkBorder sx={{ fontSize: 14 }} /> <Typography variant="caption">Keep as Note</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* User Message */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 2, py: 1, borderRadius: '12px 0 12px 12px' }}>
                            <Typography variant="body2" color="white">Hello</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Input Area */}
                <Box sx={{ mt: 'auto', position: 'relative' }}>
                    <Box sx={{
                        border: '1px solid rgba(59, 130, 246, 0.5)',
                        borderRadius: 3,
                        p: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: 'rgba(15, 23, 42, 0.5)'
                    }}>
                        <Typography variant="body2" color="rgba(255,255,255,0.9)" sx={{ fontFamily: 'monospace' }}>
                            {typingText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.03 }} // Faster typing
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                style={{ color: '#3b82f6', marginLeft: 2 }}
                            >
                                |
                            </motion.span>
                        </Typography>

                        <Box sx={{
                            width: 32,
                            height: 32,
                            bgcolor: '#3b82f6',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
                        }}>
                            <Send sx={{ fontSize: 16, color: 'white' }} />
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

const SceneReveal = () => (
    <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', p: 3, bgcolor: '#0B1120', color: 'white' }}
    >

        {/* Network Traffic Comparison Card (Matching Screenshot) */}
        <Paper
            elevation={0}
            sx={{
                p: 2,
                mb: 2,
                bgcolor: '#1e293b',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 3,
                flexShrink: 0
            }}
        >
            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, color: 'white' }}>
                Network Traffic Comparison (Chart)
            </Typography>

            {/* Legend */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 30, height: 8, bgcolor: '#3b82f6', borderRadius: 1 }} />
                    <Typography variant="caption" color="rgba(255,255,255,0.7)">Bytes In</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 30, height: 8, bgcolor: '#10b981', borderRadius: 1 }} />
                    <Typography variant="caption" color="rgba(255,255,255,0.7)">Bytes Out</Typography>
                </Box>
            </Box>

            {/* Chart Area */}
            <Box sx={{ display: 'flex', height: 180, position: 'relative', ml: 5, mb: 1 }}>

                {/* Y-Axis Grid & Labels */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {[350000000, 300000000, 250000000, 200000000, 150000000, 100000000, 50000000, 0].map((val, i) => (
                        <Box key={i} sx={{ position: 'relative', width: '100%', borderTop: i === 7 ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    position: 'absolute',
                                    left: -55,
                                    top: -9,
                                    color: 'rgba(255,255,255,0.4)',
                                    fontSize: '0.6rem',
                                    fontFamily: 'monospace',
                                    textAlign: 'right',
                                    width: 50
                                }}
                            >
                                {val.toLocaleString()}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* Bars Container */}
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', zIndex: 1, px: 2 }}>

                    {/* Data Group 1: alice/devops */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                            {/* Bytes In (Low) */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 10 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ width: 24, backgroundColor: '#3b82f6' }}
                            />
                            {/* Bytes Out (High ~320M) */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 160 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                style={{ width: 24, backgroundColor: '#10b981' }}
                            />
                        </Box>
                        <Typography variant="caption" color="rgba(255,255,255,0.7)">alice/devops</Typography>
                    </Box>

                    {/* Data Group 2: Other users */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                            {/* Bytes In (Very Low) */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 5 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                style={{ width: 24, backgroundColor: '#3b82f6' }}
                            />
                            {/* Bytes Out (~100M) */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 51 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                style={{ width: 24, backgroundColor: '#10b981' }}
                            />
                        </Box>
                        <Typography variant="caption" color="rgba(255,255,255,0.7)">Other users</Typography>
                    </Box>

                </Box>
            </Box>

            {/* Actions Footer */}
            <Box sx={{ display: 'flex', gap: 3, mt: 2, pt: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.6, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                    <ContentCopy sx={{ fontSize: 14 }} />
                    <Typography variant="caption">Copy</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, opacity: 0.6, cursor: 'pointer', '&:hover': { opacity: 1 } }}>
                    <BookmarkBorder sx={{ fontSize: 14 }} />
                    <Typography variant="caption">Keep as a Note</Typography>
                </Box>
            </Box>
        </Paper>

        {/* Existing Data Table (Now below the chart) */}
        <Box sx={{ bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2, overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Grid container sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)', p: 1.5, bgcolor: 'rgba(255,255,255,0.05)' }}>
                <Grid item xs={6}><Typography variant="caption" fontWeight={600} color="rgba(255,255,255,0.6)">SOURCE IP</Typography></Grid>
                <Grid item xs={3}><Typography variant="caption" fontWeight={600} color="rgba(255,255,255,0.6)">TOTAL</Typography></Grid>
                <Grid item xs={3}><Typography variant="caption" fontWeight={600} color="rgba(255,255,255,0.6)">STATUS</Typography></Grid>
            </Grid>
            <Box sx={{ overflowY: 'auto' }}>
                {[
                    { ip: '192.168.1.105', count: 245, status: 'Blocked' },
                    { ip: '10.0.0.42', count: 189, status: 'Flagged' },
                    { ip: '172.16.254.1', count: 134, status: 'Monitoring' }
                ].map((row, i) => (
                    <Grid container key={i} component={motion.div} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + i * 0.2 }} sx={{ p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <Grid item xs={6}><Typography variant="body2" color="rgba(255,255,255,0.8)">{row.ip}</Typography></Grid>
                        <Grid item xs={3}><Typography variant="body2" color="white" fontWeight={700}>{row.count}</Typography></Grid>
                        <Grid item xs={3}>
                            <Box sx={{
                                px: 1, py: 0.25, borderRadius: 10,
                                bgcolor: row.status === 'Blocked' ? 'rgba(239, 68, 68, 0.2)' : row.status === 'Flagged' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                                color: row.status === 'Blocked' ? '#fca5a5' : row.status === 'Flagged' ? '#fcd34d' : '#93c5fd',
                                display: 'inline-block', fontSize: '0.7rem', fontWeight: 600
                            }}>
                                {row.status}
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Box>
    </Box>
);

export default AIAgentPreview;
