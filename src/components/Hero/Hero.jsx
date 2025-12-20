import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Skeleton } from '@mui/material';
import './Hero.css';
import { fetchAPI } from '../../utils/strapi';

const Hero = () => {
    // Default content matches the hardcoded version
    const [heroContent, setHeroContent] = useState({
        title: null,
        description: null,
        buttonText: null,
        buttonUrl: null
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const data = await fetchAPI('/api/pages?filters[slug][$eq]=home&populate=*');

                // Safe navigation to extract the specific section
                const rootData = data?.data?.[0];
                const attributes = rootData?.attributes || rootData; // handle flat or nested structure

                // Find sections array
                const sections = attributes?.sections || [];
                // Find sections.hero component
                const heroSection = sections.find(section => section.__component === 'sections.hero');

                if (heroSection) {
                    console.log('Strapi Hero Section:', heroSection);
                    setHeroContent({
                        title: heroSection.headline,
                        description: heroSection.subheadline,
                        buttonText: heroSection.primaryCtaText,
                        buttonUrl: heroSection.primaryCtaUrl
                    });
                } else if (attributes) {
                    // Fallback to top-level fields if sections.hero not found
                    console.log('Strapi Attributes (Fallback):', attributes);
                    setHeroContent({
                        title: attributes.headline,
                        description: attributes.subheadline,
                        buttonText: attributes.primaryCtaText,
                        buttonUrl: attributes.primaryCtaUrl
                    });
                }

            } catch (error) {
                console.error('Error fetching hero data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHeroData();
    }, []);

    return (
        <Box sx={{
            background: (theme) => ({
                xs: theme.palette.custom.gradient.heroMobile,
                md: theme.palette.custom.gradient.hero
            }),
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            pt: 10,
            pb: 10,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Aurora Effect / Glow */}
            <Box sx={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translate(-50%, 0)',
                width: '150%',
                height: '100%',
                background: (theme) => theme.palette.custom.gradient.aurora,
                filter: 'blur(100px)',
                opacity: 0.4,
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h1"
                    sx={{
                        mb: 3,
                        fontSize: { xs: '3rem', md: '5rem' },
                        fontWeight: 800,
                        maxWidth: '1100px',
                        mx: 'auto',
                        lineHeight: 1.1,
                        color: 'white'
                    }}
                >
                    {isLoading ? (
                        <>
                            <Skeleton variant="text" sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto' }} width="80%" height={100} />
                            <Skeleton variant="text" sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto' }} width="60%" height={100} />
                        </>
                    ) : (
                        heroContent.title ? (
                            <Box component="span" sx={{
                                background: '#fff',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {heroContent.title}
                            </Box>
                        ) : null
                    )}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 5,
                        maxWidth: '700px',
                        mx: 'auto',
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        color: 'rgba(255, 255, 255, 1)'
                    }}
                >
                    {isLoading ? (
                        <>
                            <Skeleton variant="text" sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto' }} width="90%" />
                            <Skeleton variant="text" sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto' }} width="70%" />
                        </>
                    ) : heroContent.description}
                </Typography>
                {isLoading ? (
                    <Skeleton variant="rounded" sx={{ bgcolor: 'rgba(255,255,255,0.1)', mx: 'auto', borderRadius: '50px' }} width={200} height={50} />
                ) : (
                    heroContent.buttonText && (
                        <Button
                            component="a"
                            href={heroContent.buttonUrl || "/contact"}
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 2,
                                fontSize: '1.1rem',
                                borderRadius: '50px',
                                background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255,255,255,0.1) inset',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'linear-gradient(180deg, #334155 0%, #1e293b 100%)',
                                    transform: 'translateY(-1px)',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.2) inset'
                                }
                            }}
                        >
                            {heroContent.buttonText} &nbsp; <Box component="span" sx={{ fontSize: '1.2em' }}>&rsaquo;</Box>
                        </Button>
                    )
                )}

                {/* Partner Logos Strip Placeholder */}
                <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center', gap: 6, opacity: 0.7, filter: 'grayscale(100%) invert(0)' }}>
                    {/* Placeholder content if needed */}
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
