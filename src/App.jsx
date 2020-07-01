import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
import AppScreen1 from './components/AppScreen1'
import AppScreen2 from './components/AppScreen2'
import AppScreen3 from './components/AppScreen3';
import AppScreen4 from './components/AppScreen4';
import AppScreen5 from './components/AppScreen5';

const App = () => {

  const [showAppScreen1, setShowAppScreen1] = useState(true)
  const [showAppScreen2, setShowAppScreen2] = useState(false)
  const [showAppScreen3, setShowAppScreen3] = useState(false)
  const [showAppScreen4, setShowAppScreen4] = useState(false)
  const [showAppScreen5, setShowAppScreen5] = useState(false)

  const toggleAppScreen2 = () => {
    setShowAppScreen1(!showAppScreen1)
    setShowAppScreen2(!showAppScreen2)
  }

  const toggleAppScreen3 = () => {
    setShowAppScreen2(!showAppScreen2)
    setShowAppScreen3(!showAppScreen3)
  }

  const toggleAppScreen4 = () => {
    setShowAppScreen3(!showAppScreen3)
    setShowAppScreen4(!showAppScreen4)
  }

  const toggleAppScreen5 = () => {
    setShowAppScreen4(!showAppScreen4)
    setShowAppScreen5(!showAppScreen5)
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
            onShowAppScreen4={toggleAppScreen4}
          />
        }
        {showAppScreen4 &&
          <AppScreen4 onShowAppScreen5={toggleAppScreen5} />
        }
        {showAppScreen5 &&
          <AppScreen5 />
        }
      </Container>
    </>
  );
}

export default App;
