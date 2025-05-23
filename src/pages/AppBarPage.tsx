import React from 'react';
import { Container, Typography } from '@mui/material';
import DsAppBar from '../components/surface/DsAppBar';

export default function AppBarPage() {
    const handleMenuClick = () => {
        console.log('Menu button clicked');
    };

    return (
        <>
            <DsAppBar title="Custom AppBar" onMenuClick={handleMenuClick} />
            <Container sx={{ mt: 4 }}>
                <Typography>
                    This is the main content below the AppBar.
                </Typography>
            </Container>
        </>
    );
}
