import React, { useEffect, useState, useContext } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { giveData } from "../utility/fetchData";
import HorizontalBar from "./HorizontalBar";
import { DataContext } from "../Pages/Home";

const Search = () => {
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState([]);

  const context_data = useContext(DataContext);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await giveData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
      );

      setCategories(["all", ...res]);
    };
    fetchCategories();
  }, []);

  const handleSearch = async () => {
    const res = await giveData("https://exercisedb.p.rapidapi.com/exercises");

    const excercise_list = res.filter((item) => {
      return (
        item.name.toLowerCase().includes(search) ||
        item.target.toLowerCase().includes(search) ||
        item.equipment.toLowerCase().includes(search) ||
        item.bodyPart.toLowerCase().includes(search)
      );
    });

    setSearch("");
    context_data.setExcercises(excercise_list);
    var scroll_id = document.getElementById("exercises");
    scroll_id.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p="20px"
      sx={{ mt: { xs: "100px", sm: "250px", md: "250px", lg: "250px" } }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          mb: { xs: "49px", sm: "49px", md: "49px", lg: "49px" },
        }}
        textAlign="center"
        color="white"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              fontSize: "15px",
            },

            transform: "skewX(-10deg)",
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
          }}
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#383838",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "-4px",
            fontSize: { lg: "25px", xs: "14px" },
            fontFamily: "Nau Sea",
            letterSpacing: "2px",
            transform: "skewX(-10deg)",
            "&:hover": {
              opacity: 1,
              backgroundColor: "#181818",
            },
          }}
          onClick={handleSearch}
        >
          <Box pt="2px" pl="5px" pr="5px" sx={{ border: "1px dashed white" }}>
            {" "}
            SEARCH{" "}
          </Box>
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: { xs: "0px", sm: "10px", md: "20px", lg: "20px" },
          mt: { xs: "30px" },
        }}
      >
        <HorizontalBar data={categories} from="search" />
      </Box>
    </Stack>
  );
};

export default Search;
