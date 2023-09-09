import React from "react";

//mui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TableFooter,
} from "@mui/material";
//image
import ReqSubmit from "../../../img/ReqSubmit.png";
import contact from "../../../img/contact.svg";
import calenderReq from "../../../img/calenderReq.svg";
import doc4 from "../../../img/doc4.svg";
import drreq from "../../../img/drreq.svg";
import clinic from "../../../img/clinic.svg";
import contactBg from "../../../img/contactBg.svg";
import chatLab from "../../../img/chatLab.svg";
import ReqAccept from "../../../img/ReqAccept.png";
import map from '../../../img/map.svg';
import smart from '../../../img/smart.svg'; 
//style--
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiStepIcon-completed ": { color: "green" },
    "& .Mui-completed": { color: "green" },
  },
  step_label_root: {
    paddingRight: "20px",
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
    service: "ایمپلنت",
    count: 10,
    price: 485600,
    headerAlign: "center",
  },
  {
    id: 2,
    service: "ایمپلنت",
    count: 10,
    status: 2,
    headerAlign: "center",
  },
  {
    id: 3,
    service: "ایمپلنت",
    count: 10,
    price: 485600,
    headerAlign: "center",
  },
  {
    id: 4,
    service: "ایمپلنت",
    count: 10,
    price: 560000,
    headerAlign: "center",
  },
  {
    id: 5,
    service: "ایمپلنت",
    count: 10,
    status: 2,
    headerAlign: "center",
  },
  {
    id: 6,
    service: "ایمپلنت",
    count: 10,
    price: 485600,
    headerAlign: "center",
  },
  {
    id: 7,
    service: "ایمپلنت",
    count: 10,
    price: 560000,
    headerAlign: "center",
  },
  {
    id: 8,
    service: "ایمپلنت",
    count: 10,
    price: 560000,
    headerAlign: "center",
  },
  {
    id: 9,
    service: "ایمپلنت",
    count: 10,
    price: 485600,
    headerAlign: "center",
  },
];
//step bar
const steps = ["در انتظار تایید", "پاسخ لابراتوار", "پرداخت"];

export default function RequestFollowUp(props) {
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
  //stepper
  const formContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Box marginTop="60px">
              <img
                width="220px"
                height="214px"
                src={ReqSubmit}
                alt="ReqSubmit"
              />
            </Box>
            <Box marginTop="56px">
              <Typography fontSize={"24px"} fontWeight="900">
                درخواست ارسال شد.
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"18px"} fontWeight="500" width="604px">
                درخواست شما برای لابراتوار ارسال شد و پس از ۳۰ دقیقه در صورت
                قبول کردن یا عدم قبول درخواست از سوی لابراتوار، به شما اطلاع
                رسانی انجام میگیرد.
              </Typography>
            </Box>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                maxWidth="1282px"
                marginTop="56px"
              >
                <Box
                  width="1282px"
                  height="273px"
                  textAlign="start"
                  paddingY={"19px"}
                  paddingX="24px"
                  sx={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "Right",
                    backgroundPositionY: "24px",
                    boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2143DD",
                      fontWeight: "bold",
                      fontSize: "34px",
                    }}
                  >
                    مرضیه شاهرخی
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          sx={{ fontSize: "18px" }}
                        >
                          کد ملی :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۲۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره تماس :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۱۵۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={doc4} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره پرونده :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۳۲۴۹
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ ثبت:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ تحویل:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={drreq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          پزشک معالج:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          دکتر رضا ملا
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={clinic} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          کلینیک:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          اسمارت (مشهد)
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                      }}
                    >
                      <Button
                        sx={{
                          width: "954px",
                          height: "48px",
                          backgroundColor: "#EFF2FF",
                          fontSize: "14px",
                          color: "#2143DD",
                          fontWeight: "700",
                        }}
                      >
                        مشاهده جزییات درخواست
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "148px",
                          height: "48px",
                          backgroundColor: "#EFF2FF",
                        }}
                      >
                        <img
                          src={chatLab}
                          alt="chat"
                          style={{ marginLeft: "8px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#C30000",
                            fontWeight: "700",
                          }}
                        >
                          چت با لابراتوار
                        </Typography>
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "116px",
                          height: "48px",
                          backgroundColor: "#FF000014",
                          fontSize: "14px",
                          color: "##C30000",
                          fontWeight: "700",
                        }}
                      >
                        لغو درخواست
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      case 1:
        return (
          <>
            <Box marginTop="60px">
              <img
                width="220px"
                height="214px"
                src={ReqAccept}
                alt="ReqAccepted"
              />
            </Box>
            <Box marginTop="56px">
              <Typography fontSize={"24px"} fontWeight="900">
                لابراتوار درخواست شما را تایید کرد
              </Typography>
            </Box>
            <Box>
              <Typography fontSize={"18px"} fontWeight="500" width="604px">
                درخواست شما توسط لابراتوار تایید شده و منتظر پرداخت میباشد.
              </Typography>
            </Box>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                maxWidth="1282px"
                marginTop="56px"
              >
                <Box
                  width="1282px"
                  height="273px"
                  textAlign="start"
                  paddingY={"19px"}
                  paddingX="24px"
                  sx={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "Right",
                    backgroundPositionY: "24px",
                    boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2143DD",
                      fontWeight: "bold",
                      fontSize: "34px",
                    }}
                  >
                    مرضیه شاهرخی
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          sx={{ fontSize: "18px" }}
                        >
                          کد ملی :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۲۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره تماس :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۱۵۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={doc4} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره پرونده :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۳۲۴۹
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ ثبت:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ تحویل:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={drreq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          پزشک معالج:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          دکتر رضا ملا
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={clinic} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          کلینیک:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          اسمارت (مشهد)
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          width: "954px",
                          height: "48px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        انتخاب روش پرداخت
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "148px",
                          height: "48px",
                          backgroundColor: "#EFF2FF",
                        }}
                      >
                        <img
                          src={chatLab}
                          alt="chat"
                          style={{ marginLeft: "8px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#C30000",
                            fontWeight: "700",
                          }}
                        >
                          چت با لابراتوار
                        </Typography>
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "116px",
                          height: "48px",
                          backgroundColor: "#FF000014",
                          fontSize: "14px",
                          color: "##C30000",
                          fontWeight: "700",
                        }}
                      >
                        لغو درخواست
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
      case 2:
        return (
          <Box>
            <Box>1 </Box>
            <Box>2</Box>
            <Box paddingX={"64px"}>
              <Box
                sx={{
                  marginTop: "56px",
                  marginBottom: "24px",
                  bgcolor: "white",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <AppBar
                  position="static"
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    borderRadius: "8px",
                    backgroundColor: "white",
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
                    <Tab
                     visibleScrollbar="false" 
                      label="پرداخت آنلاین"
                      sx={{
                        border: "none",
                        backgroundColor: "#1C39BB",
                        color: "white",
                        fontWeight: "700",
                        borderRadius: "8px",
                      }}
                    />

                    <Tab
                      label="کسر از کیف پول"
                      sx={{
                        border: "none",
                        marginRight: "24px",
                        backgroundColor: "#eee",
                        color: "#2143DD",
                        fontWeight: "700",
                        borderRadius: "8px",
                      }}
                    />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                  overflowY='hidden'
                >
                  <div
                    style={{
                      marginTop: "24px",
                      width: "99.5%",
                      border: "1px solid #E5E5E5",
                      borderRadius: "8px",
                      height:'auto',
                      overflow:'hidden'
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
                        height: "auto",
                        overflowY:"hidden",
                        
                      }}
                    >
                      <Table
                        sx={{ minWidth: 650, direction: "rtl" }}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell
                              width={"5%"}
                              align="center"
                              fontSize="16px"
                              fontWeight="500"
                              sx={{ border: 0 }}
                            >
                              #
                            </TableCell>
                            <TableCell
                              width={"60%"}
                              align="center"
                              fontSize="16px"
                              fontWeight="500"
                              sx={{ border: 0 }}
                            >
                              خدمات
                            </TableCell>
                            <TableCell
                              width={"5%"}
                              align="center"
                              fontSize="16px"
                              fontWeight="500"
                              sx={{ border: 0 }}
                            >
                              تعداد
                            </TableCell>
                            <TableCell
                              width={"30%"}
                              align="center"
                              fontSize="16px"
                              fontWeight="500"
                              sx={{ border: 0 }}
                            >
                              مبلغ کل
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                                height: "70px",
                              }}
                            >
                              <TableCell
                                sx={{ p: 0, textAlign: "center", border: 0 }}
                              >
                                <Typography fontSize="17px" fontWeight="500">
                                  {row.id}
                                </Typography>
                              </TableCell>
                              <TableCell
                                sx={{ p: 0, textAlign: "center", border: 0 }}
                              >
                                <Typography fontSize="17px" fontWeight="500">
                                  {row.service}
                                </Typography>
                              </TableCell>
                              <TableCell
                                sx={{ p: 0, textAlign: "center", border: 0 }}
                              >
                                <Typography
                                  textAlign="center"
                                  width="115px"
                                  fontSize="17px"
                                  fontWeight="700"
                                  paddingX="16px"
                                  paddingY="16px"
                                >
                                  {row.count}
                                </Typography>
                              </TableCell>
                              <TableCell
                                sx={{ p: 0, textAlign: "center", border: 0 }}
                              >
                                <Typography
                                  textAlign="center"
                                  width="115px"
                                  fontSize="17px"
                                  fontWeight="700"
                                  paddingX="16px"
                                  paddingY="16px"
                                  sx={{
                                    marginRight: "149px",
                                    textAlign: "left",
                                  }}
                                >
                                  {row.price} ریال
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                        <TableFooter sx={{marginX:'24px',marginY:'16px'}}>
                          <TableRow sx={{backgroundColor:'#00B99814',height:'72px',borderRadius:'8px'}}>
                           
                            <TableCell  sx={{paddingRight:'70px',width:'90%',textAlign:'right',color:'#00B998',fontSize:'24px',fontWeight:'900'}}colSpan={2}>مجموع</TableCell>
                            <TableCell  sx={{paddingLeft:'70px',width:'10%',color:'#00B998',fontSize:'24px',fontWeight:'900'}} colSpan={2}>  90000000ریال</TableCell>
                          
                          </TableRow>
                        </TableFooter>
                      </Table> 
                    </TableContainer>

                    <Typography>لابراتوار انتخاب شده</Typography>
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

                    <Box>
              <Box
                display="flex"
                flexDirection="column"
                maxWidth="1282px"
                marginTop="56px"
              >
                <Box
                  width="1282px"
                  height="273px"
                  textAlign="start"
                  paddingY={"19px"}
                  paddingX="24px"
                  sx={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "Right",
                    backgroundPositionY: "24px",
                    boxShadow: "10px 10px 18px 36px rgba(248,248,248,0.75)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2143DD",
                      fontWeight: "bold",
                      fontSize: "34px",
                    }}
                  >
                    مرضیه شاهرخی
                  </Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                        marginBottom: "20px",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          sx={{ fontSize: "18px" }}
                        >
                          کد ملی :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۲۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={contact} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره تماس :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۰۹۱۵۱۲۳۴۵۶۷
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={doc4} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          شماره پرونده :
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۳۲۴۹
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ ثبت:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={calenderReq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          تاریخ تحویل:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          ۱۴۰۱/۱۱/۱۶
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={drreq} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          پزشک معالج:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          دکتر رضا ملا
                        </Typography>
                      </Box>
                      <Box width="308.5px">
                        <img src={clinic} />
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="18px"
                        >
                          کلینیک:
                        </Typography>
                        <Typography
                          variant="p"
                          marginRight="8px"
                          fontSize="24px"
                          fontWeight="700"
                        >
                          اسمارت (مشهد)
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        marginTop: "24px",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          width: "954px",
                          height: "48px",
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        انتخاب روش پرداخت
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "148px",
                          height: "48px",
                          backgroundColor: "#EFF2FF",
                        }}
                      >
                        <img
                          src={chatLab}
                          alt="chat"
                          style={{ marginLeft: "8px" }}
                        />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#C30000",
                            fontWeight: "700",
                          }}
                        >
                          چت با لابراتوار
                        </Typography>
                      </Button>
                      <Button
                        sx={{
                          marginRight: "8px",
                          width: "116px",
                          height: "48px",
                          backgroundColor: "#FF000014",
                          fontSize: "14px",
                          color: "##C30000",
                          fontWeight: "700",
                        }}
                      >
                        لغو درخواست
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>إ
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
                    کیف پوا
                  </div>
                </SwipeableViews>
              </Box>
            </Box>
          </Box>
        );

      default:
        return "اطلاعاتی وجود ندارد";
    }
  };
  const [activeStepCount, setActiveStepCount] = React.useState(0);
  const [skip, setSkip] = React.useState(new Set());
  const optionalStep = (step) => {
    return step === 1;
  };

  const skipStep = (step) => {
    return skip.has(step);
  };

  const handleStepNext = () => {
    let newSkipped = skip;
    if (skipStep(activeStepCount)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStepCount);
    }

    setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
    setSkip(newSkipped);
  };

  const handleStepBack = () => {
    setActiveStepCount((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepSkip = () => {
    setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
    setSkip((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStepCount);
      return newSkipped;
    });
  };

  const handleStepReset = () => {
    setActiveStepCount(0);
  };

  return (
    <Box paddingRight={"120px"} paddingLeft={"100px"}>
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
          viewBox="-10 -5 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.2105 0.750004H68.7895C71.3813 0.749916 73.6172 0.74984 75.4589 0.900309C77.4027 1.05912 79.336 1.40976 81.1964 2.35766C83.9717 3.7718 86.2282 6.02826 87.6424 8.80365C88.5903 10.664 88.9409 12.5973 89.0997 14.5411C89.2502 16.3827 89.2501 18.6186 89.25 21.2104V68.7896C89.2501 71.3814 89.2502 73.6173 89.0997 75.4589C88.9409 77.4027 88.5903 79.336 87.6424 81.1964C86.2282 83.9718 83.9718 86.2282 81.1964 87.6424C79.336 88.5903 77.4027 88.9409 75.4589 89.0997C73.6173 89.2502 71.3814 89.2501 68.7896 89.25H21.2104C18.6186 89.2501 16.3827 89.2502 14.5411 89.0997C12.5973 88.9409 10.664 88.5903 8.80365 87.6424C6.02826 86.2282 3.7718 83.9717 2.35766 81.1964C1.40976 79.336 1.05912 77.4027 0.900309 75.4589C0.74984 73.6172 0.749916 71.3813 0.750004 68.7895V21.2105C0.749916 18.6187 0.74984 16.3828 0.900309 14.5411C1.05912 12.5973 1.40976 10.664 2.35766 8.80365C3.7718 6.02826 6.02826 3.7718 8.80365 2.35766C10.664 1.40976 12.5973 1.05912 14.5411 0.900309C16.3828 0.74984 18.6187 0.749916 21.2105 0.750004ZM10.5833 59.75V68.6C10.5833 71.4347 10.5872 73.2651 10.701 74.6581C10.8101 75.9938 10.9954 76.489 11.1192 76.7321C11.5906 77.6573 12.3428 78.4094 13.2679 78.8808C13.511 79.0047 14.0062 79.1899 15.3419 79.299C16.7349 79.4129 18.5653 79.4167 21.4 79.4167H68.6C71.4347 79.4167 73.2651 79.4129 74.6581 79.299C75.9938 79.1899 76.489 79.0047 76.7321 78.8808C77.6573 78.4094 78.4094 77.6573 78.8808 76.7321C79.0047 76.489 79.1899 75.9938 79.299 74.6581C79.4129 73.2651 79.4167 71.4347 79.4167 68.6V59.75H71.1836C68.5445 59.75 68.0262 59.7816 67.592 59.8859C67.0903 60.0063 66.6107 60.2049 66.1708 60.4745C65.7901 60.7079 65.4012 61.052 63.5351 62.9181L62.9181 63.5351C62.8208 63.6324 62.7244 63.729 62.6287 63.8249C61.2154 65.2408 59.9693 66.4892 58.4671 67.4098C57.1474 68.2185 55.7086 68.8145 54.2036 69.1758C52.4904 69.5871 50.7266 69.5855 48.726 69.5836C48.5906 69.5835 48.4541 69.5833 48.3164 69.5833H41.6836C41.546 69.5833 41.4094 69.5835 41.274 69.5836C39.2735 69.5855 37.5096 69.5871 35.7965 69.1758C34.2914 68.8145 32.8526 68.2185 31.5329 67.4098C30.0307 66.4892 28.7846 65.2408 27.3714 63.8249C27.2757 63.7291 27.1792 63.6324 27.0819 63.5351L26.4649 62.9181C24.5988 61.052 24.21 60.7079 23.8292 60.4745C23.3893 60.2049 22.9097 60.0063 22.408 59.8859C21.9738 59.7816 21.4556 59.75 18.8164 59.75H10.5833ZM79.4167 49.9167H71.1836C71.046 49.9167 70.9095 49.9165 70.774 49.9164C68.7735 49.9146 67.0096 49.9129 65.2965 50.3242C63.7914 50.6855 62.3526 51.2815 61.0329 52.0902C59.5307 53.0108 58.2846 54.2592 56.8713 55.6751C56.7757 55.771 56.6792 55.8676 56.5819 55.9649L55.9649 56.5819C54.0987 58.4481 53.71 58.7922 53.3292 59.0255C52.8893 59.2951 52.4097 59.4937 51.908 59.6142C51.4738 59.7184 50.9556 59.75 48.3164 59.75H41.6836C39.0445 59.75 38.5262 59.7184 38.092 59.6142C37.5903 59.4937 37.1107 59.2951 36.6708 59.0255C36.2901 58.7922 35.9013 58.4481 34.0351 56.5819L33.4181 55.9649C33.3208 55.8676 33.2244 55.771 33.1287 55.6751C31.7154 54.2592 30.4693 53.0108 28.9671 52.0902C27.6474 51.2815 26.2086 50.6855 24.7036 50.3242C22.9904 49.9129 21.2265 49.9146 19.226 49.9164C19.0905 49.9165 18.954 49.9167 18.8164 49.9167H10.5833V21.4C10.5833 18.5653 10.5872 16.7349 10.701 15.3419C10.8101 14.0062 10.9954 13.511 11.1192 13.2679C11.5906 12.3428 12.3428 11.5906 13.2679 11.1192C13.511 10.9954 14.0062 10.8101 15.3419 10.701C16.7349 10.5872 18.5653 10.5833 21.4 10.5833H68.6C71.4347 10.5833 73.2651 10.5872 74.6581 10.701C75.9938 10.8101 76.489 10.9954 76.7321 11.1192C77.6573 11.5906 78.4094 12.3428 78.8808 13.2679C79.0047 13.511 79.1899 14.0062 79.299 15.3419C79.4129 16.7349 79.4167 18.5653 79.4167 21.4V49.9167ZM45 15.5C47.7154 15.5 49.9167 17.7013 49.9167 20.4167V30.25H59.75C62.4654 30.25 64.6667 32.4513 64.6667 35.1667C64.6667 37.8821 62.4654 40.0833 59.75 40.0833H49.9167V49.9167C49.9167 52.6321 47.7154 54.8333 45 54.8333C42.2846 54.8333 40.0833 52.6321 40.0833 49.9167V40.0833H30.25C27.5346 40.0833 25.3333 37.8821 25.3333 35.1667C25.3333 32.4513 27.5346 30.25 30.25 30.25H40.0833V20.4167C40.0833 17.7013 42.2846 15.5 45 15.5Z"
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
          پیگیری درخواست
        </Typography>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          width: "content",
          marginTop: "16px",
          backgroundColor: "white",
          borderRadius: "8px",
          height: "content",
          paddingTop: "48px",

          paddingBottom: "56px",
        }}
      >
        <Box>
          <center>
            <div style={{ width: "100%" }}>
              <Stepper activeStep={activeStepCount} sx={{ width: "60%" }}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  if (skipStep(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step
                      sx={{
                        "& .MuiStepLabel-root .Mui-completed": {
                          color: "#00826B", // circle color (COMPLETED)
                        },
                        "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                          {
                            color: "#00826B", // Just text label (COMPLETED)
                          },
                        "& .MuiStepLabel-root .Mui-active": {
                          color: "#2143DD", // circle color (ACTIVE)
                        },
                        "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                          {
                            color: "common.white", // Just text label (ACTIVE)
                          },
                      }}
                      key={label}
                      {...stepProps}
                    >
                      <StepLabel
                        classes={{ label: classes.step_label_root }}
                        {...labelProps}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {formContent(activeStepCount)}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    pt: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStepCount === 0}
                    onClick={handleStepBack}
                    sx={{ mt: 5 }}
                  >
                    صفحه قبلی
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button
                    variant="contained"
                    sx={{ mt: 5 }}
                    onClick={handleStepNext}
                  >
                    {activeStepCount === steps.length - 1
                      ? "تایید"
                      : "صفحه بعدی"}
                  </Button>
                </Box>
              </div>
            </div>
          </center>
        </Box>
      </Box>
    </Box>
  );
}
