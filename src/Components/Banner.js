import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import Bimage from "../assets/images/gym.jpg";
import Bimage2 from "../assets/images/gym2.jpg";

const Banner = () => {
  return (
    <Box
      sx={{ overflow: "hidden", pb: { sm: "30px", lg: "30px", md: "30px" } }}
    >
      <Box
        sx={{ display: { xs: "none", sm: "block", md: "block", lg: "block" } }}
      >
        <img src={Bimage} className="hero-banner-img"></img>
      </Box>

      <Box
        sx={{ display: { xs: "block", sm: "none", md: "none", lg: "none" } }}
      >
        <img src={Bimage2} className="mobile-banner"></img>
      </Box>
      <Box
        sx={{
          mt: { lg: "170px", xs: "400px", sm: "170px", md: "170px" },
          ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
      >
        <Typography
          fontWeight="1000"
          color="white"
          sx={{ fontSize: { lg: "60px", xs: "35px" } }}
          fontFamily="Poppins"
        >
          GET READY TO
        </Typography>

        <Typography
          fontWeight="1000"
          sx={{ fontSize: { lg: "100px", xs: "50px" } }}
          color="white"
          // ml={5}
          mb={2}
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
          right="-230px"
        >
          Excercise
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
            fontSize: { xs: "15px", md: "25px", lg: "25px", sm: "25px" },

            transform: "skewX(-10deg)",
            "&:hover": {
              opacity: 1,
              backgroundColor: "white",
            },
            // marginLeft: 1,
          }}
        >
          <Box pt="2px" pl="5px" pr="5px" sx={{ border: "1px dashed black" }}>
            {" "}
            Explore Excercises{" "}
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
