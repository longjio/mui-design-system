import 'pretendard/dist/web/static/pretendard.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 실제 애플리케이션 루트 컴포넌트
import { CssBaseline, ThemeProvider } from '@mui/material';
import { GlobalStyles } from '@mui/material';
import theme from './theme'; // 테마 설정

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/*<GlobalStyles styles={{ body: { fontFamily: "'Pretendard', sans-serif" } }} />*/}
            <App /> {/* App.tsx의 라우팅과 페이지 구성이 이곳에서 렌더링됩니다. */}
        </ThemeProvider>
    </React.StrictMode>
);
