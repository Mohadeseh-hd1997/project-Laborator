import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import {Box, Card, Typography, Stack, Badge} from '@mui/material';
import {fNumber} from "../../utils/formatNumber";
import {BaseOptionChart} from "../chart";

// ----------------------------------------------------------------------


ProfileSummeryCard.propTypes = {
    chartColor: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.number),
    percent: PropTypes.number,
    title: PropTypes.string,
    total: PropTypes.number,
};

export default function ProfileSummeryCard({title, subTitle, total, chartColor, chartData,badge}) {
    const chartOptions = merge(BaseOptionChart(), {
        colors: [chartColor],
        chart: {animations: {enabled: true}, sparkline: {enabled: true}},
        stroke: {width: 2},
        tooltip: {
            x: {show: false},
            y: {
                formatter: (seriesName) => fNumber(seriesName),
                title: {
                    formatter: () => '',
                },
            },
            marker: {show: false},
        },
        fill: {
            opacity: 0.05
        }
    });

    return (
        <Badge
            badgeContent={badge}
            sx={{ "& .MuiBadge-badge": { height: 37, minWidth: 37, borderRadius:'50%', fontSize:'16px' } }}
            color="error"
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Card sx={{display: 'flex', alignItems: 'center', p: 3, width: '354px', height: "91px"}}>
                <Box sx={{flexGrow: 1}}>
                    <Typography variant="h6" gutterBottom sx={{fontWeight: 'bold'}}>
                        {title}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {fNumber(total)}
                    </Typography>

                    <Stack direction="row" alignItems="center">
                        <Typography variant="body2" component="span" noWrap sx={{color: 'text.secondary'}}>
                            {subTitle}
                        </Typography>
                    </Stack>
                </Box>

                <ReactApexChart type="area" series={[{data: chartData}]} options={chartOptions} width={120}
                                height={80}/>
            </Card>
        </Badge>
    );
}
