import React from "react";
import { DataContext } from "../Pages/Home";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import All from "../assets/icons/All.png";

const CategoryCard = ({ item, img }) => {
  const selected = React.useContext(DataContext);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        selected.selectedCategory === item
          ? {
              border: "6px solid white",
              background: "#fff",
              // borderBottomLeftRadius: "20px",
              width: { xs: "200px", sm: "270px", md: "270px", lg: "270px" },
              height: { xs: "200px", sm: "282px", md: "282px", lg: "282px" },
              cursor: "pointer",
              // gap: "20px",
              // transform: "skewX(-10deg)",
            }
          : {
              border: "2px solid white",
              background: "#fff",
              // borderBottomLeftRadius: "20px",
              width: { xs: "200px", sm: "270px", md: "270px", lg: "270px" },
              height: { xs: "200px", sm: "282px", md: "282px", lg: "282px" },
              cursor: "pointer",
              // gap: "20px",
              // transform: "skewX(-10deg)",
            }
      }
      onClick={() => {
        selected.setSelectedCategory(item);
        var scroll_id = document.getElementById("exercises");
        scroll_id.scrollIntoView({ behavior: "smooth" });

        // window.scrollTo({ top: 1750, left: 100, behavior: "smooth" });
      }}
    >
      <img src={img} alt="dumbbell" style={{ width: "100%", height: "100%" }} />

      <Typography
        fontSize="26px"
        fontFamily="Nau Sea"
        letterSpacing="1px"
        color="black"
        textTransform="capitalize"
        mt="2px"
        mb="2px"
        sx={{ fontSize: { xs: "20px", sm: "26px", md: "26px", lg: "26px" } }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default CategoryCard;
