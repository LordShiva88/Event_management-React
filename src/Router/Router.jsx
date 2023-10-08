import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EventDetails from "../Components/WhyUs/EventDetails/EventDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shopping from "../Pages/Shopping/Shopping";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/event.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/event.json"),
      },
      {
        path: "/shopping",
        element: (
          <PrivateRoute>
            <Shopping></Shopping>
          </PrivateRoute>
        ),
        loader: () => fetch("/products.json"),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        loader: () => fetch("/event.json"),
      },
    ],
  },
]);

export default router;
