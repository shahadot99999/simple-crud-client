// import { Children, Component, StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import MainLayout from './layout/MainLayout.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     Children: [
//       {
//         // index: true, Component: App
//         index: true, 
//         element: <App />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     {/* <App /> */}
//     <RouterProvider router={router} />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import UserDetails from './components/UserDetails.jsx';
import UpdateUser from './components/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Use element instead of Component
    children: [ // lowercase 'c' in children
      {
        index: true, 
        element: <App />, // Use element instead of Component
      },
      {
        path: 'users/:id',
        loader: ({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        element: <UserDetails></UserDetails>
      },
       {
        path: '/update/:id',
        loader: ({params})=>fetch(`http://localhost:3000/users/${params.id}`),
        element:<UpdateUser></UpdateUser>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
