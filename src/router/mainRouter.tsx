import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"
import Home from "../pages/HomeScreen/Home"
import ForgotPasword from "../pages/Password/ForgotPasword"

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPasword/>
  },
  {
    path: "/sign-in",
    element: <SignIn/>
  }
])

export default mainRouter