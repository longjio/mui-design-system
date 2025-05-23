// src/components/surface/DsAppBar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface DsAppBarProps {
    title?: string;
    onMenuClick?: () => void;
}

const DsAppBar: React.FC<DsAppBarProps> = ({ title = 'My App', onMenuClick }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={onMenuClick}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default DsAppBar;
