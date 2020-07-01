import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
import AppScreen1 from './components/AppScreen1'
import AppScreen2 from './components/AppScreen2'

const App = () => {

  const [showAppScreen1, setShowAppScreen1] = useState(true)
  const [showAppScreen2, setShowAppScreen2] = useState(false)

  const handleShowAppScreen2 = () => {
    setShowAppScreen1(false)
    setShowAppScreen2(true)
  }

  const handleHideAppScreen2 = () => {
    setShowAppScreen1(true)
    setShowAppScreen2(false)
  }

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xs">
        {showAppScreen1 &&
          <AppScreen1 onShowAppScreen2={handleShowAppScreen2} />
        }
        {showAppScreen2 &&
          <AppScreen2 onHideAppScreen2={handleHideAppScreen2} />
        }
      </Container>
    </>
  );
}

export default App;
