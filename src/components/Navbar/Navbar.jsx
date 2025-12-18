import { useState } from 'react';
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
    Stack
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../assets/lvvl_logo.png';
import './Navbar.css';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' }
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
                                sx={{ height: 35, width: 'auto' }}
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
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.title} onClick={handleCloseNavMenu} component={Link} to={page.path}>
                                    <Typography textAlign="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <Button variant="contained" color="primary" fullWidth component={Link} to="/contact">Get Consultation</Button>
                            </MenuItem>
                        </Menu>
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
                            sx={{ height: 40, width: 'auto' }}
                        />
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
                        {pages.map((page) => (
                            <Button
                                key={page.title}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={page.path}
                                sx={{
                                    my: 2,
                                    color: 'text.secondary',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' }
                                }}
                            >
                                {page.title}
                            </Button>
                        ))}
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
