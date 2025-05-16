import React from 'react';
import { Stack } from '@mui/material';

// 커스텀 타이포그래피 컴포넌트 import
import { HeadlineL, HeadlineM, HeadlineS } from '../components/typography';

const TypographyPage = () => {
    return (
        <Stack spacing={2}>
            <HeadlineL>HeadLine L Pretendard Bold 48</HeadlineL>
            <HeadlineM>HeadLine M Pretendard Bold 40</HeadlineM>
            <HeadlineS>HeadLine S Pretendard Bold 36</HeadlineS>
        </Stack>
    );
};

export default TypographyPage;
