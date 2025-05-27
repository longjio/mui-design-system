import * as React from 'react';
import { Button, Stack, Box, Typography, ButtonGroup } from '@mui/material';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

export default function BasicButtonGroup() {
    return (
        <Stack spacing={3}>
            <Box m={0} p={0}>
                <Typography variant="h6">Basic button group</Typography>
                <ButtonGroup variant="contained" aria-label="basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <Stack>
                <Typography variant="h6">Button variants</Typography>
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={3}>
                <Typography variant="h6">Sizes and colors</Typography>
                <ButtonGroup size="small" aria-label="Small button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="Large button group">
                    {buttons}
                </ButtonGroup>
            </Stack>
            <Typography variant="h6">Vertical group</Typography>
            <Box
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 2,
                    },
                }}
            >
                <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="contained"
                >
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Vertical button group"
                    variant="text"
                >
                    {buttons}
                </ButtonGroup>
            </Box>
        </Stack>
    );
}
