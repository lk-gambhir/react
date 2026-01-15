import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contacts/contacts'
import User from './components/user/user'
import Github, { githubinfoloader } from './components/github/github'
// const router = createBrowserRouter(
//   [
//     {
//       path:'/',
//       element: <Layout />,
//       children: [
//         {
//           path: "",
//           element: <Home />
//         },
//         {
//           path: "about",
//           element: <About />
//         },
//         {
//           path: "contacts",
//           element: <Contact />
//         }
//       ]
//     }
//   ]
// )
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contacts' element={<Contact />} />
      <Route loader={githubinfoloader} 
      path='github' element={<Github />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
