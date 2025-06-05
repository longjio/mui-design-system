import { Checkbox, FormControlLabel } from '@mui/material';

interface BasicCheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BasicCheckbox({
                                          label = 'Check me',
                                          checked,
                                          onChange,
                                      }: BasicCheckboxProps) {
    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={label}
        />
    );
}
