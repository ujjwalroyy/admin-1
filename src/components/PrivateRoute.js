import { Navigate } from "react-router-dom"

const PrivateRoute = ({ Component }) => {
    // const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === "true";
     const user = JSON.parse(localStorage.getItem('user'));

    console.log("User:", user);


    return isLoggedIn ? <Component /> : <Navigate to="/login" />
}
export default PrivateRoute


