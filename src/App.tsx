// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { AppRoutes } from './routes'; // 분리된 라우트 설정을 가져옵니다.

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <AppRoutes /> {/* 라우트 컴포넌트를 사용합니다. */}
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;