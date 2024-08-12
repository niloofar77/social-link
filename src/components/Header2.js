import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { Brightness3 as MoonIcon } from "@mui/icons-material";
import "./Header.css";

export const Header2 = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", m: 2, p: 6 }}>
          <IconButton aria-label="dark mode">
            <MoonIcon className="icon_moon" />
          </IconButton>
          <Typography className="label_moon" variant="body2" sx={{ ml: 1 }}>
            تاریک
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h4" component="div">
            حساب کاربری
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography>تنظیمات کاربری</Typography>
            <Link underline="hover" color="inherit" href="/">
              کاربر
            </Link>
            <Link underline="hover" color="inherit" href="/">
              خانه
            </Link>
          </Breadcrumbs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header2;
