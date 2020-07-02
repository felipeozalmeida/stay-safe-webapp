import React, { useState } from 'react'
import {
  Box, Button, Checkbox, FormControlLabel, Typography
} from '@material-ui/core'

const AppScreen5 = (props) => {
  const [state, setState] = useState({
    checked: false
  })

  const handleChange = (event) => {
    setState({ ...state, checked: event.target.checked })
  }

  return (
    <>
      <Box my={2}>
        <Typography
          align="center"
          component="h1"
          variant="h4"
        >
          Regras
        </Typography>
      </Box>
      <Box border={1} p={1} m={1}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum id
          sem id semper ac sed risus. Tortor amet, pretium morbi eget. Elit
          lectus feugiat viverra nunc gravida malesuada tristique. Elit
          accumsan cras libero sagittis, mus. Neque a nunc donec vulputate
          ornare sed sed. Ac ut enim tempus vel fermentum libero consequat mi.
          In etiam aenean feugiat gravida orci accumsan placerat commodo.
          Lectus sagittis ante ut mauris quis faucibus luctus pharetra.
          Adipiscing cursus sit.
        </Typography>
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="center" mb={1}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={state.checked}
              onChange={handleChange}
            />
          }
          label="Aceito os termos de uso"
        />
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="center" mb={2}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={props.onShowAppScreen6}
        >
          Próximo
        </Button>
      </Box>
    </>
  )
}

export default AppScreen5
