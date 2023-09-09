import React from 'react'
import CardsArticle from './CardsArticle';
import Slider from "react-slick";
import tooth1 from '../../img/tooth1.svg';
import tooth2 from '../../img/tooth2.svg';
import tooth3 from '../../img/tooth3.svg';
import tooth4 from '../../img/tooth4.svg';

export default function CardArticle(props) {
    var settings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable:true,
        easing:'linear',
        rtl:true,
      };

  return (
    <Slider {...settings}>
        <CardsArticle img={tooth1}  title='آنالوگ' description='تکنولوژی جدید استفاده از آنالوگ'  />
        <CardsArticle img={tooth2}  title='سرامیک ضد خش' description='استفاده از تکنولوژی نوین ...' />
        <CardsArticle img={tooth3}  title='کاشت جدید' description='روش جدید کاشت در اروپا' />
        <CardsArticle img={tooth4}  title='تولید از پودر' description='پودرهای جدید برای افزایش' />
    </Slider>
  )
}
