// src/theme.ts
import 'pretendard/dist/web/static/pretendard.css';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Pretendard',
            '-apple-system',
            'BlinkMacSystemFont',
            'system-ui',
            'Roboto',
            '"Helvetica Neue"',
            '"Apple SD Gothic Neo"',
            '"Noto Sans KR"',
            'sans-serif',
        ].join(','),
        button: {
            textTransform: 'none',
        },
    },
    spacing: 4,
});

export default theme;
