import React from "react";
import { AppProvider, AppContext } from "./context/UseContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

function MainLayout() {
  const { theme } = React.useContext(AppContext);
  
  return (
    <div className="app-container" data-theme={theme}>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
