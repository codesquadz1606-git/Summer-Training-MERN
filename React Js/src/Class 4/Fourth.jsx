import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Error from './Error'
import Navbar from './Navbar'
import WB from './Children/WebsiteBuilding'
import AB from './Children/AgentsBuilding'
import DM from './Children/Digital'
export default function Fourth() {
    // Routing : Creating the diffrent pages and routing them
    // react-router-dom

    const routes = createBrowserRouter([
        {
            path: "/", // home path
            element:<>
            <Navbar/>
             <Home />
            </>
        },
        {
            path: "/about",
            element: <>
            <Navbar/>
             <About />
            </>
        },
        {
            path: "/contact",
            element: <>
            <Navbar/>
             <Contact />
            </>
        },
        {
            path: "/services",
            element: <>
            <Navbar/>
             <Services />
            </>,
            children:[
                {
                    path:"wb",
                    element:<WB/>
                },
                {
                    path:"ab",
                    element:<AB/>
                },
                {
                    path:"dm",
                    element:<DM/>
                }
            ]
        },
        {
            path:"*", // any unregistered path
            element:<Error/>
        }
    ])// here I will write multiple routes : / , /about , /contact ....
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}