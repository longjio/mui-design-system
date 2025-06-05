import * as React from 'react';
import TextField from '@mui/material/TextField';

export interface DsTextFieldProps {
    label?: string;
    variant?: 'outlined' | 'filled' | 'standard';
    fullWidth?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function DsTextField({
                                label = 'Default Label',
                                variant = 'outlined',
                                fullWidth = true,
                                value,
                                onChange,
                            }: DsTextFieldProps) {
    return (
        <TextField
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            value={value}
            onChange={onChange}
        />
    );
}
