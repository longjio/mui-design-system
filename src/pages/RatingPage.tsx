import React from 'react';
import { Stack, Typography } from '@mui/material';
import DsRating from '../components/input/DsRating'; // DsRating 컴포넌트 임포트

const RatingPage = () => {
    const [controlledValue, setControlledValue] = React.useState<number | null>(3);

    return (
        <Stack spacing={3}>
            <Typography variant="h6">Rating Examples</Typography>

            {/* Controlled Rating */}
            <DsRating
                label="Controlled Rating"
                name="controlled-rating"
                value={controlledValue}
                onChange={(event, newValue) => {
                    setControlledValue(newValue);
                }}
            />

            {/* Uncontrolled Rating */}
            <DsRating
                label="Uncontrolled Rating"
                name="uncontrolled-rating"
                defaultValue={4}
                onChange={(event, newValue) => {
                    console.log('Uncontrolled rating changed to:', newValue);
                }}
            />

            {/* Read-only Rating */}
            <DsRating
                label="Read-only Rating"
                name="read-only-rating"
                value={controlledValue}
                readOnly
            />

            {/* Disabled Rating */}
            <DsRating
                label="Disabled Rating"
                name="disabled-rating"
                value={2}
                disabled
            />

            {/* Rating with Precision */}
            <DsRating
                label="Rating with Precision (0.5)"
                name="precision-rating"
                defaultValue={2.5}
                precision={0.5}
            />
        </Stack>
    );
};

export default RatingPage;