import React from 'react';
import Slider from "react-slick";
// components
import TeethListCard from './TeethListCard';



//data
const navData = [

    {
        id: 0,
        number: '5UR',
        TypeTreeatment: "Veneer",
        TypeDesign: "2M1 | VITA 3D master",
        colorBase: '2M1 | VITA 3D master',
        colorProtez: '2M1 | VITA 3D master',
        TeethMaterial: 'Infiltration Ceramic'
    },
    {
        id: 1,
        number: '3UL',
        TypeTreeatment: "Veneer",
        TypeDesign: "2M1 | VITA 3D master",
        colorBase: '2M1 | VITA 3D master',
        colorProtez: '2M1 | VITA 3D master',
        TeethMaterial: 'Infiltration Ceramic'
    },
    {
        id: 2,
        number: '7LR',
        TypeTreeatment: "Crown",
        TypeDesign: "2M1 | VITA 3D master",
        colorBase: '2M1 | VITA 3D master',
        colorProtez: '2M1 | VITA 3D master',
        TeethMaterial: 'Resin'
    },
    {
        id: 3,
        number: '6LL',
        TypeTreeatment: "Crown",
        TypeDesign: "2M1 | VITA 3D master",
        colorBase: "2M1 | VITA 3D master",
        colorProtez: '2M1 | VITA 3D master',
        TeethMaterial: 'Resin'
    }


]
export default function TeethList(props) {
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        easing: 'linear',
        rtl: true,
        dots: false,
        arrows: false,
        outline: false
    };

    return (

        <Slider  {...settings}>
            {navData.map(item =>
                <TeethListCard key={item.id} number={item.number} TypeTreeatment={item.TypeTreeatment} TypeDesign={item.TypeDesign} colorBase={item.colorBase} colorProtez={item.colorProtez} TeethMaterial={item.TeethMaterial} />
            )}

        </Slider>

    )
}
