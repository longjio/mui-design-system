import React from 'react';
import { Typography } from '@mui/material';

type HeadlineProps = {
    children: React.ReactNode;
};

const TitleXS = ({ children }: HeadlineProps) => {
    return (
        <Typography
            sx={{
                fontSize: '20px',
                fontWeight: '600',
                fontFamily: 'Pretendard',
                lineHeight: 1.5,
            }}
        >
            {children}
        </Typography>
    );
};

export default TitleXS;
