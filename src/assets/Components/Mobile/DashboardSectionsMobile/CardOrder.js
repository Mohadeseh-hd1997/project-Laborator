import React from 'react'
import CardsOrder from './CardsOrder';
import Slider from "react-slick";
import card1 from '../../img/card1.png';
import card2 from '../../img/card2.png';

export default function CardOrder() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
  };
  return (
  
    <Slider  {...settings}>
      <CardsOrder  style={{ width: 227 ,marginBottom:0}} img={card1} order="23759" name="مجید الهی" step="Miling" nextStep="کوره پرسلن" duration="2 روز کاری" />
      <CardsOrder  style={{ width: 227  ,marginBottom:0}} img={card2} order="49328" name="زهرا مولایی" step="Miling" nextStep="کوره پرسلن" duration="3 روز کاری" />
      <CardsOrder  style={{ width: 227  ,marginBottom:0}} img={card1} order="23759" name="سارا محمدی" step="Miling" nextStep="کوره پرسلن" duration="10 روز کاری" />
      <CardsOrder  style={{ width: 227 ,marginBottom:0 }} img={card2} order="23759" name="مهدی معینی" step="Miling" nextStep="کوره پرسلن" duration="5 روز کاری" />
      <CardsOrder  style={{ width: 227  ,marginBottom:0}} img={card1} order="23759" name="فاطمه صدر" step="Miling" nextStep="کوره پرسلن" duration="8 روز کاری" />
      <CardsOrder  style={{ width: 227  ,marginBottom:0}} img={card2} order="23759" name="سهیل غزلباش" step="Miling" nextStep="کوره پرسلن" duration="1 روز کاری" />
    </Slider>


  )
}
