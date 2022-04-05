import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Box
        sx={{
          paddingTop: { xs: "56px", sm: "64px", md: "64px", lg: "72.5px" },
          paddingBottom: { xs: "80px", sm: "0" },
        }}
      >
        <div className="px-4 md:px-6 pt-4 md:pt-6 grid grid-cols-1 sm:grid-cols-dashboard sm:gap-6">
          <Sidebar />
          <Main />
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;
