import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import * as LazyComponent from "../utils/lazyLoaded";
import PrivateRoute from "./privateRoute";
import { PATH_NAME } from "./pathNames";

const Routes = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Suspense fallback={"Loading ..."}>
      <Switch>
        {/*  Private routes, user must be authrized to navigate to it */}
        <PrivateRoute
          component={() => <LazyComponent.Home />}
          path={PATH_NAME.HOME}
          exact
        />
        {/* Public routes that doesn't need any auth */}
        {/* <LazyComponent.SignIn path={PATH_NAME.SIGN_IN} exact /> */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
