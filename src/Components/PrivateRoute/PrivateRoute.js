import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CashContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  const {client} = useContext(CashContext);
  const [clientInfo] = client;

    return (
      <Route
        {...rest}
        render={({ location }) =>
        clientInfo.isCash ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;