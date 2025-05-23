import React from 'react';
import { Stack, Typography } from '@mui/material';
import RadioButtonsGroup from "../components/input/RadioGroup";
import RadioButtonsGroupRow from "../components/input/RadioGroupRow";

const InputPage = () => {
    return (
        <Stack spacing={3}>
            <Typography variant="h6">RadioGroup</Typography>
            <Stack direction="row" spacing={1}>
                <RadioButtonsGroup />
            </Stack>
            <Typography variant="h6">RadioGroup Row</Typography>
            <Stack direction="row" spacing={1}>
                <RadioButtonsGroupRow />
            </Stack>
        </Stack>

    );
};

export default InputPage;
