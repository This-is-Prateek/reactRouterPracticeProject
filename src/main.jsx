import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "github",
      element: <Github />,
      loader: githubLoader  //loads data before component is rendered
    },
    {
      path:"user/:userId",  //takes query data from url
      element:<User />
    }
]}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
