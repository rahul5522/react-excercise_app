import React from "react";
import "../App.css";
import { Typography, Box, Stack } from "@mui/material";

import HorizontalBar from "./HorizontalBar";
import Loader from "./Loader";

{
  /* <HorizontalBar data={targetMuscleExercises} />
<HorizontalBar data={equipmentExercises} /> */
}

const SimilarExcercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(targetMuscleExercises);
  return (
    <Box
      sx={{
        m: { lg: "0px 45px", xs: "0px 10px", sm: "0px 10px", md: "0px 45px" },
      }}
    >
      <Typography
        sx={{ fontSize: { lg: "30px", xs: "20px" } }}
        // fontWeight={700}
        color="white"
        mb="33px"
        textAlign={"center"}
        fontFamily="Nau Sea"
        letterSpacing="2px"
      >
        Similar{" "}
        <span style={{ color: "#32B531", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {targetMuscleExercises.length !== 0 ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              p: { xs: "0px", sm: "10px", md: "20px", lg: "20px" },
            }}
          >
            <HorizontalBar data={targetMuscleExercises} />
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography
        sx={{
          fontSize: { lg: "30px", xs: "20px" },
          ml: "20px",
          mt: { lg: "100px", xs: "60px" },
        }}
        // fontWeight={700}
        textAlign={"center"}
        fontFamily="Nau Sea"
        letterSpacing="2px"
        color="white"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#32B531", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {equipmentExercises.length !== 0 ? (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              p: { xs: "0px", sm: "10px", md: "20px", lg: "20px" },
            }}
          >
            <HorizontalBar data={equipmentExercises} />
          </Box>
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExcercises;
