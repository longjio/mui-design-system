import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { AppRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    {/* AppRoutes 안에 있는 Route들은 Outlet 자리에 표시됨 */}
                    {AppRoutes()}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
