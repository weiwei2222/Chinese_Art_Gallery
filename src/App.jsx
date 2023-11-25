import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Results from "./pages/Results";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/results" element={<Results />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
