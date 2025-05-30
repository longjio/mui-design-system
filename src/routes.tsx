// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    ButtonPage,
    ButtonGroupPage,
    CardPage,
    TypographyPage,
    AutoCompletePage,
    DataGridPage,
    CheckboxPage,
    AccordionPage,
    AppBarPage,
    SwitchPage,
} from './index'; // ./pages/index.ts 덕분에 간결해진 import

// 필요하다면 여기에 코드 스플리팅 (React.lazy)을 적용할 수 있습니다.
// const ButtonPage = React.lazy(() => import('./pages/ButtonPage'));
// ...

export function AppRoutes() {
    return (
        // <React.Suspense fallback={<div>Loading...</div>}> // 코드 스플리팅 시 필요
        <Routes>
            <Route path="/button" element={<ButtonPage />} />
            <Route path="/button-group" element={<ButtonGroupPage />} />
            <Route path="/card" element={<CardPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/autocomplete" element={<AutoCompletePage />} />
            <Route path="/data-grid" element={<DataGridPage />} />
            <Route path="/checkbox" element={<CheckboxPage />} />
            <Route path="/accordion" element={<AccordionPage />} />
            <Route path="/appbar" element={<AppBarPage />} />
            <Route path="/switch" element={<SwitchPage />} />
            {/* 기본 경로 또는 404 페이지 라우트도 여기에 추가할 수 있습니다. */}
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        // </React.Suspense>
    );
}