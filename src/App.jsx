import { Box, Grid } from "@mui/material";
import React from "react";
import AppLayout from "./components/AppLayout";
import WindowTitle from "./components/WindowTitle";
import Dashboard from "./modules/dashboard/views";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SectionRoute from "./components/SectionRoute";

function App() {
  return (
    <BrowserRouter>
      <WindowTitle title="Dasboard" />
      <AppLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
