
import React from 'react';
import {Route, Switch , Router} from 'react-router-dom';


import LoginForm from './components/login/LoginForm';
import HomePage from './components/HomePage';
import Siguiente from './components/principal/Siguiente';












const Routes = () => (
    <Switch>




        <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginForm}/>
  <Route path="/Sigui" component={Siguiente}/>


    />



    </Switch>

);

export default Routes;
