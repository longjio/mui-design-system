import React from 'react';
import { Typography, Stack } from '@mui/material';

const TypographyPage = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h1">H1 제목입니다</Typography>
            <Typography variant="h2">H2 제목입니다</Typography>
            <Typography variant="h3">H3 제목입니다</Typography>
            <Typography variant="h4">H4 제목입니다</Typography>
            <Typography variant="h5">H5 제목입니다</Typography>
            <Typography variant="h6">H6 제목입니다</Typography>
        </Stack>
    );
};

export default TypographyPage;