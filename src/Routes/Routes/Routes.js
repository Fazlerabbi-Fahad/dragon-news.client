import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Login/Register/Register";
import AcceptTermsandCondition from '../../Pages/Shared/AcceptTermsandCondition/AcceptTermsandCondition';
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/news'),
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <AcceptTermsandCondition></AcceptTermsandCondition>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
]);
