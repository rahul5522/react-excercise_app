import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExcerciseCard = ({ excercise }) => {
  let str;
  const length = excercise.name.length;
  if (length > 20) {
    str = excercise.name.slice(0, 20);
    str = str.concat(`...`);
  } else {
    str = excercise.name;
  }
  return (
    <Link className="exercise-card" to={`/excercise/${excercise.id}`}>
      <Box
        m="10px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          border: "1px dashed black",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={excercise.gifUrl} alt={excercise.name} loading="lazy" />
        </Box>

        <Stack
          direction="row"
          justifyContent="space-around"
          gap="2rem"
          p="0px 5px"
        >
          <Box
            display="flex"
            sx={{
              border: "1px dashed black",
              transform: "skewX(-10deg)",
              p: "0.2rem 1rem",
              wordBreak: "break-word",
              color: "black",
              textAlign: "justify",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ fontFamily: "Nau Sea", letterSpacing: "2px" }}>
              {excercise.bodyPart}
            </Typography>
          </Box>

          <Box
            display="flex"
            sx={{
              border: "1px dashed black",
              transform: "skewX(-10deg)",
              p: "0.2rem 1rem",
              wordBreak: "break-word",
              color: "black",
              textAlign: "justify",
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Typography sx={{ fontFamily: "Nau Sea", letterSpacing: "2px" }}>
              {excercise.target}
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ mb: "5px", textOverflow: "ellipsis" }}>
          <Typography
            color="#000"
            sx={{
              fontSize: { lg: "20px", xs: "16px" },
              fontFamily: "Nau Sea",
              letterSpacing: "2px",
            }}
            textAlign="center"
            mb="5px"
            textTransform="capitalize"
            textDecoration="none "
            // position="absolute"

            wordBreak="break-word"
          >
            {str}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default ExcerciseCard;
