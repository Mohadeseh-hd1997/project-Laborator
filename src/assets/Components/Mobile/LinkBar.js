import React from 'react';
// img 
import pieMenu from '../../img/pieMenu.svg';
import orderStatus from '../../img/orderStatusMenu.svg';
import glassMenu from '../../img/glassMenu.png';
import HomeMenu from '../../img/HomeMenu.svg';

export default function LinkBar() {
    return (
        <div>
            <ul style={{
                paddingRight: 10,
                borderRadius: 50,
                paddingLeft: 10,
                display: 'flex',
                fontWeight: 'bolder',
                fontSize: 14,
                color: '#A8A8AA',
                flexDirection: 'row',
                listStyle: 'none',
                justifyContent: 'space-around'
            }}>
                <li style={{ lineHeight: 0 }}><img src={pieMenu} /><h6>گزارش</h6>
                </li>
                <li style={{ lineHeight: 0 }}><img src={orderStatus} /> <h6>وضعیت سفارش</h6>
                </li>
                <li style={{ lineHeight: 0 }}><img src={glassMenu} /> <h6>نمیدونم</h6>
                </li>
                <li style={{ lineHeight: 0 }}><img style={{ marginTop: 11 }} src={HomeMenu} /> <h6>منواصلی</h6>
                </li>
            </ul>
        </div>
    )
}
