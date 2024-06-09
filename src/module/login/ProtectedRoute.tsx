import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

interface ProtectedRouteProps {
  element: JSX.Element;
  redirectTo: string;
}

function ProtectedRoute({ element, redirectTo }: ProtectedRouteProps) {
  const { user } = useContext(userContext);
  return user?.password !== "" && user?.userName !== "" ? (
    element
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
