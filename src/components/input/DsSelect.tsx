import * as React from 'react';

import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface DsSelectProps {

    value: string;

    onChange: (event: SelectChangeEvent) => void;

    label: string;

    items: { label: string; value: string | number }[];

    disabled?: boolean;

    fullWidth?: boolean;

    id?: string;

}

export function DsSelect({

                             value,

                             onChange,

                             label,

                             items,

                             disabled = false,

                             fullWidth = true,

                             id = 'ds-select',

                         }: DsSelectProps) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth={fullWidth} disabled={disabled}>
                <InputLabel id={`${id}-label`}>{label}</InputLabel>
                <Select

                    labelId={`${id}-label`}

                    id={id}

                    value={value}

                    label={label}

                    onChange={onChange}
                >

                    {items.map((item) => (
                        <MenuItem key={item.value} value={item.value}>

                            {item.label}
                        </MenuItem>

                    ))}
                </Select>
            </FormControl>
        </Box>

    );

}

