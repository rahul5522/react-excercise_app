import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import dumbell from "../assets/images/dumbell.gif";
import benchpress from "../assets/images/benchpress.gif";
import deadlift from "../assets/images/deadlift.gif";

const Detail = ({ excerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = excerciseDetails;

  const extraDetail = [
    {
      icon: dumbell,
      name: bodyPart,
    },
    {
      icon: benchpress,
      name: target,
    },
    {
      icon: deadlift,
      name: equipment,
    },
  ];

  return (
    <Stack
      // direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      direction={"column"}
      sx={{
        backgroundColor: "white",
      }}
      m={{ xs: "20px 15px", sm: "20px 15px", md: "50px 50px", lg: "50px 50px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          p: "10px",
          pb: "20px",
          alignItems: "center",

          backgroundColor: "white",
          border: "1px dashed black",

          // backgroundImage: `url(
          //   "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
          // )`,
          gap: { xs: "20px", sm: "20px", md: "180px", lg: "180px" },
        }}
        // justifyContent="space-between"
        m="15px"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          ml={{ xs: "0px", sm: "0px", md: "90px", lg: "90px" }}
        >
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            className="detail-image"
            width="100%"
          />
        </Box>
        <Stack
          sx={{
            gap: { lg: "25px", xs: "15px" },
            width: { xs: "90%", sm: "90%", md: "60%", lg: "60%" },
          }}
        >
          <Typography
            sx={{ fontSize: { lg: "40px", xs: "20px" } }}
            fontWeight={400}
            textTransform="capitalize"
            fontFamily="Nau Sea"
            letterSpacing="2px"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "20px", xs: "15px" } }}
            color="#4F4C4C"
          >
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best exercises to target your {target}. It will help you
            improve your mood and gain energy.
          </Typography>
          {extraDetail?.map((item, index) => (
            <Stack key={index} direction="row" gap="24px" alignItems="center">
              <Button
                sx={{
                  background: "white",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  //         backgroundImage: `url(
                  //   "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
                  // )`,
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "30px", height: "30px" }}
                  aria-label="XYZ"
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "20px", xs: "15px" } }}
                fontFamily="Nau Sea"
                letterSpacing="2px"
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Detail;
