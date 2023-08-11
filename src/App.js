import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import FrontPage from './components/Frontpage';
import AddBook from './components/AddBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/add' element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
