import React from 'react';
import { Typography } from '@mui/material';

type HeadlineProps = {
    children: React.ReactNode;
};

const BodyS = ({ children }: HeadlineProps) => {
    return (
        <Typography
            sx={{
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Pretendard',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
};

export default BodyS;
