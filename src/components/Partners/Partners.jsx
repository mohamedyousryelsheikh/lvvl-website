import { Container, Grid, Box } from '@mui/material';
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

    return (
        <Container maxWidth="lg" sx={{ py: 2 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                {partners.map((partner, index) => (
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
                ))}
            </Grid>
        </Container>
    );
};

export default Partners;
