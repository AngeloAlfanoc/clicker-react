
import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/home'

const Routes = () => {
  return (
    <React.Fragment>
      <main>
        <Route path='/' component={Home} />

      </main>
    </React.Fragment>
  );
}

export default Routes;