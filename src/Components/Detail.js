import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ excerciseDetails }) => {
  const { bodyPart, gifUrl, name, target, equipment } = excerciseDetails;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      sx={{
        backgroundColor: "white",
      }}
      m="50px 50px"
    >
      <Box
        gap="60px"
        sx={{
          display: "flex",
          flexDirection: { lg: "row" },
          p: "10px",
          alignItems: "center",

          backgroundColor: "white",

          backgroundImage: `url(
            "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='2' stroke-dasharray='9' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
          )`,
        }}
        justifyContent="space-between"
        m="30px"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            className="detail-image"
            width="100%"
          />
        </Box>
        <Stack sx={{ gap: { lg: "25px", xs: "15px" } }}>
          <Typography
            sx={{ fontSize: { lg: "50px", xs: "20px" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "25px", xs: "18px" } }}
            color="#4F4C4C"
          >
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best <br /> exercises to target your {target}. It will
            help you improve your <br /> mood and gain energy.
          </Typography>
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#FFF2DB",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "25px", height: "25px" }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{ fontSize: { lg: "25px", xs: "15px" } }}
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
