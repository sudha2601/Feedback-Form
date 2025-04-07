import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form1 from './Form1.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin.jsx';
import MyNavbar from './navbar';
import Footer from './footer.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <MyNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Form1 />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
