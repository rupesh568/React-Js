import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './routes/App.jsx';
import CreatePost, { createpostAction } from './Components/CreatePost.jsx';
import PostList from './Components/PostList.jsx';
import {postLoader} from "./Components/PostList.jsx";
const router=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[
        {path:"/",element:<PostList/>,loader:postLoader},
        {path:"/create-post",element:<CreatePost/>,action:createpostAction}
    ],
  
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    
  </StrictMode>,
)
