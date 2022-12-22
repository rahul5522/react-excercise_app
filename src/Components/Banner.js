import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Bimage from "../assets/images/gym.jpg";

const Banner = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <img src={Bimage} className="hero-banner-img"></img>
      <Box
        sx={{
          mt: { lg: "170px", xs: "70px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography color="white" fontSize="80px" fontFamily="Poppins">
          GET READY TO
        </Typography>

        <Typography
          fontWeight="1000"
          sx={{ fontSize: { lg: "100px", xs: "50px" } }}
          color="white"
          ml={5}
          mb={5}
          fontFamily="Poppins"
        >
          BURN
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: "100px", xs: "50px" },
            opacity: 0.1,
            position: "absolute",
            display: { lg: "block", xs: "none" },
          }}
          right="100px"
          top="120px"
          fontFamily="My Puma Oblique Outlined"
          color="#FFFAFA	"
        >
          BURN
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: "100px", xs: "50px" },
            opacity: 1,
            position: "absolute",
            display: { lg: "block", xs: "none" },
          }}
          right="100px"
          top="170px"
          fontFamily="My Puma Oblique Outlined"
          color="#FFFAFA	"
        >
          Sweat
        </Typography>
        {/* <Typography
          fontSize="22px"
          lineHeight="35px"
          mb={2}
          mt={2}
          ml={8}
          color="white"
          fontWeight="800"
        >
          Work out your way
        </Typography> */}

        <Button
          variant="outlined"
          href="#exercises"
          sx={{
            backgroundColor: "white",
            fontFamily: "Nau Sea",
            letterSpacing: "1px",
            color: "black",
            fontSize: "30px",
            opacity: 0.5,
            transform: "skewX(-10deg)",
            "&:hover": {
              opacity: 1,
              backgroundColor: "white",
            },
            marginLeft: 1,
          }}
        >
          <Box pt="2px" pl="5px" pr="5px" sx={{ border: "1px dashed black" }}>
            {" "}
            Explore Excercises{" "}
          </Box>
        </Button>

        <Typography
          color="#FFFAFA	"
          fontFamily="My Puma Oblique Outlined"
          sx={{
            opacity: 0.05,
            display: { lg: "block", xs: "none" },
          }}
          fontSize="150px"
          position="absolute"
          top="200px"
          left="950px"
        >
          Excercise
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
