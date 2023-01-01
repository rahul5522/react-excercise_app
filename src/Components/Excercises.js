import React, { useEffect, useState, useContext } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { giveData } from "../utility/fetchData";
import { DataContext } from "../Pages/Home";

import ExcerciseCard from "./ExcerciseCard";
import Loader from "./Loader";

const Excercises = () => {
  const { excercises, setExcercises, selectedCategory, setSelectedCategory } =
    useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [excercisesPerPage] = useState(9);

  const indexOfLastExercise = currentPage * excercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - excercisesPerPage;
  const currentExercises = excercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const Data_fetching = async () => {
      let received_data = [];

      if (selectedCategory === "all") {
        received_data = await giveData(
          "https://exercisedb.p.rapidapi.com/exercises"
        );
      } else {
        received_data = await giveData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedCategory}`
        );
      }

      setExcercises(received_data);
    };

    Data_fetching();
  }, [selectedCategory]);

  useEffect(() => {
    //When new excercise loads Page ndex must be 1
    setCurrentPage(1);
  }, [excercises]);

  const paginate = (event, value) => {
    setCurrentPage(value);
    var scroll_id = document.getElementById("exercises");
    scroll_id.scrollIntoView({ behavior: "smooth" });

    // window.scrollTo({ top: 1750, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{ mt: { xs: "100px", lg: "100px" } }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant="h1"
        // mb="46px"
        color="white"
        textAlign="center"
        fontFamily="My Puma Oblique Outlined"
        textTransform="capitalize"
        sx={{
          opacity: "0.9",
          fontSize: { xs: "3rem", sm: "6rem", md: "6rem", lg: "6rem" },
        }}
      >
        {selectedCategory}
      </Typography>
      <Typography
        variant="h1"
        // position="absolute"
        color="white"
        textAlign="center"
        fontFamily="My Puma Oblique Outlined"
        sx={{
          opacity: "0.2",
          fontSize: { xs: "3rem", sm: "6rem", md: "6rem", lg: "6rem" },
        }}
      >
        Excercises
      </Typography>

      <Stack
        direction="row"
        sx={{
          gap: { lg: "107px", xs: "50px" },
          mt: { xs: "100px", md: "100px", sm: "100px", lg: "150px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((excercise, index) => (
          <ExcerciseCard key={index} excercise={excercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {excercises.length > 9 && (
          <Pagination
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(excercises.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
            sx={{
              button: { color: "white", backgroundColor: "#1e1e1e" },
              "button:hover": { color: "white", backgroundColor: "#111111" },

              "& .MuiPaginationItem-root": {
                color: "white",
                "&.Mui-selected": {
                  backgroundColor: "white",
                  color: "black",
                  // borderRadius: '50%',
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "white",
                  color: "black",
                  // borderRadius: '50%',
                },
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Excercises;
