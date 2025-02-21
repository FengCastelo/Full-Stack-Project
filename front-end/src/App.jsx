import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Corrigido: importação do Header

// Lazy loading das páginas para melhorar desempenho
const Home = lazy(() => import("./pages/Home"));
const Artist = lazy(() => import("./pages/Artist"));
const Artists = lazy(() => import("./pages/Artists"));
const Song = lazy(() => import("./pages/Song"));
const Songs = lazy(() => import("./pages/Songs"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      {/* Suspense para carregar as páginas de forma assíncrona */}
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/songs" element={<Songs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

