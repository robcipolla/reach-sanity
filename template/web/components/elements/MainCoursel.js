import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import { urlFor } from '../../lib/sanity/sanity-img-builder';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainCarousel({sliderImages}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider className="mb-8" {...settings}>
            {sliderImages.map((slide, i) => (
                <div key={i} className='w-full'>
                    <Image src={urlFor(slide.asset).width(1200).height(600).auto('format').url()} width='1200' height='600' layout="responsive" />
                </div>
            ))}
        </Slider>
    )
}
