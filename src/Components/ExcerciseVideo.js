import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExcerciseVideo = ({ excerciseVideo, name }) => {
  if (!excerciseVideo.length) return <Loader />;

  return (
    <Box
      id="ex_video"
      sx={{
        marginTop: { lg: "150px", xs: "40px" },
        m: {
          xs: "80px 15px",
          sm: "80px 15px",
          md: "150px 50px",
          lg: "150px 50px",
        },
      }}
    >
      <Typography
        sx={{ fontSize: { lg: "30px", xs: "20px" }, textAlign: "center" }}
        // fontWeight={700}
        color="white"
        mb="33px"
        fontFamily="Nau Sea"
        letterSpacing="2px"
      >
        Watch{" "}
        <span style={{ color: "#32B531", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "80px", xs: "30px" },
          mt: "50px",
        }}
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
      >
        {excerciseVideo?.slice(0, 3)?.map((item, index) => (
          <iframe
            className="video_responsive"
            src={`https://www.youtube.com/embed/${item.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            loading="lazy"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ExcerciseVideo;
