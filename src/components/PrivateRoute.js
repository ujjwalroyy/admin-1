import { Navigate } from "react-router-dom"

const PrivateRoute = ({Component}) => {
    // const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('isLoggedIn'))
    console.log("User", user);
    
    return user ? <Component/> : <Navigate to="/login" />
}
export default PrivateRoute