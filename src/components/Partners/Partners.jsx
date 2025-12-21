import { Container, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import splunkLogo from '../../assets/Splunk_logo.svg.png.webp';
import dremioLogo from '../../assets/dremio.svg';
import awsLogo from '../../assets/aws.svg';
import redisLogo from '../../assets/Redis_logo.svg.png.webp';
import cloudianLogo from '../../assets/cloudian-logo-for-web.png.webp';

const Partners = () => {
    const partners = [
        { name: 'Splunk', logo: splunkLogo },
        { name: 'Dremio', logo: dremioLogo },
        { name: 'AWS', logo: awsLogo },
        { name: 'Redis', logo: redisLogo },
        { name: 'Cloudian', logo: cloudianLogo }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {partners.map((partner, index) => (
                    <Grid item xs={6} sm={4} md={2} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component={motion.img}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.2,
                                filter: 'grayscale(0%)',
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                            src={partner.logo}
                            alt={partner.name}
                            sx={{
                                maxWidth: '100%',
                                maxHeight: 50,
                                width: 'auto',
                                opacity: 0.7,
                                filter: 'grayscale(100%)',
                                // Remove default transition to let framer motion handle it seamlessly
                                cursor: 'pointer'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Partners;
