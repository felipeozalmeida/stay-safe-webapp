import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Avatar,
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import locale from "date-fns/locale/pt-BR";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
  button: {
    borderRadius: "50%",
    padding: 0,
    textAlign: "center",
  },
  avatar: {
    height: 150,
    width: 150,
  },
});

const AppScreen6 = (props) => {
  const classes = useStyles();
  const [date, setDate] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [, setImageFile] = useState();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImageFile(file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        my={4}
      >
        <input
          type="file"
          accept="image/*"
          id="avatar-button-file"
          className={classes.input}
          onChange={handleImageChange}
        />
        <label htmlFor="avatar-button-file">
          <Button className={classes.button} component="div">
            <Avatar className={classes.avatar} src={imagePreview}>
              Adicionar Foto
            </Avatar>
          </Button>
        </label>
      </Box>
      <Box mb={2}>
        <TextField fullWidth label="Nome" />
      </Box>
      <Box mb={2}>
        <TextField fullWidth label="Email" />
      </Box>
      <Box mb={2}>
        <TextField fullWidth type="tel" label="Telefone" />
      </Box>
      <Box mb={2}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
          <DatePicker
            disableFuture
            fullWidth
            format="dd/MM/yyyy"
            openTo="year"
            label="Data de nascimento"
            views={["year", "month", "date"]}
            value={date}
            onChange={setDate}
          />
        </MuiPickersUtilsProvider>
      </Box>
      <Box mb={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sexo</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={<Radio color="primary" />}
              value="female"
              label="Feminino"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="male"
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>
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
          onClick={props.onShowAppScreen7}
        >
          Confirmar
        </Button>
      </Box>
    </>
  );
};

export default AppScreen6;
