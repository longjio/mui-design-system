import React from 'react';
import { Typography } from '@mui/material';

type HeadlineProps = {
    children: React.ReactNode;
};

const BodyM = ({ children }: HeadlineProps) => {
    return (
        <Typography
            sx={{
                fontSize: '16px',
                fontWeight: '400',
                fontFamily: 'Pretendard',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
};

export default BodyM;
