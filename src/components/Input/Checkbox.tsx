import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {Stack} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
    return (
        <Stack>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </Stack>
    );
}
