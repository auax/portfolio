import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Outlet,
    Route
} from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects/Projects";
import Menu from "./components/Menu/Menu";

const Layout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    )
};


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            {/*<Route path="503" element={<ServiceUnavailable/>}/>*/}
            {/*<Route path="*" element={<NotFoundPage/>}/>*/}
        </Route>
    )
);

function App() {


    return (
        <RouterProvider router={router}/>
    );
}

export default App;
