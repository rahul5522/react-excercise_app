import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/icons/icon3.png";
import F_Logo from "../assets/images/dumb_logo.png";

const Navbar = ({ hide }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "space-between",
      }}
      // px="20px"
      position="relative"
      alignItems="center"
    >
      <Link to="/">
        <Stack
          sx={{
            margin: {
              xs: "0px 20px",
              sm: "0px 20px",
              md: "0px 70px",
              lg: "0px 70px",
            },
          }}
        >
          <img src={F_Logo} className="logo" />
        </Stack>
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
          margin: {
            xs: "0px 20px",
            sm: "0px 20px",
            md: "0px 70px",
            lg: "0px 70px",
          },
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
        {hide ? (
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "white" }}
          >
            Excercises
          </a>
        ) : (
          <a
            href="#ex_video"
            style={{ textDecoration: "none", color: "white" }}
          >
            Excercises
          </a>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
