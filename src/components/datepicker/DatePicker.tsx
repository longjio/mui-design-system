import { TextField, TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface BasicDatePickerProps {
    label?: string;
    value: Date | null;
    onChange: (newValue: Date | null) => void;
}

export default function BasicDatePicker({
                                            label = '날짜 선택',
                                            value,
                                            onChange,
                                        }: BasicDatePickerProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="날짜 선택"
                value={value}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
