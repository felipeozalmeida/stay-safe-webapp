import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../images/logo.png";

const useStyles = makeStyles({
  root: {
    paddingLeft: 48,
    paddingRight: 48,
  },
});

const AppScreen10 = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="center"
        mt={2}
        mb={6}
      >
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box p={2} border={1} borderRadius={8} mb={6}>
        <Typography variant="h5" component="p">
          Agradecemos sua colaboração, seus resultados já foram incluidos na
          análise de sintomas.
        </Typography>
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
          classes={classes}
          onClick={props.onShowAppScreen11}
        >
          OK
        </Button>
      </Box>
    </>
  );
};

export default AppScreen10;
