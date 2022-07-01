import "./App.css";
import "@shopify/polaris/build/esm/styles.css";

import React,{useState,useEffect} from "react";
import LogIn from "./components/login/login";
import Registration from "./components/registration/Registration";
import Dashboard from "./components/dashboard/Dashboard";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  
  // const [currentUser,setCurrentUser]=useState();

  // useEffect(()=>{
  //   setCurrentUser(JSON.parse(localStorage.getItem('User')).name);
  // },[localStorage.getItem("User")])

  return (
  <React.Fragment>
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <Routes>
          <Route path="/login" element={localStorage.getItem("User")?<Navigate to="/"/>:<LogIn />} />
          <Route path="/signup" element={localStorage.getItem("User")?<Navigate to="/"/>:<Registration />} />
          <Route path="/" element={localStorage.getItem("User")? <Dashboard name={JSON.parse(localStorage.getItem("User")).name}/> : <Navigate to="/login"/>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
   </React.Fragment>
  
  );
}

export default App;
