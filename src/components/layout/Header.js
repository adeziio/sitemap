import React, { Component } from 'react';
import { Button, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Tooltip, MenuItem } from '@mui/material';
import { MenuOutlined, Stars, AutoAwesome } from '@mui/icons-material';
import logo from "./../logo/logo.png"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorElLeft: null,
            anchorElRight: null
        }
    }

    setAnchorElLeft = (param) => {
        this.setState({
            anchorElLeft: param
        })
    }

    setAnchorElRight = (param) => {
        this.setState({
            anchorElRight: param
        })
    }

    setPage = (page) => {
        this.props.setCurrentPage(page);
        this.handleCloseRightMenu();
    }

    setFilter = (filter) => {
        this.props.setCurrentPage("Gallery");
        this.props.setCurrentFilter(filter);
        this.handleCloseLeftMenu();
    }

    handleCloseLeftMenu = () => {
        this.setAnchorElLeft(null);
    }

    handleCloseRightMenu = () => {
        this.setAnchorElRight(null);
    }

    handleOpenLeftMenu = (event) => {
        this.setAnchorElLeft(event.currentTarget);
    }

    handleOpenRightMenu = (event) => {
        this.setAnchorElRight(event.currentTarget);
    }

    render() {
        const { anchorElLeft, anchorElRight } = this.state;

        const filters = ['Upload', 'Image', 'Video', 'Gif'];
        const pages = ['About', 'Contact'];

        return (
            <>
                <AppBar position="fixed" sx={{ backgroundColor: "#005b96" }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                            >
                                <img className="pointer" src={logo} alt="star logo" height="50px" onClick={() => { this.setFilter("All") }} />
                                <AutoAwesome />
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="current page"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={this.handleOpenLeftMenu}
                                    color="inherit"
                                >
                                    <MenuOutlined />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElLeft}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElLeft)}
                                    onClose={this.handleCloseLeftMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {filters.map((filter, index) => (
                                        <MenuItem key={`f-${filter}-${index}`} onClick={() => { this.setFilter(filter) }}>
                                            <Typography textAlign="center">{filter}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                            >
                                <img className="pointer" src={logo} alt="star logo" height="50px" onClick={() => { this.setFilter("All") }} />
                                <AutoAwesome />
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {filters.map((filter, index) => (
                                    <Button
                                        key={`f2-${filter}-${index}`}
                                        onClick={() => { this.setFilter(filter) }}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {filter}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }} >
                                <Tooltip title="More">
                                    <Typography onClick={this.handleOpenRightMenu} sx={{ p: 0 }}>
                                        <Stars className="pointer" fontSize="large" />
                                    </Typography>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElRight}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElRight)}
                                    onClose={this.handleCloseRightMenu}
                                >
                                    {pages.map((page, index) => (
                                        <MenuItem key={`p-${page}-${index}`} onClick={() => { this.setPage(page) }}>
                                            <Typography textAlign="center" >{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </>
        )
    }
}