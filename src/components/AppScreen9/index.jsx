import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Slider, Typography } from "@material-ui/core";
import { ChevronLeft as ArrowBackIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  rail: {
    backgroundImage: `
      linear-gradient(
        90deg,
        rgb(38, 198, 54) 21.13%,
        rgb(249, 196, 64) 50.11%,
        rgb(200, 11, 11) 88.87%)
    `,
    borderRadius: 10,
    height: 16,
    opacity: 1,
  },
  thumb: {
    marginLeft: -15,
    marginTop: -7,
    height: 30,
    width: 30,
  },
  track: {
    borderRadius: "10px 0 0 10px",
    color: "transparent",
    height: 16,
  },
});

const AppScreen9 = (props) => {
  const classes = useStyles();
  const [showSymptomsA, setShowSymptomsA] = useState(true);
  const [showSymptomsB, setShowSymptomsB] = useState(false);

  const symptomsA = [
    "Mal estar",
    "Febre",
    "Tosse",
    "Dificuldade para respirar",
    "Cansaço",
    "Dores no corpo",
    "Dor de garganta",
  ];
  const symptomsB = [
    "Dores no peito",
    "Boca ou ponta dos dedos roxa",
    "Palidez",
    "Pressão baixa",
    "Respirando muito rápido",
    "Sensação de desmaio",
  ];

  const showNextSymptoms = () => {
    setShowSymptomsA(false);
    setShowSymptomsB(true);
  };

  return (
    <>
      <Box mt={2} mb={6}>
        <Button startIcon={<ArrowBackIcon />} onClick={props.onHideAppScreen9}>
          Voltar
        </Button>
      </Box>
      {/* TODO: refactor the sh*t below */}
      {showSymptomsA && (
        <Box>
          <Box mb={7}>
            {symptomsA.map((symptom, index) => (
              <Box mb={5} key={index}>
                <Box mb={3}>
                  <Typography align="center" variant="h5">
                    {symptom}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Slider classes={classes} min={0} max={10} step={1} />
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            mb={2}
          >
            <Button
              disableElevation
              variant="contained"
              color="primary"
              onClick={showNextSymptoms}
            >
              Próximo
            </Button>
          </Box>
        </Box>
      )}
      {showSymptomsB && (
        <Box>
          <Box mb={7}>
            {symptomsB.map((symptom, index) => (
              <Box mb={5} key={index}>
                <Box mb={3}>
                  <Typography align="center" variant="h5">
                    {symptom}
                  </Typography>
                </Box>
                <Box mx={2}>
                  <Slider classes={classes} min={0} max={10} step={1} />
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-end"
            mb={2}
          >
            <Button
              disableElevation
              variant="contained"
              color="primary"
              onClick={props.onShowAppScreen10}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AppScreen9;
