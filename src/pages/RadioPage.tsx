import React from 'react';
import { Stack, Typography } from '@mui/material';
// Import DsRadioGroup and alias it as RadioButtonsGroup
import { DsRadioGroup as RadioButtonsGroup } from "../components/input/DsRadioGroup";
// Make sure RadioGroupRow is also imported correctly based on its export type
import RadioButtonsGroupRow from "../components/input/RadioGroupRow";

const InputPage = () => {
    // DsRadioGroup (aliased as RadioButtonsGroup) requires props.
    const [selectedValue, setSelectedValue] = React.useState('');
    const radioItems = [
        { label: 'Option X', value: 'x' },
        { label: 'Option Y', value: 'y' },
    ];
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        setSelectedValue(value);
    };

    return (
        <Stack spacing={3} sx={{ padding: 2 }}>
            <Typography variant="h6">RadioGroup</Typography>
            <Stack direction="row" spacing={1}>
                <RadioButtonsGroup // Now you can use the alias
                    label="Pick one"
                    value={selectedValue}
                    onChange={handleChange}
                    items={radioItems}
                />
            </Stack>
            <Typography variant="h6">RadioGroup Row</Typography>
            <Stack direction="row" spacing={1}>
                {/* <RadioButtonsGroupRow /> */} {/* Props would be needed here too */}
                <Typography variant="body2">(RadioGroupRow placeholder)</Typography>
            </Stack>
        </Stack>
    );
};

export default InputPage;