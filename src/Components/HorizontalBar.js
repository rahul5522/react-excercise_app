import React, { useContext, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import Rrun from "../assets/icons/Rarrow.png";
import Lrun from "../assets/icons/LeftAr.png";
import LW from "../assets/icons/LeftArf.png";
import RW from "../assets/icons/Rarrowf.png";
import gym2 from "../assets/images/gym2.jpg";
import gym3 from "../assets/images/gym3.jpg";
import gym4 from "../assets/images/gym10.jpg";
import gym5 from "../assets/images/gym4.jpg";
import gym6 from "../assets/images/gym9.jpg";
import gym7 from "../assets/images/gym9.jpeg";
import gym8 from "../assets/images/gym8.jpg";
import gym9 from "../assets/images/gym11.jpg";
import gym10 from "../assets/images/gym1.jpg";
import gym11 from "../assets/images/gym13.jpg";
import gym1 from "../assets/images/gym12.jpg";
import ExcerciseCard from "./ExcerciseCard";

const HorizontalBar = ({ data, from }) => {
  const c = useRef(null);

  const leftHandle = () => {
    c.current.scrollLeft -= 250;
  };

  const rightHandle = () => {
    c.current.scrollLeft += 250;
  };

  const BodyPartImage = [
    {
      text: "All",
      img: gym2,
    },
    {
      text: "",
      img: gym3,
    },
    {
      text: "",
      img: gym4,
    },
    {
      text: "",
      img: gym5,
    },
    {
      text: "",
      img: gym6,
    },
    {
      text: "",
      img: gym7,
    },
    {
      text: "",
      img: gym8,
    },
    {
      text: "",
      img: gym9,
    },
    {
      text: "",
      img: gym10,
    },
    {
      text: "",
      img: gym11,
    },
    {
      text: "",
      img: gym1,
    },
  ];

  if (from === "search") {
    for (let i = 0; i < 11; i++) {
      BodyPartImage[i].text = data[i];
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: { sm: "0.5rem", xs: "0.2rem", md: "2rem", lg: "2rem" },
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          color: "Black",
          backgroundColor: "white",
          height: { xs: "30px", sm: "50px", md: "50px", lg: "50px" },
          // width: { xs: "10px", sm: "10px" },
          fontFamily: "Nau Sea",
          letterSpacing: "2px",
          transform: "skewX(-10deg)",
          "&:hover": {
            color: "white",
            opacity: 1,
            backgroundColor: "#383838",
            backgroundImage: `url(${LW})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
          backgroundImage: `url(${Lrun})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={leftHandle}
      ></Button>
      <Box
        ref={c}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {from === "search"
          ? BodyPartImage.map((item, index) => (
              <Box
                key={index}
                itemID={item.id || item}
                title={item.id || item}
                sx={{
                  m: {
                    xs: "0px 20px",
                    sm: "0px 40px",
                    md: "0px 40px",
                    lg: "0px 40px",
                  },
                }}
              >
                <CategoryCard item={item.text} img={item.img}></CategoryCard>
              </Box>
            ))
          : data.slice(0, 20).map((excercise, index) => (
              <Box
                key={index}
                sx={{
                  m: {
                    xs: "0px 20px",
                    sm: "0px 40px",
                    md: "0px 40px",
                    lg: "0px 40px",
                  },
                  background: "white",
                }}
              >
                <ExcerciseCard excercise={excercise}></ExcerciseCard>
              </Box>
            ))}
      </Box>
      <Button
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          color: "Black",
          backgroundColor: "white",
          height: { xs: "30px", sm: "50px", md: "50px", lg: "50px" },
          fontFamily: "Nau Sea",
          letterSpacing: "2px",
          transform: "skewX(-10deg)",
          "&:hover": {
            color: "white",
            opacity: 1,
            backgroundColor: "#383838",
            backgroundImage: `url(${RW})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
          backgroundImage: `url(${Rrun})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        onClick={rightHandle}
      ></Button>
    </Box>
  );
};

export default HorizontalBar;
