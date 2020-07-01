import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
import AppScreen1 from './components/AppScreen1'
import AppScreen2 from './components/AppScreen2'
import AppScreen3 from './components/AppScreen3';

const App = () => {

  const [showAppScreen1, setShowAppScreen1] = useState(true)
  const [showAppScreen2, setShowAppScreen2] = useState(false)
  const [showAppScreen3, setShowAppScreen3] = useState(false)

  const toggleAppScreen2 = () => {
    setShowAppScreen1(!showAppScreen1)
    setShowAppScreen2(!showAppScreen2)
  }

  const toggleAppScreen3 = () => {
    setShowAppScreen2(!showAppScreen2)
    setShowAppScreen3(!showAppScreen3)
  }

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xs">
        {showAppScreen1 &&
          <AppScreen1 onShowAppScreen2={toggleAppScreen2} />
        }
        {showAppScreen2 &&
          <AppScreen2
            onHideAppScreen2={toggleAppScreen2}
            onShowAppScreen3={toggleAppScreen3}
          />
        }
        {showAppScreen3 &&
          <AppScreen3
            onHideAppScreen3={toggleAppScreen3}
          />
        }
      </Container>
    </>
  );
}

export default App;
