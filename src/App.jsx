import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Layout from './components/Layout/Layout'
import BoardProvider from "./context/BoardContext";

function App() {
  return (
    <BoardProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </BoardProvider>
  );
}

export default App;
