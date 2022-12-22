import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { giveData } from "../utility/fetchData";
import Detail from "../Components/Detail";
import SimilarExcercises from "../Components/SimilarExcercises";
import ExcerciseVideo from "../Components/ExcerciseVideo";

const ExcerciseDetail = () => {
  const [excerciseDetails, setExcerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExcercise = async () => {
      const excerciseUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const excerciseDetailsData = await giveData(
        `${excerciseUrl}/exercises/exercise/${id}`
      );
      setExcerciseDetails(excerciseDetailsData);

      const exerciseVideosData = await giveData(
        `${youtubeUrl}/search?query=${excerciseDetailsData.name} exercise`
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await giveData(
        `${excerciseUrl}/exercises/target/${excerciseDetailsData.target}`
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await giveData(
        `${excerciseUrl}/exercises/equipment/${excerciseDetailsData.equipment}`
      );
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExcercise();
  }, [id]);

  // if (!excerciseDetails) return <div>No Data</div>;
  return (
    <Box>
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
