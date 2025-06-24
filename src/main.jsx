import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Landingpage from './Pages/Landingpage.jsx'
// import Feedbackpage from './Pages/Feedbackpage.jsx'



// const router = createBrowserRouter([
//   {path:"/", element: <App/> },
//   {path:"/Feedbackbtn.jsx", element: <Feedbackpage/>}
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <RouterProvider router = {router}/> */}
  </StrictMode>,
)
