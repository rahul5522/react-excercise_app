import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import ExcerciseDetail from "./Pages/ExcerciseDetail";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/excercise/:id" element={<ExcerciseDetail />}></Route>
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
