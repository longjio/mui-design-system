import React from 'react';
import { Typography } from '@mui/material';

type HeadlineProps = {
    children: React.ReactNode;
};

const BodyXS = ({ children }: HeadlineProps) => {
    return (
        <Typography
            sx={{
                fontSize: '12px',
                fontWeight: '400',
                fontFamily: 'Pretendard',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
};

export default BodyXS;
