import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import DefaultLayout from '../components/layout/DefaultLayout';
const PublicRoutes = (props) => {
  console.log("Publichjghghhggh")
  return (
    <Switch>
      <RouteWithLayout
        component={lazy(() => import('../components/auth/Login'))}
        exact
        layout={DefaultLayout}
        path="/login"
      />
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    </Switch>
  );
};
export default PublicRoutes;
