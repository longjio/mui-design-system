import React from 'react';
import { Typography } from '@mui/material';

type HeadlineProps = {
    children: React.ReactNode;
};

const BodyL = ({ children }: HeadlineProps) => {
    return (
        <Typography
            sx={{
                fontSize: '20px',
                fontWeight: '400',
                fontFamily: 'Pretendard',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
};

export default BodyL;
