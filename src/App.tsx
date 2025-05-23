import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ButtonPage from './pages/ButtonPage';
import ButtonGroupPage from './pages/ButtonGroupPage';
import CardPage from './pages/CardPage';
import TypographyPage from './pages/TypographyPage';
import AutoCompletePage from './pages/AutoCompletePage';
import DataGridPage from './pages/DataGridPage';
import InputPage from './pages/InputPage';
import AccordionPage from './pages/AccordionPage';
import AppBarPage from './pages/AppBarPage';

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/button" element={<ButtonPage />} />
                    <Route path="/button-group" element={<ButtonGroupPage />} />
                    <Route path="/card" element={<CardPage />} />
                    <Route path="/typography" element={<TypographyPage />} />
                    <Route path="/autocomplete" element={<AutoCompletePage />} />
                    <Route path="/data-grid" element={<DataGridPage />} />
                    <Route path="/input" element={<InputPage />} />
                    <Route path="/accordion" element={<AccordionPage />} />
                    <Route path="/appbar" element={<AppBarPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
