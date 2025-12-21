import { useState, useEffect } from 'react';
import { Container, Grid, Box, Skeleton } from '@mui/material';
import { fetchAPI, getStrapiMedia } from '../../utils/strapi';

const Partners = () => {
    const [partners, setPartners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const data = await fetchAPI('/api/pages?filters[slug][$eq]=home&populate[0]=sections&populate[1]=sections.logos&populate[2]=sections.logos.logo');

                // Safe navigation to extract sections
                const rootData = data?.data?.[0];
                const attributes = rootData?.attributes || rootData;
                const sections = attributes?.sections || [];

                // Find partners component
                const partnersSection = sections.find(section => section.__component === 'sections.partners-component');

                if (partnersSection && partnersSection.logos) {
                    const mappedPartners = partnersSection.logos.map(item => ({
                        name: item.name,
                        // Prepend Strapi base URL to the image path using utility
                        logo: getStrapiMedia(item.logo.url)
                    }));
                    setPartners(mappedPartners);
                }
            } catch (error) {
                console.error('Error fetching partners:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPartners();
    }, []);

    // If no data fetched yet, we can hide or show safe fallback. 
    // For now, render nothing if empty to avoid broken images, or keep hardcoded as initial state?
    // User request implies replacing content.

    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {isLoading ? (
                    // Render 5 skeleton placeholders
                    Array.from(new Array(5)).map((_, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 1 }} />
                        </Grid>
                    ))
                ) : (
                    partners.map((partner, index) => (
                        <Grid item xs={6} sm={4} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                src={partner.logo}
                                alt={partner.name}
                                sx={{
                                    maxWidth: '100%',
                                    maxHeight: 50,
                                    width: 'auto',
                                    opacity: 0.7,
                                    filter: 'grayscale(100%)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        opacity: 1,
                                        filter: 'grayscale(0%)'
                                    }
                                }}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    );
};

export default Partners;
