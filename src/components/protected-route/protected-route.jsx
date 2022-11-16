import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
//   const login = JSON.parse(sessionStorage.getItem('login'));
const authorization = useSelector((state) => state.userAuthorization.authorization);
  return (
    <Route
      render={() =>
        authorization ? (
          children
        ) : (<Redirect to='/login' />)
      }
    />
  );
}


