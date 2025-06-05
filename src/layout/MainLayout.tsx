import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Box, CssBaseline, Drawer,
    IconButton, List, ListItemButton, ListItemText,
    useTheme, useMediaQuery, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface MenuItem {
    text: string;
    path: string;
    children?: MenuItem[];
}

interface MenuGroup {
    title: string;
    items: MenuItem[];
}

interface MainLayoutProps {
    children: React.ReactNode;
}

const menuGroups: MenuGroup[] = [
    {
        title: 'Components',
        items: [
            { text: 'Button', path: '/button' },
            { text: 'ButtonGroup', path: '/button-group' },
            { text: 'DataGrid', path: '/data-grid' }
        ],
    },
    {
        title: 'Autocomplete',
        items: [
            { text: 'Autocomplete', path: '/autocomplete' },
        ],
    },
    {
        title: 'Input',
        items: [
            { text: 'Checkbox', path: '/checkbox' },
            { text: 'Radio', path: '/radio' },
            { text: 'Rating', path: '/rating' },
            { text: 'Switch', path: '/switch' },
        ],
    },
    {
        title: 'Surface',
        items: [
            {
                text: 'Combo',
                path: '/autocomplete/combo',
                children: [
                    { text: 'Async', path: '/autocomplete/combo/async' },
                    { text: 'Grouped', path: '/autocomplete/combo/grouped' },
                ],
            },
        ],
    },
    {
        title: 'Surface',
        items: [
            { text: 'Accordion', path: '/accordion' },
            { text: 'Appbar', path: '/appbar' },
            { text: 'Card', path: '/card' },
        ],
    },
];

const MainLayout = ({ children }: MainLayoutProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const drawerContent = (
        <>
            <Toolbar />
            {menuGroups.map((group, index) => (
                <Accordion
                    key={index}
                    disableGutters
                    elevation={0}
                    sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)', '&:before': { display: 'none' } }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {group.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ py: 0 }}>
                        <List disablePadding>
                            {group.items.map((item) => (
                                <React.Fragment key={item.text}>
                                    <ListItemButton component={Link} to={item.path} sx={{ pl: 3 }}>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                    {item.children?.map((subItem) => (
                                        <ListItemButton
                                            key={subItem.text}
                                            component={Link}
                                            to={subItem.path}
                                            sx={{ pl: 5 }}
                                        >
                                            <ListItemText primary={subItem.text} />
                                        </ListItemButton>
                                    ))}
                                </React.Fragment>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    {isMobile && (
                        <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" noWrap component="div">
                        Design System
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* 반응형 Drawer */}
            {isMobile ? (
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    {drawerContent}
                </Drawer>
            ) : (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    {drawerContent}
                </Drawer>
            )}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
