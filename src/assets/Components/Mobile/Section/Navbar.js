import React from "react";
//mui
import { Box, Typography, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
// image icon
import House from "../../img/message.svg";
import Heart from "../../img/heart.svg";
import Teethicon from "../../img/teethicon.svg";
import Buy from "../../img/buy.svg";
import Hat from "../../img/hat.svg";
import Dollar from "../../img/dollar.svg";
import search from "../../img/search.svg";
import alert from "../../img/alert.svg";
import tik from "../../img/tik.svg";
import drMolla from "../../img/drMolla.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AppBar from "@mui/material/AppBar";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: "#F8F8F8",
          width: "100vw",
          paddingTop: "24px",
          borderBottom: "1px solid #eee",
          boxShadow: "none",
          color: "#B2B2B2",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: "120px",
          paddingLeft: "100px",
        }}
        position="static"
      >
        <Container>
          <Toolbar>
            <Box
              sx={{
                height: "auto",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: { xs: "none", md: "row" },
              }}
            >
              <MenuItem display={"flex"} flexDirection={"row"}>
                <img src={House} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  داشبورد
                </Typography>
              </MenuItem>

              <MenuItem display={"flex"} flexDirection={"row"}>
                <img src={Heart} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  مدیریت کلینیک
                </Typography>
              </MenuItem>
              <MenuItem display={"flex"} flexDirection={"row"}>
                <img src={Teethicon} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  لابراتوار
                </Typography>
              </MenuItem>
              <MenuItem display={"flex"} flexDirection={"row"}>
                <img src={Buy} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  فروشگاه
                </Typography>
              </MenuItem>
              <MenuItem display={"flex"} flexDirection={"row"}>
                <img src={Hat} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  آموزش
                </Typography>
              </MenuItem>
              <MenuItem
                display={"flex"}
                flexDirection={"row"}
                justifyContent="space-between"
              >
                <img src={Dollar} />
                <Typography
                  sx={{ paddingRight: "11px" }}
                  textAlign="center"
                  fontSize={"12px"}
                >
                  حسابداری
                </Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
        <Box
          sx={{
            overflow: "hidden",
            marginBottom: "10px",
            width: "328px",
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "16px",
            display: { xs: "none", lg: "flex" },
          }}
        >
          <Box width="48px" height="48px">
            <img
              alt="search"
              style={{
                backgroundColor: "#EFF2FF",
                borderRadius: "8px",
                padding: "15px",
              }}
              src={search}
            />
          </Box>
          <Box width="48px" height="48px" marginRight="8px">
            <img
              alt="alert"
              style={{
                backgroundColor: "#EFF2FF",
                borderRadius: "8px",
                paddingRight: "14.38px",
                paddingLeft: "14.38px",
                paddingTop: "15px",
                paddingBottom: "15px",
              }}
              src={alert}
            />
          </Box>
          <Box width="48px" height="48px" marginRight="8px">
            <img alt="dr" src={drMolla} />
          </Box>
          <Box width="48px" height="48px" marginRight="16px">
            <img
              style={{ marginTop: "13px" }}
              alt="tik"
              width="20px"
              height="20px"
              src={tik}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "8px",
              marginRight: "-20px",
            }}
          >
            <Typography
              sx={{ color: "black", fontWeight: "300", fontSize: "15px" }}
            >
              دکتر رضا ملا
            </Typography>
            <Typography fontSize={"12px"}>دندانپزشک</Typography>
          </Box>
          <KeyboardArrowDownOutlinedIcon
            sx={{
              fill: "blue",
              width: "2rem",
              marginTop: "11px",
              marginRight: "13px",
            }}
          />
        </Box>
      </AppBar>
    </Box>
  );
}
