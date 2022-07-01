import "./App.css";
import "@shopify/polaris/build/esm/styles.css";

import React from "react";
import LogIn from "./components/login/login";
import Registration from "./components/registration/Registration";
import Dashboard from "./components/dashboard/Dashboard";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  
  return (
  <React.Fragment>
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <Routes>
          <Route path="/login" element={localStorage.getItem("User")?<Navigate to="/" replace/>:<LogIn />} />
          <Route path="/signup" element={localStorage.getItem("User")?<Navigate to="/" replace/>:<Registration />} />
          <Route path="/" element={localStorage.getItem("User")? <Dashboard name={JSON.parse(localStorage.getItem("User")).name}/> : <Navigate to="/login" replace/>} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
   </React.Fragment>
  
  );
}

export default App;
