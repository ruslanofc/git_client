import {Redirect, Route} from "react-router";
import React from "react";

export default function PrivateRoute({children, token, ...rest}) {

  return(
    <Route
      {...rest}
      render={({location}) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}


