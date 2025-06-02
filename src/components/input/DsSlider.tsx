import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function ContinuousSlider() {
    const [value, setValue] = React.useState<number>(30);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number); // 슬라이더는 number 또는 number[] 반환 가능
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                <Slider aria-label="Volume" value={value} onChange={handleChange} />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
    );
}
