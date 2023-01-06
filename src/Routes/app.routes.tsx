import React from "react";

import {
    Routes,
    Route
} from 'react-router-dom';

import {
    Agents,
    Guns,
    Maps,
    Home
} from '../Pages/index';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/guns" element={<Guns />} />
        <Route path="/maps" element={<Maps />} />
    </Routes>
);

export default AppRoutes