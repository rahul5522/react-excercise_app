import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/icons/icon3.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "space-between",
      }}
      px="20px"
      position="relative"
      alignItems="center"
    >
      <Link to="/">
        <img
          src={Logo}
          style={{ width: "60px", height: "60px", margin: "0px 70px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="25px"
        alignItems="flex-end"
        fontFamily="Nau Sea"
        letterSpacing="1px"
        margin="0px 70px"
        sx={{
          display: { sm: "flex", xs: "none", md: "flex", lg: "flex" },
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid white",
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: "none", color: "white" }}>
          Excercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
