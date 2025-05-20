import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import AutocompleteComboBox from '../components/autocomplete/AutocompleteComboBox';
import AutocompletePlayground from '../components/autocomplete/AutocompletePlayground';

export default function AutocompletePage() {
    return (
        <Stack spacing={4} padding={4}>
            <Typography variant="h4">Autocomplete Example</Typography>
            <AutocompleteComboBox />

            <Typography variant="h6">Playground</Typography>
            <AutocompletePlayground />
        </Stack>
    );
}
