import { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowDown, Close as CloseIcon } from '@mui/icons-material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/lvvl_logo.png';
import './Navbar.css';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElServices, setAnchorElServices] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine current processing mode based on path
    const isHomePage = location.pathname === '/';

    // Styles for navbar elements based on location
    const navTextColor = isHomePage ? 'rgba(255,255,255,0.7)' : 'text.primary';
    const navHoverColor = isHomePage ? '#ffffff' : 'primary.main';
    const logoFilter = isHomePage ? 'brightness(0) invert(1)' : 'none';
    const mobileIconColor = isHomePage ? 'white' : 'inherit';

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenServicesMenu = (event) => {
        setAnchorElServices(event.currentTarget);
    };

    const handleCloseServicesMenu = () => {
        setAnchorElServices(null);
    };

    const handleServiceClick = (path) => {
        navigate(path);
        handleCloseServicesMenu();
        handleCloseNavMenu();
    };

    const pages = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        // Services is handled separately
        { title: 'Contact', path: '/contact' }
    ];

    const services = [
        { title: 'Observability', path: '/observability' },
        { title: 'Cybersecurity', path: '/cybersecurity' },
        { title: 'Data Engineering', path: '/data-engineering' }
    ];

    return (
        <AppBar position="absolute" color="transparent" elevation={0} className="navbar">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ py: 1 }}>
                    {/* Desktop Logo */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', mr: 4 }}>
                        <Box
                            component={Link}
                            to="/"
                            sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                        >
                            <Box
                                component="img"
                                src={logo}
                                alt="LVVL Logo"
                                sx={{ height: 35, width: 'auto', filter: logoFilter }}
                            />
                        </Box>
                    </Box>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: mobileIconColor }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            PaperProps={{
                                sx: { width: '100%', height: '100vh', bgcolor: 'background.default' }
                            }}
                        >
                            <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                <IconButton onClick={handleCloseNavMenu}>
                                    <CloseIcon fontSize="large" />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/" onClick={handleCloseNavMenu} sx={{ justifyContent: 'center' }}>
                                            <ListItemText primary="Home" primaryTypographyProps={{ textAlign: 'center', variant: 'h5', fontWeight: 600 }} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component={Link} to="/about" onClick={handleCloseNavMenu} sx={{ justifyContent: 'center' }}>
                                            <ListItemText primary="About Us" primaryTypographyProps={{ textAlign: 'center', variant: 'h5', fontWeight: 600 }} />
                                        </ListItemButton>
                                    </ListItem>

                                    <ListItem disablePadding sx={{ mt: 2 }}>
                                        <ListItemButton component={Link} to="/services" onClick={handleCloseNavMenu} sx={{ justifyContent: 'center' }}>
                                            <ListItemText primary="Services" primaryTypographyProps={{ textAlign: 'center', variant: 'h5', fontWeight: 600, color: 'primary.main' }} />
                                        </ListItemButton>
                                    </ListItem>
                                    {services.map((service) => (
                                        <ListItem key={service.title} disablePadding>
                                            <ListItemButton onClick={() => handleServiceClick(service.path)} sx={{ justifyContent: 'center', py: 0.5 }}>
                                                <ListItemText primary={service.title} primaryTypographyProps={{ textAlign: 'center', variant: 'body1', color: 'text.secondary' }} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}

                                    <ListItem disablePadding sx={{ mt: 2 }}>
                                        <ListItemButton component={Link} to="/contact" onClick={handleCloseNavMenu} sx={{ justifyContent: 'center' }}>
                                            <ListItemText primary="Contact" primaryTypographyProps={{ textAlign: 'center', variant: 'h5', fontWeight: 600 }} />
                                        </ListItemButton>
                                    </ListItem>

                                    <ListItem sx={{ mt: 4, justifyContent: 'center' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            component={Link}
                                            to="/contact"
                                            onClick={handleCloseNavMenu}
                                            sx={{ minWidth: 200 }}
                                        >
                                            Get Consultation
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </Box>

                    {/* Mobile Logo */}
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            alignItems: 'center',
                            textDecoration: 'none',
                            mr: 2
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="LVVL Logo"
                            sx={{ height: 40, width: 'auto', filter: logoFilter }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{ my: 2, color: navTextColor, fontWeight: 500, '&:hover': { color: navHoverColor, bgcolor: 'transparent' } }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{ my: 2, color: navTextColor, fontWeight: 500, '&:hover': { color: navHoverColor, bgcolor: 'transparent' } }}
                        >
                            About Us
                        </Button>

                        {/* Dropdown for Services */}
                        <Box
                            onMouseEnter={handleOpenServicesMenu}
                            onMouseLeave={handleCloseServicesMenu}
                        >
                            <Button
                                component={Link}
                                to="/services"
                                endIcon={<KeyboardArrowDown />}
                                sx={{
                                    my: 2,
                                    color: navTextColor,
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    '&:hover': { color: navHoverColor, bgcolor: 'transparent' }
                                }}
                            >
                                Services
                            </Button>
                            <Menu
                                id="services-menu"
                                anchorEl={anchorElServices}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElServices)}
                                onClose={handleCloseServicesMenu}
                                MenuListProps={{
                                    onMouseLeave: handleCloseServicesMenu,
                                }}
                                PaperProps={{
                                    elevation: 2,
                                    sx: { mt: -1 } // Pull it up slightly to bridge gap
                                }}
                                disableRestoreFocus
                                disableScrollLock={true}
                                sx={{ pointerEvents: 'none' }} // Let hover pass through the backdrop area
                            >
                                <Box sx={{ pointerEvents: 'auto' }}>
                                    {services.map((service) => (
                                        <MenuItem
                                            key={service.title}
                                            onClick={() => handleServiceClick(service.path)}
                                            sx={{ minWidth: 150 }}
                                        >
                                            {service.title}
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Menu>
                        </Box>

                        <Button
                            component={Link}
                            to="/contact"
                            sx={{ my: 2, color: navTextColor, fontWeight: 500, '&:hover': { color: navHoverColor, bgcolor: 'transparent' } }}
                        >
                            Contact
                        </Button>
                    </Box>

                    {/* Desktop Action */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button variant="contained" color="primary" sx={{ px: 3 }} component={Link} to="/contact">
                            Get Consultation
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
