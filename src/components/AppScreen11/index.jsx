import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  HomeOutlined as HomeOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
} from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import logo from "../../images/logo.png";
import happyFace from "../../images/happyFace.png";

const useStyles = makeStyles((theme) => ({
  alert: {
    backgroundColor: theme.palette.primary.main,
    flexWrap: "wrap",
  },
  bottomNavigation: {
    bottom: 0,
    left: 0,
    position: "fixed",
    width: "100%",
  },
}));

const AppScreen11 = () => {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="center"
        mt={2}
        mb={4}
      >
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box mb={4}>
        <Alert
          variant="filled"
          severity="info"
          icon={false}
          action={
            <Button color="inherit" size="small">
              Clique aqui
            </Button>
          }
          className={classes.alert}
        >
          <Box fontWeight="fontWeightBold">Responda seu questionário!</Box>
        </Alert>
      </Box>
      <Box display="flex" alignItems="start" justifyContent="center" mb={4}>
        <img src={happyFace} alt="Ilustração de um rosto feliz." />
      </Box>
      <Typography align="center">
        Parabéns, continue se prevenindo e lembre-se de sempre lavar suas mãos.
      </Typography>
      <BottomNavigation className={classes.bottomNavigation}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeOutlinedIcon color="primary" fontSize="large" />}
        />
        <BottomNavigationAction
          label="Perfil"
          icon={<PersonOutlinedIcon color="primary" fontSize="large" />}
        />
        <BottomNavigationAction
          label="Notificações"
          icon={<NotificationsOutlinedIcon color="primary" fontSize="large" />}
        />
      </BottomNavigation>
    </>
  );
};

export default AppScreen11;
