import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider} from 'react-router-dom';
import Header from './Header/Header.jsx';
import MainPage from "./MainPage.jsx";
import Login from './Login/Login.jsx';
import SignUp from './SignUp/SignUp.jsx';
import Chat from "./Chat/Chat.jsx";
import User from './User/User.jsx';
import { NameProvider } from './context/Name.jsx';
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='' element={<MainPage />}></Route>
            <Route path='Login' element={<Login />}></Route>
            <Route path='SignUp' element={<SignUp />}></Route>
            <Route path='User' element={<User/>}></Route>
            <Route path='Chat' element={<Chat />}></Route>
   </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
        <NameProvider>
        <RouterProvider router={router} />
        </NameProvider>
)
