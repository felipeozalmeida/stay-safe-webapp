import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";
import { ChevronLeft as ArrowBackIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toggleButton: {
    minHeight: 70,
    textTransform: "none",
    width: "100%",
    height: "100%",
  },
});

const AppScreen8 = (props) => {
  const classes = useStyles();

  const availableDiseases = [
    { value: "disease1", text: "Diabetes" },
    { value: "disease2", text: "Doença cardíaca" },
    { value: "disease3", text: "Doença renal crônica" },
    { value: "disease4", text: "Doença respiratória crônica" },
    { value: "disease5", text: "Pressão alta" },
  ];

  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const handleSelectedDiseaseChange = (event, newDisease) => {
    if (selectedDiseases.includes(newDisease)) {
      setSelectedDiseases(selectedDiseases.filter((sd) => sd !== newDisease));
    } else {
      setSelectedDiseases([...selectedDiseases, newDisease]);
    }
  };

  return (
    <>
      <Box my={2}>
        <Button startIcon={<ArrowBackIcon />} onClick={props.onHideAppScreen8}>
          Voltar
        </Button>
      </Box>
      <Box mb={4}>
        <Typography align="center" variant="h5">
          Por gentileza, informe abaixo quais dessas doenças você já possuí.
        </Typography>
      </Box>
      <Box mb={2}>
        <Grid container spacing={2}>
          {availableDiseases.map((disease, index) => (
            <Grid item xs={6} key={index}>
              <ToggleButton
                className={classes.toggleButton}
                value={disease.value}
                selected={selectedDiseases.includes(disease.value)}
                onChange={handleSelectedDiseaseChange}
              >
                {disease.text}
              </ToggleButton>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        mb={2}
      >
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={props.onShowAppScreen9}
        >
          Próximo
        </Button>
      </Box>
    </>
  );
};

export default AppScreen8;
