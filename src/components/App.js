import React from 'react';
import { Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import ForceSide from './ForceSide';
import styled  from 'styled-components';

const AppDiv = styled.div`
  display: grid;
  text-align: center;
  height: 100vh;
  width: 100%;
`;

const App = () => {
    return (
      <AppDiv>
        <Switch>
          <Route exact path="/force-challenge">
            <Welcome />
          </Route>
          <Route exact path="/force-side">
            <ForceSide />
          </Route>
        </Switch>
      </AppDiv>
    );
  }

export default App;
