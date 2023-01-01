import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { giveData } from "../utility/fetchData";
import Detail from "../Components/Detail";
import SimilarExcercises from "../Components/SimilarExcercises";
import ExcerciseVideo from "../Components/ExcerciseVideo";
// import * as yt from "youtube-search-without-api-key";

const ExcerciseDetail = ({ setHide }) => {
  const [excerciseDetails, setExcerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setHide(false);

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    const fetchExcercise = async () => {
      const excerciseUrl = "https://exercisedb.p.rapidapi.com";
      // const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const youtubeUrl = "https://simple-youtube-search.p.rapidapi.com";

      const excerciseDetailsData = await giveData(
        `${excerciseUrl}/exercises/exercise/${id}`
      );
      setExcerciseDetails(excerciseDetailsData);

      const exerciseVideosData = await giveData(
        `${youtubeUrl}/search?query=${excerciseDetailsData.name} exercise&safesearch=false`
      );
      setExerciseVideos(exerciseVideosData.results);
      // const videos = await yt.search(excerciseDetailsData.name);
      // setExerciseVideos(videos);

      const targetMuscleExercisesData = await giveData(
        `${excerciseUrl}/exercises/target/${excerciseDetailsData.target}`
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await giveData(
        `${excerciseUrl}/exercises/equipment/${excerciseDetailsData.equipment}`
      );
      setEquipmentExercises(equimentExercisesData);
      console.log(exerciseVideos);
    };

    fetchExcercise();
  }, [id]);

  // if (!excerciseDetails) return <div>No Data</div>;
  return (
    <Box>
      <Typography
        sx={{ fontSize: { lg: "30px", xs: "20px" } }}
        // fontWeight={700}
        color="white"
        mt="20px"
        mb="20px"
        textAlign={"center"}
        fontFamily="Nau Sea"
        letterSpacing="2px"
      >
        Excercise{" "}
        <span style={{ color: "#32B531", textTransform: "capitalize" }}>
          Details
        </span>{" "}
      </Typography>

      <Detail excerciseDetails={excerciseDetails} />
      <ExcerciseVideo
        excerciseVideo={exerciseVideos}
        name={excerciseDetails.name}
      />
      <SimilarExcercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExcerciseDetail;
