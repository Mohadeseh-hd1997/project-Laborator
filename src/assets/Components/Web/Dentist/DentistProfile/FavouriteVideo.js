import React from "react";
// mui 
import { Box, Card, ImageList, ImageListItem, Typography } from "@mui/material";
// img  
import videoImg from '../../../../img/videoImg.svg';
// components
import VideoCard from "../../../../components/DentistProfile/VideoCard";
import NavGrid from "../../../../components/DentistProfile/NavGrid";

// card data 
const itemData = [
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
    {
        id: 1,
        image: videoImg,
        title: 'توربین T2 Line-Sirona',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
        isFav: true
    },
]
export default function FavouriteVideo() {
    return (
        <>
            <NavGrid />
            <Box sx={{
                width: '1254px',
                height: '1323px',
                marginRight: '24px',
            }}>
                <Card sx={{ p: '48px' }}>
                    <Typography variant={'h4'} sx={{ fontSize: '24px' }}>
                        <span style={{ fontWeight: 'bold' }}>علاقه مندی های من</span> | ویدئو ها
                    </Typography>
                    <ImageList cols={3} sx={{ borderTop: 1, borderColor: '#E5E5E5' }}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.id} sx={{ marginTop: '32px' }}>
                                <VideoCard
                                    image={item.image}
                                    title={item.title}
                                    desc={item.desc}
                                    isFav={item.isFav}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Card>
            </Box>
        </>
    );
}