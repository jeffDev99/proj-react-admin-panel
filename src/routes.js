import DashboardLayout from "./Layout/DashboardLayout/DashboardLayout.jsx"
import AuthLayout from "./Layout/AuthLayout/AuthLayout.jsx"
import MissingData from "./Pages/MissingData/MissingData.js"
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Register/Register.jsx"
import NotFound from "./Pages/NotFound/NotFound.jsx"


const routes = [
    // dashboard Layout routes
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "missingdata", element: <MissingData /> },
            {path :"*"  , element : <NotFound/>},
            // { path: "newuser", element: <NewUser /> },
            // { path: "products", element: <Products /> },
            // { path: "product/:productId", element: <Product /> },
        ],
    },
    // Auth Layout routes
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "/", element: <Login /> }, // Default route for AuthLayout
            {path :"*"  , element : <NotFound/>},
        ],
    },
    {path :"*"  , element : <NotFound/>}
];

export default routes