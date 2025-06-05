import React from 'react';
import { Stack, Typography } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxPage = () => {
    return (
        <Stack spacing={3}>
            {/* Text Button */}
            <Typography variant="h6">CheckBox</Typography>
            <Stack direction="row" spacing={1}>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </Stack>
        </Stack>

    );
};

export default CheckboxPage;
