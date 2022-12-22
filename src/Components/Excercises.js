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

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "100px" } }} mt="50px" p="20px">
      <Typography
        variant="h1"
        mb="46px"
        color="white"
        textAlign="center"
        fontFamily="My Puma Oblique Outlined"
        textTransform="capitalize"
        sx={{ opacity: "0.9" }}
      >
        {selectedCategory}
      </Typography>
      <Typography
        variant="h1"
        position="absolute"
        color="white"
        textAlign="center"
        fontFamily="My Puma Oblique Outlined"
        top="1800px"
        left="500px"
        sx={{ opacity: "0.1" }}
      >
        Excercises
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" }, mt: { lg: "150px" } }}
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
            size="large"
            sx={{
              button: { color: "black", backgroundColor: "white" },
              "button:hover": { color: "white", backgroundColor: "grey" },
              "button:focus": { color: "white", backgroundColor: "grey" },
              "& .MuiPaginationItem-root": {
                "&.Mui-selected": {
                  background: "grey",
                  color: "white",
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
