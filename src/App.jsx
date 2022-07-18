import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Layout from './components/Layout/Layout'
import BoardProvider from "./context/BoardContext";
import Board from "./pages/Board";
import BgProvider from "./context/BgContext";

function App() {
  return (
    <BoardProvider>
      <BgProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<Board />} />
          </Routes>
        </Layout>
      </BgProvider>
    </BoardProvider>
  );
}

export default App;
