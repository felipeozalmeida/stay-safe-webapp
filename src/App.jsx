import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core'
import AppScreen1 from './components/AppScreen1'
import AppScreen2 from './components/AppScreen2'
import AppScreen3 from './components/AppScreen3';
import AppScreen4 from './components/AppScreen4';
import AppScreen5 from './components/AppScreen5';
import AppScreen6 from './components/AppScreen6';
import AppScreen7 from './components/AppScreen7';
import AppScreen8 from './components/AppScreen8';

const App = () => {

  const [state, setState] = useState({
    showAppScreen1: false,
    showAppScreen2: false,
    showAppScreen3: false,
    showAppScreen4: false,
    showAppScreen5: false,
    showAppScreen6: false,
    showAppScreen7: false,
    showAppScreen8: true,
  })

  const toggleAppScreen = (back, next) => {
    setState({
      ...state,
      [`showAppScreen${back}`]: !state[`showAppScreen${back}`],
      [`showAppScreen${next}`]: !state[`showAppScreen${next}`]
    })
  }

  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xs">
        {state.showAppScreen1 &&
          <AppScreen1 onShowAppScreen2={() => toggleAppScreen(1, 2)} />
        }
        {state.showAppScreen2 &&
          <AppScreen2
            onHideAppScreen2={() => toggleAppScreen(2, 1)}
            onShowAppScreen3={() => toggleAppScreen(2, 3)}
          />
        }
        {state.showAppScreen3 &&
          <AppScreen3
            onHideAppScreen3={() => toggleAppScreen(3, 2)}
            onShowAppScreen4={() => toggleAppScreen(3, 4)}
          />
        }
        {state.showAppScreen4 &&
          <AppScreen4 onShowAppScreen5={() => toggleAppScreen(4, 5)} />
        }
        {state.showAppScreen5 &&
          <AppScreen5 onShowAppScreen6={() => toggleAppScreen(5, 6)} />
        }
        {state.showAppScreen6 &&
          <AppScreen6 onShowAppScreen7={() => toggleAppScreen(6, 7)} />
        }
        {state.showAppScreen7 &&
          <AppScreen7 onShowAppScreen8={() => toggleAppScreen(7, 8)} />
        }
        {state.showAppScreen8 &&
          <AppScreen8 />
        }
      </Container>
    </>
  );
}

export default App;
