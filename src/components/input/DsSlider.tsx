import * as React from 'react';
import Slider from '@mui/material/Slider';

export interface DsSliderProps {
    value: number;
    onChange: (event: Event, newValue: number | number[]) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    ariaLabel?: string;
}

export function DsSlider({
                             value,
                             onChange,
                             min = 0,
                             max = 100,
                             step = 1,
                             disabled = false,
                             ariaLabel = 'Slider',
                         }: DsSliderProps) {
    return (
        <Slider
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            aria-label={ariaLabel}
        />
    );
}