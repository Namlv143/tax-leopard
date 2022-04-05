import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import TaxLeopard from "@/icons/TaxLeopard.svg";
import DashboardIcon from "@/icons/Dashboard.svg";
import InvoicesIcon from "@/icons/Invoices.svg";
import BookkeepingIcon from "@/icons/Bookkeeping.svg";
import LogbookIcon from "@/icons/Logbook.svg";
import TaxReturnIcon from "@/icons/TaxReturn.svg";

const Header = () => {
  const menu = [
    {
      id: "dashboard",
      icon: DashboardIcon,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      id: "invoices",
      icon: InvoicesIcon,
      title: "Invoices",
      path: "/Invoices",
    },
    {
      id: "bookkeeping",
      icon: BookkeepingIcon,
      title: "Bookkeeping",
      path: "/bookkeeping",
    },
    {
      id: "logbook",
      icon: LogbookIcon,
      title: "Logbook",
      path: "/logbook",
    },
    {
      id: "tax-return",
      icon: TaxReturnIcon,
      title: "Tax Return",
      path: "/tax-return",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#000" }}>
        <Toolbar>
          <IconButton
            aria-controls="menu-appbar"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              flexGrow: 1,
              marginRight: { md: "12px" },
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
            }}
          >
            <img src={TaxLeopard} alt="" height={32} width={32} />
            <span style={{ fontWeight: 800, marginLeft: 8 }}>Tax</span>Leopard
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            {menu.map((m) => (
              <Button
                key={m.id}
                sx={{
                  background: "#fff",
                  border: "none",
                  borderRight: "1px solid #000",
                  borderRadius: 0,
                  color: "black",
                  display: "block",
                  my: 1,
                  py: 2,
                  textTransform: "capitalize",
                  width: "136px",
                  "&:hover": {
                    backgroundColor: "#EF4F24",
                    color: "#fff",
                  },
                  "&:first-of-type": {
                    borderRadius: "4px 0px 0px 4px",
                  },
                  "&:last-of-type": {
                    borderRight: "none",
                    borderRadius: "0px 4px 4px 0px",
                  },
                }}
              >
                <div className="flex align-items-center justify-center text-center">
                  <img
                    className="mr-2"
                    src={m.icon}
                    alt=""
                    height={20}
                    width={20}
                  />
                  <span>{m.title}</span>
                </div>
              </Button>
            ))}
          </Box>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default React.memo(Header);
