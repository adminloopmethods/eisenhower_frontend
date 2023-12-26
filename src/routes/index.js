import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Loader from '../components/utilities/Loader';

const Routes = ({ isAuthenticated }) => {
    return (
        <Suspense fallback={<Loader />}>
            {
                (isAuthenticated === true)
                    ? <Route path="/" name="PrivateRoutes" component={PrivateRoutes} />
                    : <Route path="/" name="PublicRoutes" component={PublicRoutes} />
            }
        </Suspense>
    );
};

export default Routes;