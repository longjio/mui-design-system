import * as React from 'react';
import Switch from '@mui/material/Switch';

export interface DsSwitchProps {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    ariaLabel?: string;
}

export function DsSwitch({
                             checked,
                             onChange,
                             disabled = false,
                             ariaLabel = 'Switch',
                         }: DsSwitchProps) {
    return (
        <Switch
            aria-label={ariaLabel}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
    );
}
