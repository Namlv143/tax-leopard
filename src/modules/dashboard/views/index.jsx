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
        <div className="tw-px-4 md:tw-px-6 tw-pt-4 md:tw-pt-6 tw-grid tw-grid-cols-1 sm:tw-grid-cols-dashboard sm:tw-gap-6">
          <Sidebar />
          <Main />
        </div>
      </Box>
    </div>
  );
};

export default Dashboard;
