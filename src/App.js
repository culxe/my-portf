import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage"; // Import halaman utama baru
import ProjectDetail from "./components/ProjectDetail"; // Halaman Project Detail
import ProjectDetail2 from "./components/ProjectDetail2";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Halaman utama baru */}
          <Route path="/project-detail" element={<ProjectDetail />} /> {/* Route untuk ProjectDetail */}
          <Route path="/project-detail2" element={<ProjectDetail2 />} /> {/* Route untuk ProjectDetail2 */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
