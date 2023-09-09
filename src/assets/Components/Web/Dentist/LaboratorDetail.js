import React from "react";
//component
import CommentLaborator from "./CommentLaborator.js";
//mui
import { Box } from "@mui/material";
import { Button, Typography, Paper } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import {
  Meter,
  Flex,
  lightTheme,
  ProgressBar,
  Provider,
} from "@adobe/react-spectrum";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// img
import bg from "../../../img/LabPic.svg";
import map from "../../../img/map.svg";
import smart from "../../../img/smart.svg";
import DrLogo from "../../../img/DrLogo.svg";
import Timer from "../../../img/Timer.svg";
import okTik from "../../../img/okTik.svg";
import star from "../../../img/star.svg";
import serviceList from "../../../img/serviceList.svg";

// dialog
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingX: "24px",
    paddingY: "24px",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "92%",
            top: 50,
            color: "#666666",
            width: "16px",
            height: "16px",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

// services done
const LabServices = [
  {
    ServeiceName: "روکش موقت",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "روکش زیرکونیا",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "کراون",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "ارتوالاینر",
    Price: 30000000,
    Count: 20,
  },
  {
    ServeiceName: "سرجیکال گاید",
    Price: 30000000,
    Count: 40,
  },
  {
    ServeiceName: "آنله",
    Price: 30000000,
    Count: 35,
  },
  {
    ServeiceName: "اینله",
    Price: 30000000,
    Count: 11,
  },
  {
    ServeiceName: "روکش موقت",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "روکش زیرکونیا",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "کراون",
    Price: 30000000,
    Count: 36,
  },
  {
    ServeiceName: "ارتوالاینر",
    Price: 30000000,
    Count: 20,
  },
  {
    ServeiceName: "سرجیکال گاید",
    Price: 30000000,
    Count: 40,
  },
];
///comment data
const comment = [
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 100,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 100,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 75,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 30,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 40,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 55,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 80,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 11,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 20,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
  {
    Drname: "دکتر مستوفی",
    Date: "1400/05/01",
    Rate: 40,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی",
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));
// progress content
const RowsStar = [
  {
    fiveStars: 100,
    FourStars: 80,
    ThreeStars: 50,
    TwoStars: 20,
    OneStars: 1,
  },
];
export default function LaboratorDetail(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        height: "460px",
        width: "100vw",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "100%",
      }}
    >
      <Box
        sx={{
          paddingX: "42px",
          paddingY: "32px",
          width: "1410px",
          bgcolor: "white",
          height: "fit-content",
          marginTop: "360px",
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            backgroundImage: `url(${map})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "left",
            boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
            borderRadius: "8px",
          }}
          paddingX="24px"
          paddingY="54px"
          width="1282px"
          height="208px"
          textAlign="start"
          marginTop="32px"
          marginBottom="47px"
        >
          <Box>
            <img src={smart} />
          </Box>
          <Box>
            <Typography
              fontSize="29px"
              fontWeight="900"
              sx={{ color: "#2143DD" }}
            >
              لابراتوار دیجیتال اسمارت مشهد
            </Typography>
            <Typography fontSize="16px" fontWeight="700">
              <Typography
                fontSize="16px"
                fontWeight="400"
                sx={{ color: "#4C4C4C" }}
              >
                آدرس
              </Typography>
              مشهد، بلوار هفت تیر، هفت تیر ۱، پلاک ۸۴
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
            borderRadius: "8px",
          }}
          paddingX="24px"
          paddingY="24px"
          width="1282px"
          height="284px"
          textAlign="start"
          marginTop="32px"
          marginBottom="24px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            width="inherit"
          >
            <Box textAlign="center">
              <Box>
                <img src={DrLogo} alt="dr" />
              </Box>
              <Box marginTop="24px">مدیریت</Box>
              <Box marginTop="37px" fontWeight="700" fontSize="24px">
                {" "}
                دکتر رضا ملا
              </Box>
            </Box>
            <Box textAlign="center">
              <Box>
                <img src={Timer} alt="work time" />
              </Box>
              <Box marginTop="24px">ساعت کاری</Box>
              <Box marginTop="37px" fontWeight="700" fontSize="24px">
                {" "}
                ۰۹:۰۰ الی ۱۸:۰۰{" "}
              </Box>
            </Box>
            <Box textAlign="center">
              <Box>
                <img src={okTik} alt="dr" />
              </Box>
              <Box marginTop="24px">شماره مجوز</Box>
              <Box marginTop="37px" fontWeight="700" fontSize="24px">
                {" "}
                ۱۲۵۴۶۹۳۰۰۰۳{" "}
              </Box>
            </Box>
          </Box>
          <Box width="inherit" sx={{ paddingX: "24px" }}>
            <Button
              fullWidth
              variant="contained"
              height="48px"
              fontWeight="700"
              onClick={handleClickOpen}
            >
              مشاهده لیست خدمات
            </Button>

            <BootstrapDialog
              fullWidth
              maxWidth="lg"
              sx={{ direction: "rtl" }}
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                fullWidth
                maxWidth="lg"
                id="customized-dialog-title"
                onClose={handleClose}
                sx={{
                  borderBottom: '1px solid #E5E5E5',
                  display: "flex",
                  flexdirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  color: "#2143DD",
                  fontSize: "28px",
                  fontWeight: "700",
                  marginRight: "64px",
                  paddingY:'10px',
                  marginLeft: "64px",
                  marginTop: "24px",
                  marginBottom:'37px'
                }}
              >
                <img
                  src={serviceList}
                  alt="list icon"
                  width="24px"
                  height="17.33px"
                  style={{ marginLeft: "20px", marginRight: "-20px" }}
                />
                <Typography
                  sx={{
                    fontSize: "28px",
                    fontWeight: "700",
                    paddingTop: "10px",
                  }}
                >
                  {" "}
                  لیست خدمات
                </Typography>
              </BootstrapDialogTitle>
              <DialogContent
                sx={{
                  scrollbarWidth: "1px",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {LabServices.map((item) => (
                  <Box
                    display="flex"
                    flexdirection="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    alignContent="flex-start"
                    paddingY="32px"
                    paddingx="24px"
                    marginLeft="37px"
                    marginRight="37px"
                    sx={{
                      border: "1px solid #E5E5E5",
                      borderRadius: "8px",

                      marginBottom: "16px",
                    }}
                  >
                    <Typography
                      width={"32%"}
                      fontSize={"24px"}
                      fontWeight={"700"}
                      paddingX="24px"
                    >
                      {item.ServeiceName}
                    </Typography>
                    <Typography
                      width={"32%"}
                      textAlign="center"
                      color="#4C4C4C"
                      fontSize={"17px"}
                      fontWeight={"700"}
                      paddingX="24px"
                    >
                      {item.Price}ریال
                    </Typography>
                    <Typography
                      width={"32%"}
                      textAlign="end"
                      color="#4C4C4C"
                      fontSize={"17px"}
                      fontWeight={"700"}
                      paddingX="24px"
                    >
                      {item.Count} سفارش انجام شده
                    </Typography>
                  </Box>
                ))}
              </DialogContent>
            </BootstrapDialog>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{
            boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
            borderRadius: "8px",
          }}
          paddingX="24px"
          paddingY="54px"
          width="1282px"
          height="fit-content"
          textAlign="start"
          marginTop="40px"
          marginBottom="47px"
        >
          <Typography fontSize={"24px"} fontweight="700">
            نظرات کاربران
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Box>
              <Box
                marginTop={"34px"}
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="start"
                alignContent="start"
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="start"
                  alignContent="start"
                  component="legend"
                  fontSize="48px"
                  fontweight="700"
                  marginLeft="10px"
                  paddingX="54px"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                  >
                    <Typography fontSize="48px" fontWeight="700">
                      ۴.۹
                    </Typography>
                    <img
                      src={star}
                      alt="rate"
                      style={{ marginRight: "10px" }}
                    />
                  </Box>
                  <Typography>از مجموع ۳۰۰ امتیاز و ۳۰ نظر</Typography>
                </Typography>
              </Box>
            </Box>

            <Box display="flex" flexDirection="column">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom="18px"
              >
                <Typography fontSize="18px" fontWeight="700">
                  5
                </Typography>
                <img
                  src={star}
                  width="13.5px"
                  alt="rate"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom="18px"
              >
                <Typography fontSize="18px" fontWeight="700">
                  4
                </Typography>
                <img
                  src={star}
                  width="13.5px"
                  alt="rate"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom="18px"
              >
                <Typography fontSize="18px" fontWeight="700">
                  3
                </Typography>
                <img
                  src={star}
                  width="13.5px"
                  alt="rate"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom="18px"
              >
                <Typography fontSize="18px" fontWeight="700">
                  2
                </Typography>
                <img
                  src={star}
                  width="13.5px"
                  alt="rate"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                marginBottom="16px"
              >
                <Typography fontSize="18px" fontWeight="700">
                  1
                </Typography>
                <img
                  src={star}
                  width="13.5px"
                  alt="rate"
                  style={{ marginRight: "10px" }}
                />
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                marginTop="-16px"
                marginRight="13px"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  marginBottom="16px"
                >
                  <Provider theme={lightTheme} height="100%">
                    <Flex
                      height="100%"
                      UNSAFE_style={{
                        direction: "rtl",
                      }}
                    >
                      <Meter
                        width="static-size-6000"
                        variant="critical"
                        label="."
                        value={100}
                      />
                    </Flex>
                  </Provider>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  marginBottom="16px"
                >
                  <Provider theme={lightTheme} height="100%">
                    <Flex
                      height="100%"
                      UNSAFE_style={{
                        direction: "rtl",
                      }}
                    >
                      <Meter
                        width="static-size-6000"
                        showValueLabel={false}
                        variant="warning"
                        label="."
                        value={80}
                      />
                    </Flex>
                  </Provider>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  marginBottom="16px"
                >
                  <Provider theme={lightTheme} height="100%">
                    <Flex
                      height="100%"
                      UNSAFE_style={{
                        direction: "rtl",
                      }}
                    >
                      <Meter
                        width="static-size-6000"
                        showValueLabel={false}
                        variant="positive"
                        label="."
                        value={60}
                      />
                    </Flex>
                  </Provider>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  marginBottom="16px"
                >
                  <Provider theme={lightTheme} height="100%">
                    <Flex
                      height="100%"
                      UNSAFE_style={{
                        direction: "rtl",
                      }}
                    >
                      <Meter
                        width="static-size-6000"
                        showValueLabel={false}
                        variant="positive"
                        label="."
                        value={20}
                      />
                    </Flex>
                  </Provider>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  marginBottom="16px"
                >
                  <Provider theme={lightTheme} height="100%">
                    <Flex
                      height="100%"
                      UNSAFE_style={{
                        direction: "rtl",
                      }}
                    >
                      <Meter
                        width="static-size-6000"
                        showValueLabel={false}
                        variant="positive"
                        label="."
                        value={5}
                      />
                    </Flex>
                  </Provider>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {comment.map((item) => (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
              borderRadius: "8px",
            }}
            paddingX="24px"
            paddingY="24px"
            width="1282px"
            height="120px"
            textAlign="start"
            marginBottom="47px"
          >
            <Box
              marginTop={"34px"}
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              alignItems="start"
              alignContent="start"
              width="15%"
            >
              <Typography fontSize="24px" fontWeight="700" marginBottom="18px">
                {item.Drname}
              </Typography>
              <Typography fontSize="14px" fontWeight="400" marginBottom="18px">
                {item.Date}
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
              >
                <Typography fontSize="14px" fontWeight="400">
                  {item.Rate}
                </Typography>
                <img
                  src={star}
                  alt="rate"
                  width="13.5px"
                  style={{ marginRight: "10px" }}
                />
              </Box>
            </Box>
            <Box width="85%">
              <Typography>{item.desc}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
