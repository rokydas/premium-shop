import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CashContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  const [cashMemoInfo, setCashMemoInfo] = useContext(CashContext);

    return (
      <Route
        {...rest}
        render={({ location }) =>
        cashMemoInfo.isCash ? (
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