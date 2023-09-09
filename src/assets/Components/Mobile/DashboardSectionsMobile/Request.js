import React from 'react'
import Requests from './Requests';
import reqst1 from  '../../img/reqstatus1.svg';
import info from  '../../img/info.svg';


export default function Request(props) {
    return (
        <>
            <Requests RequestNumber='9328'  TypeRequest='درخواست اسکن دیجیتال' statusRequest='در صف تایید' IconRequest={reqst1} />
            <Requests RequestNumber='4921'  TypeRequest='درخواست ثبت سفارش محصول' statusRequest='نیاز به اصلاح' IconRequest={info}/>

        </>
    )
}
