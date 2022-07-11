import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Layout from './components/Layout/Layout'
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
