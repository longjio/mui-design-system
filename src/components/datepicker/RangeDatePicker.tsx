import * as React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface RangeDatePickerProps {
    label?: string;
    value: Date | null;
    onChange: (newValue: Date | null) => void;
    minDate?: Date;
    maxDate?: Date;
}

export default function RangeDatePicker({
                                            label = '날짜 선택',
                                            value,
                                            onChange,
                                            minDate,
                                            maxDate,
                                        }: RangeDatePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={label}
                value={value}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
