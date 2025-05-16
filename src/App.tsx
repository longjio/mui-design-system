import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import TypographyPage from './pages/TypographyPage';

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/button" element={<ButtonPage />} />
                    <Route path="/card" element={<CardPage />} />
                    <Route path="/typography" element={<TypographyPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
