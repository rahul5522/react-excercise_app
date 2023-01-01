import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import { Home } from "./Pages/Home";
import ExcerciseDetail from "./Pages/ExcerciseDetail";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [hide, setHide] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navbar hide={hide} />

      <Routes>
        <Route path="/" element={<Home setHide={setHide} />}></Route>
        <Route
          path="/excercise/:id"
          element={<ExcerciseDetail setHide={setHide} />}
        ></Route>
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
