import { useContext } from "react";
import { UserAuthContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

const PrivateRoute = ({children}) => {
  const {currentUser, loading} = useContext(UserAuthContext)
  const location = useLocation()

  if(loading){
    return <div className="flex justify-center my-10">
      <span className="loading loading-spinner text-error"></span>
    </div>
  }

  if(currentUser){
    return children
  }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;