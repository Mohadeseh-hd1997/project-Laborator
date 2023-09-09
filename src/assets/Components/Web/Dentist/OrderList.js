import React from "react";
import {
  Meter,
  Flex,
  lightTheme,
  ProgressBar,
  Provider,
} from "@adobe/react-spectrum";
//mui

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Button, Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
//image
import quots from "../../../img/quots.svg";
import eye from "../../../img/eye.svg";
//style--

const useStyles = makeStyles((theme) => ({
  BoxShadow: {
    boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
  },
  grid: {
    "&>.MuiDataGrid-main": {
      border: "none",
      "&>.MuiDataGrid-columnHeaders": {
        border: "none",
      },

      "& div div div div >.MuiDataGrid-cell": {
        border: "none",
      },
    },
  },
  "& .slick-dots": {
    position: "absolute",
    zIndex: 1,
    top: 20,
  },
}));

//information tab

const rows = [
  {
    id: 1,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 2,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9873,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 3,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9874,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 4,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9875,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 5,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9876,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 6,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9877,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 7,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9878,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 8,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9879,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 9,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 10,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 11,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 12,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 13,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 14,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 15,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
  {
    id: 16,
    OrderName: "رضا ملا",
    OrderImg: require("../../../img/p2.png"),
    OrderID: 9872,
    detail: [
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 60,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " post",
        TeethNumber: "LL1",
        status: 1,
        EndDate: "1402/02/18",
      },
      {
        TypeTreatment: " crown",
        TeethNumber: "LL2",
        status: 50,
        EndDate: "1402/02/18",
      },
    ],
  },
];

export default function OrderList(props) {
  const classes = useStyles();
  const [scroll, setScroll] = React.useState(false);
  //datagrid
  const { children, svalue, index, ...other } = props;
  const theme = useTheme();
  // Acrodian
  const [expanded, setExpanded] = React.useState(false);
  const handleChangeAcc = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box width="1410px">
      <Box
        display={"flex"}
        flexDirection={"row"}
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          height: "105px",
          alignItems: "center",
        }}
      >
        <svg
          width="100"
          height="90"
          viewBox="-10 -20 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.833252 5.04167C0.833252 2.32627 3.03452 0.125 5.74992 0.125H10.6666C13.382 0.125 15.5833 2.32627 15.5833 5.04167V9.95833C15.5833 12.6737 13.382 14.875 10.6666 14.875H5.74992C3.03452 14.875 0.833252 12.6737 0.833252 9.95833V5.04167ZM25.4166 7.4997C25.4167 4.7843 27.6181 2.58317 30.3335 2.58333L94.2502 2.58718C96.9656 2.58734 99.1667 4.78874 99.1666 7.50414C99.1664 10.2195 96.965 12.4207 94.2496 12.4205L30.333 12.4167C27.6176 12.4165 25.4164 10.2151 25.4166 7.4997ZM0.833252 34.5417C0.833252 31.8263 3.03452 29.625 5.74992 29.625H10.6666C13.382 29.625 15.5833 31.8263 15.5833 34.5417V39.4583C15.5833 42.1737 13.382 44.375 10.6666 44.375H5.74992C3.03452 44.375 0.833252 42.1737 0.833252 39.4583V34.5417ZM25.4166 36.9997C25.4167 34.2843 27.6181 32.0832 30.3335 32.0833L94.2502 32.0872C96.9656 32.0873 99.1667 34.2887 99.1666 37.0041C99.1664 39.7195 96.965 41.9207 94.2496 41.9205L30.333 41.9167C27.6176 41.9165 25.4164 39.7151 25.4166 36.9997ZM0.833252 64.0417C0.833252 61.3263 3.03452 59.125 5.74992 59.125H10.6666C13.382 59.125 15.5833 61.3263 15.5833 64.0417V68.9583C15.5833 71.6737 13.382 73.875 10.6666 73.875H5.74992C3.03452 73.875 0.833252 71.6737 0.833252 68.9583V64.0417ZM25.4166 66.4997C25.4167 63.7843 27.6181 61.5832 30.3335 61.5833L94.2502 61.5869C96.9656 61.587 99.1667 63.7884 99.1666 66.5038C99.1664 69.2192 96.965 71.4203 94.2496 71.4202L30.333 71.4167C27.6176 71.4165 25.4164 69.2151 25.4166 66.4997Z"
            fill="#F5F5F5"
          />
        </svg>
        <Typography
          variant="p"
          sx={{
            color: "#2143DD",
            fontWeight: "bolder",
            paddingRight: "34px",
            fontSize: "34px",
          }}
        >
          لیست سفارشات
        </Typography>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          marginTop: "16px",
          backgroundColor: "white",
          borderRadius: "8px",
          height: "1410px",
          paddingTop: "24px",
          paddingLeft: "64px",
          paddingRight: "64px",
          paddingBottom: "56px",
        }}
      >
        <Box
          sx={{
            width: "inherit",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <TextField
              InputProps={{
                sx: {
                  [`& fieldset`]: {
                    border: "none",
                  },
                  borderColor: "#F5F5F5",
                  backgroundColor: "#F5F5F5",
                  width: "inherit",
                  height: "48px",
                  borderRadius: "8px",
                  border: "none",
                },
                startAdornment: (
                  <InputAdornment sx={{ marginRight: "10px" }} position="end">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              id="outlined-search"
              placeholder="جستجو"
              type="search"
            />
            <Button
              variant="text"
              sx={{
                height: "48px",
                paddingTop: "14px",
                paddingLeft: "29px",
                paddingRight: "16px",
                paddingBottom: "14px",
                marginRight: "8px",
              }}
            >
              <FilterListOutlinedIcon sx={{ marginLeft: "13px" }} />
              فیلترها
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundcolor: "#E5E5E580",
            paddingTop: "56px",
            width: "inherit",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            className={classes.BoxShadow}
            sx={{ width: "100%", height: "1200px" }}
          >
            <div
              style={{
                marginTop: "24px",
                width: "inherit",
                height: "1100px",
                border: "none",
                borderRadius: "8px",
              }}
              role="tabpanel"
              hidden={svalue !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
            >
              <TableContainer
                component={Paper}
                sx={{
                  height: "800px",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0.4em",
                  },
                  "&::-webkit-scrollbar-track": {
                    boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0,0,0,.1)",
                    outline: "1px solid slategrey",
                  },
                }}
              >
                <Table
                  sx={{ minWidth: 650, direction: "rtl" }}
                  aria-label="simple table"
                >
                  <TableHead sx={{ marginBottom: "16px" }}>
                    <TableRow
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      border={0}
                    >
                      <TableCell
                        sx={{ border: 0 }}
                        width={"25%"}
                        align="center"
                      >
                        نام سفارش دهنده
                      </TableCell>
                      <TableCell
                        sx={{ border: 0 }}
                        width={"25%"}
                        align="center"
                      >
                        شماره سفارش
                      </TableCell>
                      <TableCell
                        sx={{ border: 0 }}
                        width={"25%"}
                        align="center"
                      >
                        تصویر اسکن
                      </TableCell>
                      <TableCell
                        sx={{ border: 0 }}
                        width={"25%"}
                        align="center"
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        height="159px"
                        display="flex"
                        flexDirection="row"
                        justifycontent="space-between"
                        alignitems="center"
                        aligncontent="center"
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          colspan="4"
                          sx={{
                            p: 0,
                            "&:last-child td, &:last-child th": { border: 0 },
                            borderBottom: "none",
                          }}
                        >
                          <Accordion
                            expanded={expanded === row.id}
                            onChange={handleChangeAcc(row.id)}
                            sx={{
                              borderRadius: "8px",
                              marginTop: "16px",
                              border: 0,
                              boxShadow: 0,
                              width: "100%",
                              "& .Mui-expanded": {
                                backgroundColor: "#F5F5F5",
                                borderRadius: "8px",
                                marginTop: "54px",
                                paddingTop: "24px",
                                paddingBottom: "24px",
                              },
                            }}
                          >
                            <AccordionSummary
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              sx={{
                                p: 0,
                                paddingRight: "16px",
                                height: "64px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  width: "100%",
                                  textAlign: "right",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{ width: "25%", marginRight: "129px" }}
                                >
                                  {row.OrderName}
                                </Typography>
                                <Typography
                                  sx={{ width: "25%", marginRight: "90px" }}
                                >
                                  {row.OrderID}
                                </Typography>
                                <img
                                  sx={{ width: "25%", marginRight: "39px" }}
                                  src={row.OrderImg}
                                />
                                <Typography
                                  sx={{
                                    width: "25%",
                                    color: "#2143DD",
                                    marginRight: "184px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                  }}
                                >
                                  <span>اطلاعات بیشتر</span>
                                  <ExpandMoreIcon
                                    sx={{ marginRight: "15px" }}
                                  />
                                </Typography>
                              </Box>
                            </AccordionSummary>
                            <AccordionDetails
                              sx={{
                                backgroundColor: "#F5F5F5",
                                marginTop: "24px",
                              }}
                            >
                              <Card
                                sx={{
                                  height: "content",
                                  paddingRight: "24px",
                                  paddingLeft: "24px",
                                }}
                              >
                                <TableContainer>
                                  <Table
                                    sx={{
                                      direction: "rtl",
                                      marginTop: "16px",
                                    }}
                                    aria-label="simple table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell
                                          sx={{
                                            border: 0,
                                            paddingRight: "104px",
                                          }}
                                          width={"25%"}
                                          align="right"
                                        >
                                          نوع درمان
                                        </TableCell>
                                        <TableCell
                                          sx={{ border: 0 }}
                                          width={"25%"}
                                          align="center"
                                        >
                                          وضعیت
                                        </TableCell>
                                        <TableCell
                                          sx={{ border: 0 }}
                                          width={"25%"}
                                          align="center"
                                        >
                                          تاریخ اتمام
                                        </TableCell>
                                        <TableCell
                                          sx={{ border: 0 }}
                                          width={"25%"}
                                          align="center"
                                        >
                                          اقدام
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {row.detail.map((detail) => (
                                        <TableRow
                                          key={detail.id}
                                          sx={{
                                            "&:last-child td, &:last-child th":
                                              { border: 0 },
                                          }}
                                        >
                                          <TableCell
                                            sx={{
                                              border: 0,
                                              display: "flex",
                                              flexDirection: "row",
                                              justifyContent: "space-between",
                                              paddingRight: "104px",
                                            }}
                                            width={"25%"}
                                          >
                                            <p
                                              style={{
                                                width: "30%",
                                                marginLeft: "40px",
                                                marginTop: "19px",
                                              }}
                                            >
                                              {detail.TypeTreatment}
                                            </p>
                                            <Box
                                              width="50%"
                                              marginRight="9.5px"
                                            >
                                              <img src={quots} />
                                              <p
                                                style={{
                                                  position: "relative",
                                                  top: "-51px",
                                                  right: "23px",
                                                  color: "white",
                                                }}
                                              >
                                                {detail.TeethNumber}
                                              </p>
                                            </Box>
                                          </TableCell>
                                          <TableCell
                                            sx={{ border: 0 }}
                                            width={"25%"}
                                            align="center"
                                          >
                                            <Provider
                                              theme={lightTheme}
                                              height="100%"
                                            >
                                              <Flex
                                                height="100%"
                                                UNSAFE_style={{
                                                  direction: "rtl",
                                                }}
                                              >
                                                <Meter
                                                  variant="positive"
                                                  label="."
                                                  value={detail.status}
                                                />
                                              </Flex>
                                            </Provider>
                                          </TableCell>
                                          <TableCell
                                            sx={{ border: 0 }}
                                            width={"25%"}
                                            align="center"
                                          >
                                            {detail.EndDate}
                                          </TableCell>
                                          <TableCell
                                            sx={{ border: 0 }}
                                            width={"25%"}
                                            align="center"
                                          >
                                            <button
                                              width="48px"
                                              height="48px"
                                              style={{
                                                marginLeft: "12px",
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                backgroundcolor: "#EFF2FF",
                                              }}
                                            >
                                              <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                                                  stroke="#2143DD"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                                <path
                                                  d="M12.0004 5C7.52281 5 3.73253 7.94288 2.45825 12C3.73251 16.0571 7.52281 19 12.0005 19C16.4781 19 20.2684 16.0571 21.5426 12C20.2684 7.94291 16.4781 5 12.0004 5Z"
                                                  stroke="#2143DD"
                                                  stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"
                                                />
                                              </svg>
                                            </button>
                                            <button
                                              width="48px"
                                              height="48px"
                                              style={{
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                backgroundcolor: "#EFF2FF",
                                              }}
                                            >
                                              <svg
                                                width="25"
                                                height="24"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  clip-rule="evenodd"
                                                  d="M17.4539 2.88161C18.6254 1.71004 20.5249 1.71003 21.6965 2.88161C22.8681 4.05318 22.8681 5.95268 21.6965 7.12425L14.8345 13.9862C14.8123 14.0085 14.7902 14.0306 14.7684 14.0523C14.0698 14.7511 13.6306 15.1905 13.1237 15.5444C12.6745 15.858 12.19 16.1178 11.6802 16.3184C11.105 16.5449 10.4959 16.6677 9.52739 16.863C9.49718 16.8691 9.46663 16.8753 9.43571 16.8815L8.94779 16.9799C8.62936 17.0442 8.29957 16.9498 8.06341 16.7267C7.82724 16.5037 7.71411 16.1799 7.76005 15.8583L7.8075 15.5261C7.81243 15.4916 7.8173 15.4575 7.82211 15.4238C7.97597 14.3459 8.0727 13.6682 8.29586 13.0271C8.49356 12.4591 8.76365 11.9189 9.09943 11.42C9.47846 10.8567 9.96257 10.3727 10.7326 9.60292C10.7566 9.57885 10.781 9.55449 10.8056 9.52985L17.4539 2.88161ZM16.25 6.91391L12.2199 10.9441C11.3534 11.8105 11.0165 12.1534 10.7587 12.5366C10.5188 12.893 10.3259 13.2788 10.1847 13.6845C10.0888 13.9601 10.0247 14.2512 9.94674 14.7341C10.4159 14.6327 10.6895 14.559 10.9477 14.4574C11.3118 14.3141 11.6579 14.1285 11.9787 13.9045C12.3236 13.6637 12.6344 13.3579 13.4203 12.572L17.6642 8.32812L16.25 6.91391ZM19.0784 6.91391L17.6642 5.4997L18.8681 4.29582C19.2586 3.9053 19.8918 3.9053 20.2823 4.29582C20.6728 4.68635 20.6728 5.31951 20.2823 5.71004L19.0784 6.91391ZM7.91146 2.9997L11.75 2.9997C12.3023 2.9997 12.75 3.44741 12.75 3.9997C12.75 4.55198 12.3023 4.9997 11.75 4.9997H7.95C7.37345 4.9997 7.00118 5.00047 6.71784 5.02362C6.44617 5.04582 6.34546 5.0835 6.29601 5.10869C6.10785 5.20456 5.95487 5.35754 5.859 5.54571C5.8338 5.59515 5.79612 5.69587 5.77393 5.96753C5.75078 6.25087 5.75 6.62314 5.75 7.1997V16.7997C5.75 17.3763 5.75078 17.7485 5.77393 18.0319C5.79612 18.3035 5.8338 18.4042 5.859 18.4537C5.95487 18.6418 6.10785 18.7948 6.29601 18.8907C6.34546 18.9159 6.44617 18.9536 6.71784 18.9758C7.00117 18.9989 7.37345 18.9997 7.95 18.9997H17.55C18.1266 18.9997 18.4988 18.9989 18.7822 18.9758C19.0538 18.9536 19.1545 18.9159 19.204 18.8907C19.3922 18.7948 19.5451 18.6418 19.641 18.4537C19.6662 18.4042 19.7039 18.3035 19.7261 18.0319C19.7492 17.7485 19.75 17.3763 19.75 16.7997V12.4997C19.75 11.9474 20.1977 11.4997 20.75 11.4997C21.3023 11.4997 21.75 11.9474 21.75 12.4997V16.8383C21.75 17.3654 21.75 17.8202 21.7194 18.1947C21.6871 18.5901 21.6158 18.9833 21.423 19.3617C21.1354 19.9262 20.6765 20.3851 20.112 20.6727C19.7336 20.8655 19.3404 20.9368 18.945 20.9691C18.5705 20.9997 18.1157 20.9997 17.5886 20.9997H7.91144C7.3843 20.9997 6.92954 20.9997 6.55497 20.9691C6.15963 20.9368 5.76641 20.8655 5.38803 20.6727C4.82355 20.3851 4.3646 19.9262 4.07698 19.3617C3.88419 18.9833 3.81287 18.5901 3.78057 18.1947C3.74997 17.8202 3.74998 17.3654 3.75 16.8382V7.16115C3.74998 6.634 3.74997 6.17924 3.78057 5.80467C3.81287 5.40932 3.88419 5.01611 4.07698 4.63773C4.3646 4.07324 4.82354 3.6143 5.38803 3.32668C5.76641 3.13388 6.15963 3.06257 6.55497 3.03027C6.92955 2.99966 7.38431 2.99968 7.91146 2.9997Z"
                                                  fill="#2143DD"
                                                />
                                              </svg>
                                            </button>
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </Card>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                fullWidth
                onClick={() => setScroll(true)}
                sx={{
                  height: "59px",
                  backgroundColor: "#EDF0FC",
                  color: "#2143DD",
                  fontsize: "18px",
                  fontWeight: "bolder",
                  marginTop: "18px",
                }}
                variant="contained"
              >
                مشاهده بیشتر
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
