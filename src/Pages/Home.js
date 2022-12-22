import React, { useState } from "react";
import { Box } from "@mui/material";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import Excercises from "../Components/Excercises";

export const DataContext = React.createContext();

export const Home = () => {
  //Those states are going to be used by multiple pages
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [excercises, setExcercises] = useState([]);

  return (
    <DataContext.Provider
      value={{
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
        excercises: excercises,
        setExcercises: setExcercises,
      }}
    >
      <Box sx={{ scrollBehavior: "smooth" }}>
        <Banner />
        <Search />
        <Excercises />
      </Box>
    </DataContext.Provider>
  );
};
