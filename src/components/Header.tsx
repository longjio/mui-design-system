import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* 왼쪽에 로고나 텍스트 */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    My Design System
                </Typography>

                {/* 메뉴 버튼들 */}
                <Button color="inherit" component={Link} to="/button">
                    Buttons
                </Button>
                <Button color="inherit" component={Link} to="/card">
                    Cards
                </Button>
                <Button color="inherit" component={Link} to="/about">
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
