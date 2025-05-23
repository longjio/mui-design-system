import React from 'react';
import { Stack, Typography } from '@mui/material';
import Checkbox from "@mui/material/Checkbox";

const InputPage = () => {
    return (
        <Stack spacing={3}>
            {/* Text Button */}
            <Typography variant="h6">CheckBox</Typography>
            <Stack direction="row" spacing={1}>
                <Checkbox />
            </Stack>
        </Stack>

    );
};

export default InputPage;
