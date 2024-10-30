import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import agra from '../media/card/agra.webp';
import jaipur from '../media/card/jaipur.jpg';
import jodhpur from '../media/card/jodhpur.webp';
import udaipur from '../media/card/udapir.jpg';
import gujrat from '../media/card/gujrat.jpg';
import ujjain from '../media/card/ujjain.jpg';
import ladhak from '../media/card/ladaka.webp';
import varasi from '../media/card/Varanasi.jpg';
import assam from '../media/card/assam.jpg';
import shimla from '../media/card/Shimla.jpg';
import kerala from '../media/card/Kerala.jpg';
import goaa from '../media/card/goa.jpg';

import styless from '../css/MyComponent.module.css';

const settings = {
    dots: false,
    infinite: true,
    
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        { breakpoint: 1440, settings: { slidesToShow: 5, slidesToScroll: 2 } },
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
};

const CardSlider = () => {
    const data = [
        { name: "Agra", des: "lorembhai keso", imgee: agra },
        { name: 'Jaipur', des: "lorem bhai jaipur", imgee: jaipur },
        { name: 'Jodhpur', des: 'lorem bhai jodhpur', imgee: jodhpur },
        { name: 'Udaipur', des: 'lorem bhai udaipur', imgee: udaipur },
        { name: 'Gujrat', des: 'lorem bhai gujrat', imgee: gujrat },
        { name: 'Ujjain', des: 'lorem bhai ujjain', imgee: ujjain },
        { name: 'Ladakh', des: 'lorem bhai ladakh', imgee: ladhak },
        { name: 'Varanasi', des: 'lorem bhai varanasi', imgee: varasi },
        { name: 'Assam', des: 'vishu bhai assam', imgee: assam },
        { name: 'Shimla', des: 'vishu bhai shimla', imgee: shimla },
        { name: 'Kerala', des: 'vishu bhai kerala', imgee: kerala },
        { name: 'Goa', des: 'vishu bhai goa', imgee: goaa }
    ];

    return (
        <Slider {...settings}>
            {data.map((value, index) => (
                <div className={styless.wind} key={index}>
                    <img className={styless.slideImg} src={value.imgee} alt={value.name} width="350" height="200" />
                    <h4 className={styless.cardsliderText}>{value.name}</h4>
                    <p className={styless.cardSliderDes}>{value.des}</p>
                </div>
            ))}
        </Slider>
    );
};

export default CardSlider;
