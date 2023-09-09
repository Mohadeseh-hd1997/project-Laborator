import React from "react";
import {
  Meter,
  Flex,
  lightTheme,
  ProgressBar,
  Provider,
} from "@adobe/react-spectrum";
//slider
import Slider from "react-slick";
//mui
import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
// image icon
import PlusIcon from "../../../img/PlusIcon.svg";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import scanteeth1 from "../../../img/scanteeth1.svg";
import scanteeth2 from "../../../img/scanteeth2.svg";
import scanteeth3 from "../../../img/scanteeth3.svg";
import avatar_wrap from "../../../img/location.svg";
import instructions from "../../../img/instructions.svg";
import order from "../../../img/order.svg";
import smartLab1 from "../../../img/smartLab.png";
import smartLab2 from "../../../img/smartLab2.png";
import smartLab3 from "../../../img/smartLab3.png";
import LeftArrow from "../../../img/LeftArrow.svg";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import CardBg from "../../../img/CardBg.svg";
//style
const useStyles = makeStyles((theme) => ({
  "& .spectrum-BarLoader-fill": {
    background: "red",
  },
  BoxShadow: {
    boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
  },
  grid: {
    "&>.MuiDataGrid-main": {
      "&>.MuiDataGrid-columnHeaders": {
        borderBottom: "none",
      },

      "& div div div div >.MuiDataGrid-cell": {
        borderBottom: "none",
      },
    },
  },
}));
//rating label

const labels = {
  1: "۱",
  1.5: "۱.۵",
  2: "۲",
  2.5: "۲.۵",
  3: "۳",
  3.5: "۳.۵",
  4: "۴",
  4.5: "۴.۵",
  5: "۵",
};
//lab data
const LabData = [
  {
    img: smartLab1,
    location: "مشهد",
    clinicName: "اسمارت",
    rate: 5,
  },
  {
    img: smartLab2,
    location: "یزذ",
    clinicName: "اسمارت",
    rate: 3.5,
  },
  {
    img: smartLab3,
    location: "تبریز",
    clinicName: "فرداد",
    rate: 4.5,
  },
  {
    img: smartLab1,
    location: "اصفهان",
    clinicName: "نواندیشان",
    rate: 4,
  },
  {
    img: smartLab2,
    location: "تهران",
    clinicName: "رهام",
    rate: 1,
  },
  {
    img: smartLab3,
    location: "شیراز",
    clinicName: "فردا",
    rate: 2.5,
  },
];
const LabOrder = [
  {
    Status: 72,
    Name: "مجید الهی",
    Number: 1,
    Duration: "2 روز کاری",
  },
  {
    Status: 91,
    Name: "مجید الهی",
    Number: 2,
    Duration: "2 روز کاری",
  },
  {
    Status: 50,
    Name: "مجید الهی",
    Number: 3,
    Duration: "2 روز کاری",
  },
];
//information tab
const rows = [
  {
    id: 1,
    number: 100,
    type: "اسکن دیجیتال",
    status: 1,
    headerAlign: "center",
  },
  {
    id: 2,
    number: 100,
    type: "اسکن دیجیتال",
    status: 2,
    headerAlign: "center",
  },
  {
    id: 3,
    number: 100,
    type: "اسکن دیجیتال",
    status: 1,
    headerAlign: "center",
  },
  {
    id: 4,
    number: 100,
    type: "اسکن دیجیتال",
    status: 0,
    headerAlign: "center",
  },
  {
    id: 5,
    number: 100,
    type: "اسکن دیجیتال",
    status: 2,
    headerAlign: "center",
  },
  {
    id: 6,
    number: 100,
    type: "اسکن دیجیتال",
    status: 1,
    headerAlign: "center",
  },
  {
    id: 7,
    number: 100,
    type: "اسکن دیجیتال",
    status: 0,
    headerAlign: "center",
  },
  {
    id: 8,
    number: 100,
    type: "اسکن دیجیتال",
    status: 2,
    headerAlign: "center",
  },
  {
    id: 9,
    number: 100,
    type: "اسکن دیجیتال",
    status: 1,
    headerAlign: "center",
  },
];

export default function DashboardWeb(props) {
  var settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    easing: "linear",
  };

  const classes = useStyles();
  const { children, svalue, index, ...other } = props;
  const [scroll, setScroll] = React.useState(false);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <Box width="1410px">
      <Box sx={{ marginTop: "32px", width: "1410px" }}>
        <Box
          sx={{
            paddingBottom: "24px",
            paddingTop: "24px",
            paddingLeft: "48px",
            paddingRight: "24px",
            borderRadius: "8px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ width: "20%", display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                marginBottom: "24px",
                borderRadius: "8px",
                width: "content",
                paddingBottom: "21px",
                paddingTop: "21px",
                height: "72px",
                color: "white",
                alignItems: "center",
                backgroundColor: "#1C39BB",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ paddingRight: "14px", paddingLeft: "90px" }}>
                ثبت درخواست
              </Typography>
              <img
                src={PlusIcon}
                style={{ padding: "5px", marginLeft: "29px" }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                marginBottom: "24px",
                borderRadius: "8px",
                width: "content",
                paddingBottom: "21px",
                paddingTop: "21px",
                height: "147.75px",
                color: "#132885",
                alignItems: "flex-start",
                backgroundImage: "linear-gradient(To left,white,#D5DBEB)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
              }}
            >
              <Box
                sx={{
                  backgroundPositionY: "50%",
                  width: "-webkit-fill-available",
                  backgroundImage: `url(${CardBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "bolder",
                    paddingRight: "24px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                  }}
                >
                  ۲۴۰{" "}
                </Typography>
                <Typography
                  sx={{ paddingRight: "24px", paddingBottom: "16px" }}
                >
                  {" "}
                  مجموعه درخواست ها
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                marginBottom: "24px",
                borderRadius: "8px",
                width: "content",
                paddingBottom: "21px",
                paddingTop: "21px",
                height: "147.75px",
                color: "#132885",
                boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundPositionY: "50%",
                  width: "-webkit-fill-available",
                  backgroundImage: `url(${CardBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "bolder",
                    paddingRight: "24px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                  }}
                >
                  ۵
                </Typography>
                <Typography
                  sx={{ paddingRight: "24px", paddingBottom: "34px" }}
                >
                  {" "}
                  در انتظار تایید
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                marginBottom: "24px",
                borderRadius: "8px",
                width: "content",
                paddingBottom: "21px",
                paddingTop: "21px",
                height: "147.75px",
                color: "#132885",
                boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundPositionY: "50%",
                  width: "-webkit-fill-available",
                  backgroundImage: `url(${CardBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "bolder",
                    paddingRight: "24px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                  }}
                >
                  ۵
                </Typography>
                <Typography
                  sx={{ paddingRight: "24px", paddingBottom: "34px" }}
                >
                  {" "}
                  نیاز به اصلاح
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                width: "content",
                paddingBottom: "21px",
                paddingTop: "21px",
                height: "147.75px",
                color: "#132885",
                boxShadow: "1px -1px 112px -48px rgba(179,166,166,0.75)",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundPositionY: "50%",
                  width: "-webkit-fill-available",
                  backgroundImage: `url(${CardBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "bolder",
                    paddingRight: "24px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                  }}
                >
                  ۲
                </Typography>
                <Typography
                  sx={{ paddingRight: "24px", paddingBottom: "34px" }}
                >
                  {" "}
                  لغو شده
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              marginRight: "24px",
            }}
          >
            <TextField
              InputProps={{
                sx: {
                  borderColor: "#F5F5F5",
                  backgroundColor: "#F5F5F5",
                  width: "inherit",
                  height: "70px",
                  borderRadius: "8px",
                },
                startAdornment: (
                  <InputAdornment sx={{ marginRight: "10px" }} position="end">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <DocumentScannerOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              id="outlined-search"
              placeholder="جستجوی کد رهگیری"
              type="search"
            />

            <Box
              sx={{
                marginTop: "24px",
                marginBottom: "24px",
                bgcolor: "white",
                width: "100%",
                borderRadius: "8px",
              }}
            >
              <AppBar
                position="static"
                sx={{
                  border: "1px solid #4D69E4",
                  boxShadow: "none",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  color: "#4D69E4",
                }}
              >
                <Tabs
                  TabIndicatorProps={{
                    style: { display: "none" },
                  }}
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  visibleScrollbar="false"
                >
                  <Tab label="  درخواست ها" />

                  <Tab
                    label="سفارشات"
                    sx={{ borderRight: "1px solid #7e92eb" }}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <div
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    border: "1px solid #E5E5E5",
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
                      height: "500px",
                      overflowY: scroll == true ? "scroll" : "hidden",
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
                      <TableHead>
                        <TableRow>
                          <TableCell
                            width={"33%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            شماره
                          </TableCell>
                          <TableCell
                            width={"33%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            نوع درخواست
                          </TableCell>
                          <TableCell
                            width={"34%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            وضعیت{" "}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              height: "70px",
                            }}
                          >
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Typography fontSize="17px" fontWeight="500">
                                {row.number}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Typography fontSize="17px" fontWeight="500">
                                {row.type}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Typography
                                textAlign="center"
                                width="115px"
                                fontSize="17px"
                                fontWeight="700"
                                paddingX="16px"
                                paddingY="16px"
                                sx={{
                                  marginRight: "149px",
                                  borderRadius: "4px",
                                  color:
                                    row.status == 0
                                      ? "#2143DD"
                                      : row.status == 1
                                      ? "#EC8A00"
                                      : "#C30000",
                                  backgroundColor:
                                    row.status == 0
                                      ? "#edf0fc"
                                      : row.status == 1
                                      ? "#fdf6eb"
                                      : "#faebeb",
                                }}
                              >
                                {row.status == 0
                                  ? "در صف تایید"
                                  : row.status == 1
                                  ? "نیاز به اصلاح"
                                  : "لغو شده"}
                              </Typography>
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
                <div
                  style={{
                    marginTop: "24px",
                    width: "100%",
                    border: "1px solid #E5E5E5",
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
                      height: "500px",
                      overflowY: scroll == true ? "scroll" : "hidden",
                    }}
                  >
                    <Table
                      sx={{ minWidth: 650, direction: "rtl" }}
                      aria-label="simple table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell
                            width={"25%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            شماره
                          </TableCell>
                          <TableCell
                            width={"25%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            نام
                          </TableCell>
                          <TableCell
                            width={"26%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            {" "}
                            وضعیت سفارش{" "}
                          </TableCell>
                          <TableCell
                            width={"24%"}
                            align="center"
                            fontSize="16px"
                            fontWeight="500"
                          >
                            {" "}
                            زمان باقی مانده{" "}
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {LabOrder.map((row) => (
                          <TableRow
                            key={row.Number}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                              height: "70px",
                            }}
                          >
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Typography fontSize="17px" fontWeight="500">
                                {row.Number}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Typography fontSize="17px" fontWeight="500">
                                {row.Name}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              <Provider theme={lightTheme} height="100%">
                                <Flex
                                  height="100%"
                                  UNSAFE_style={{ direction: "rtl" }}
                                >
                                  <Meter
                                    variant="positive"
                                    label="."
                                    value={row.Status}
                                  />
                                </Flex>
                              </Provider>
                            </TableCell>

                            <TableCell sx={{ p: 0, textAlign: "center" }}>
                              {row.Duration}
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
              </SwipeableViews>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "37px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "50%",
            marginLeft: "24px",
            borderRadius: "8px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#C29552",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            backgroundImage: "linear-gradient(To left,#2143DD,#132885)",
          }}
        >
          <Box width="65%">
            <Typography
              sx={{
                paddingTop: "48px",
                paddingRight: "24px",
                fontSize: "36px",
                color: "white",
                fontWeight: "900",
              }}
            >
              نکات ثبت سفارش
            </Typography>
            <Typography
              sx={{
                paddingTop: "24px",
                fontSize: "20px",
                paddingRight: "24px",
                paddingBottom: "48px",
                color: "white",
                fontWeight: "900",
              }}
            >
              خواهشمند است جهت تسهیل در فرآیند ثبت سفارش، دستورالعمل تدوین شده
              را مطالعه نمایید.
            </Typography>
          </Box>
          <Box width="35%" align="left" marginRight="25px">
            <img src={instructions} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            borderRadius: "8px",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#C29552",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
            backgroundImage: "linear-gradient(To left,#2143DD,#132885)",
          }}
        >
          <Box width="65%">
            <Typography
              sx={{
                paddingTop: "48px",
                paddingRight: "24px",
                fontSize: "36px",
                color: "white",
                fontWeight: "900",
              }}
            >
              دستورالعمل های کاربردی
            </Typography>
            <Typography
              sx={{
                paddingTop: "24px",
                fontSize: "20px",
                paddingRight: "24px",
                paddingBottom: "48px",
                color: "white",
                fontWeight: "900",
              }}
            >
              خواهشمند است جهت تسهیل در فرآیند ثبت سفارش، دستورالعمل تدوین شده
              را مطالعه نمایید.
            </Typography>
          </Box>
          <Box width="35%" align="left" marginRight="25px">
            <img src={order} />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "32px",
          paddingLeft: "48px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "32px",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="40px"
          marginBottom="40px"
        >
          <Typography
            sx={{
              paddingRight: "24px",
              fontWeight: "700",
              fontSize: "24px",
              color: "black",
            }}
          >
            لابراتوار هایی که اخیرا به آنها درخواست داده اید
          </Typography>
          <Button
            fontSize="18px"
            fontWeight="400"
            endIcon={
              <KeyboardBackspaceOutlinedIcon
                sx={{ marginRight: "8px", fontsize: "18px" }}
              />
            }
          >
            مشاهده همه
          </Button>
        </Box>

        <Slider {...settings}>
          {LabData.map((item) => (
            <Card sx={{ maxWidth: "438px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt="Paella dish"
                  sx={{ borderRadius: "16px" }}
                />
                <CardContent sx={{ textAlign: "left", padding: "24px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row !important",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginTop: "25px",
                      marginBottom: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexdiretion: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={item.rate}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Typography gutterBottom variant="h6" component="div">
                        {labels[item.rate]}
                      </Typography>
                    </Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="700"
                      variant="p"
                      component="div"
                    >
                      {item.clinicName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      marginTop: "25px",
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      fontWeight="500"
                      marginRight="4px"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.location}
                    </Typography>
                    <img src={avatar_wrap} />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "32px",
          paddingLeft: "48px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "32px",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="40px"
          marginBottom="40px"
        >
          <Typography
            sx={{
              paddingRight: "24px",
              fontWeight: "700",
              fontSize: "24px",
              color: "black",
            }}
          >
            برترین لابراتوار ها
          </Typography>
          <Button
            fontSize="18px"
            fontWeight="400"
            endIcon={
              <KeyboardBackspaceOutlinedIcon
                sx={{ marginRight: "8px", fontsize: "18px" }}
              />
            }
          >
            مشاهده همه
          </Button>
        </Box>

        <Slider {...settings}>
          {LabData.map((item) => (
            <Card sx={{ maxWidth: "438px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt="Paella dish"
                  sx={{ borderRadius: "16px" }}
                />
                <CardContent sx={{ textAlign: "left", padding: "24px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row !important",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginTop: "25px",
                      marginBottom: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexdiretion: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={item.rate}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Typography gutterBottom variant="h6" component="div">
                        {labels[item.rate]}
                      </Typography>
                    </Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="700"
                      variant="p"
                      component="div"
                    >
                      {item.clinicName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      marginTop: "25px",
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      fontWeight="500"
                      marginRight="4px"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.location}
                    </Typography>
                    <img src={avatar_wrap} />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "32px",
          paddingLeft: "48px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "32px",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="40px"
          marginBottom="40px"
        >
          <Typography
            sx={{
              paddingRight: "24px",
              fontWeight: "700",
              fontSize: "24px",
              color: "black",
            }}
          >
            لابراتوارهای جدید
          </Typography>
          <Button
            fontSize="18px"
            fontWeight="400"
            endIcon={
              <KeyboardBackspaceOutlinedIcon
                sx={{ marginRight: "8px", fontsize: "18px" }}
              />
            }
          >
            مشاهده همه
          </Button>
        </Box>

        <Slider {...settings}>
          {LabData.map((item) => (
            <Card sx={{ maxWidth: "438px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt="Paella dish"
                  sx={{ borderRadius: "16px" }}
                />
                <CardContent sx={{ textAlign: "left", padding: "24px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row !important",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginTop: "25px",
                      marginBottom: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexdiretion: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={item.rate}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Typography gutterBottom variant="h6" component="div">
                        {labels[item.rate]}
                      </Typography>
                    </Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="700"
                      variant="p"
                      component="div"
                    >
                      {item.clinicName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      marginTop: "25px",
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      fontWeight="500"
                      marginRight="4px"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.location}
                    </Typography>
                    <img src={avatar_wrap} />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "32px",
          paddingLeft: "48px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "32px",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="40px"
          marginBottom="40px"
        >
          <Typography
            sx={{
              paddingRight: "24px",
              fontWeight: "700",
              fontSize: "24px",
              color: "black",
            }}
          >
            در شهر شما
          </Typography>
          <Button
            fontSize="18px"
            fontWeight="400"
            endIcon={
              <KeyboardBackspaceOutlinedIcon
                sx={{ marginRight: "8px", fontsize: "18px" }}
              />
            }
          >
            مشاهده همه
          </Button>
        </Box>

        <Slider {...settings}>
          {LabData.map((item) => (
            <Card sx={{ maxWidth: "438px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="194"
                  image={item.img}
                  alt="Paella dish"
                  sx={{ borderRadius: "16px" }}
                />
                <CardContent sx={{ textAlign: "left", padding: "24px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row !important",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginTop: "25px",
                      marginBottom: "25px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexdiretion: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={item.rate}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      <Typography gutterBottom variant="h6" component="div">
                        {labels[item.rate]}
                      </Typography>
                    </Box>
                    <Typography
                      fontSize="24px"
                      fontWeight="700"
                      variant="p"
                      component="div"
                    >
                      {item.clinicName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexdiretion: "row",
                      justifyContent: "flex-end",
                      alignItems: "flex-start",
                      alignContent: "flex-start",
                      marginTop: "25px",
                    }}
                  >
                    <Typography
                      fontSize="18px"
                      fontWeight="500"
                      marginRight="4px"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.location}
                    </Typography>
                    <img src={avatar_wrap} />
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderRadius: "8px",
          marginTop: "32px",
          paddingLeft: "48px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Typography
          sx={{
            paddingRight: "24px",
            fontWeight: "700",
            fontSize: "24px",
            color: "black",
          }}
        >
          مقالات و ویدیوهای آموزشی
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "40px",
          }}
        >
          <Box
            sx={{
              width: "32%",
              marginRight: "24px",
              height: "390px",
              borderRadius: "8px",
              backgroundImage: `url(${scanteeth1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#C29552",
            }}
          >
            <Typography
              sx={{
                paddingTop: "320px",
                paddingRight: "24px",
                fontSize: "24px",
                color: "white",
              }}
            >
              آموزش نحوه اسکن داخل دهانی با اسکنرها
            </Typography>
          </Box>
          <Box
            sx={{
              width: "32%",
              marginRight: "24px",
              height: "390px",
              borderRadius: "8px",
              backgroundImage: `url(${scanteeth2})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "#C29552",
            }}
          >
            <Typography
              sx={{
                paddingTop: "320px",
                paddingRight: "24px",
                fontSize: "24px",
                color: "white",
              }}
            >
              معرفی انواع اسکن بادی
            </Typography>
          </Box>
          <Box
            sx={{
              width: "32%",
              marginRight: "24px",
              height: "390px",
              borderRadius: "8px",
              backgroundImage: `url(${scanteeth3})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#C29552",
            }}
          >
            <Typography
              sx={{
                paddingTop: "320px",
                paddingRight: "24px",
                fontSize: "24px",
                color: "white",
              }}
            >
              معرفی انواع سمنتیشن ها
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
