import React from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    Toolbar,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface MainLayoutProps {
    children: React.ReactNode;
}

const menuGroups = [
    {
        title: 'Components',
        items: [
            { text: 'Button', path: '/button' },
            { text: 'Card', path: '/card' },
            { text: 'typography', path: '/typography' },
        ],
    },
    {
        title: 'Autocomplete',
        items: [
            { text: 'Combo', path: '/textfield' },
            { text: 'Input', path: '/checkbox' },
        ],
    },
    {
        title: 'Inputs',
        items: [
            { text: 'TextField', path: '/textfield' },
            { text: 'Checkbox', path: '/checkbox' },
        ],
    },
    {
        title: 'Navigation',
        items: [
            { text: 'Tabs', path: '/tabs' },
            { text: 'Breadcrumbs', path: '/breadcrumbs' },
        ],
    },
    {
        title: 'Feedback',
        items: [
            { text: 'Snackbar', path: '/snackbar' },
            { text: 'Dialog', path: '/dialog' },
        ],
    },
    {
        title: 'Layout',
        items: [
            { text: 'Grid', path: '/grid' },
            { text: 'Box', path: '/box' },
        ],
    },
];

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Design System
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar />
                {menuGroups.map((group, index) => (
                    <Accordion
                        key={index}
                        disableGutters
                        elevation={0}
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.12)', // ✅ 항상 보이게
                            '&:before': {
                                display: 'none', // ✅ 기본 분리선 제거
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                                minHeight: 40,
                                paddingY: 0.5,
                                '&.Mui-expanded': {
                                    minHeight: 40,
                                },
                                '& .MuiAccordionSummary-content': {
                                    margin: '6px 0 !important', // 🔧 항상 같은 margin으로 고정
                                },
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ fontSize: 16, fontWeight: 600 }}>
                                {group.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingY: 0 }}>
                            <List disablePadding>
                                {group.items.map((item) => (
                                    <ListItemButton
                                        key={item.text}
                                        component={Link}
                                        to={item.path}
                                        sx={{ pl: 3 }}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                                                    {item.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
