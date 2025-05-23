import * as React from 'react';
import { Container, Typography } from '@mui/material';
import CustomDataGrid from '../components/CustomDataGrid';

export default function DataGridPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                MUI X Data Grid
            </Typography>
            <CustomDataGrid />
        </Container>
    );
}