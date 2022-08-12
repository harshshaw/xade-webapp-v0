import React from 'react'
import CarouselCard from '../../Components/CarouselCard/CarouselCard'
import { Layout } from '../../Components/Layout'
import './HomePage.css'
import { TbQrcode } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

type Props = {}

const settings = {
    dots: true,
    infinite: true,
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const HomePage = (props: Props) => {
    let symbol = 'R';
    let value = '0.00';

    const scanQr = () =>{

    }
   
  return (
      <Layout>
        <div className='container'>
            <div className='carouselHolder'>
                <Slider {...settings}>
                      <CarouselCard/>
                      <CarouselCard/>
                      <CarouselCard/>
                </Slider>
            </div>
            <div className='myActivity'>
                <div className='totalBalance'>
                    <p className='label'>Checking Account</p>
                    <p className='value'>{symbol} {value}</p>
                </div>
                <div className='activityContent'>
                    YOUR ACTIVITY APPEARS HERE
                </div>
            </div>
            <div className='utilityButtons'>
                <div className='buttonHolder'>
                    <div className='paymentsButton'>
                        Send
                    </div>
                    <div className='paymentsButton'>
                        Request
                    </div>
                    <Link
                      to='/qr'
                    >
                    <div className='scanner' onClick={scanQr} >
                        <TbQrcode />
                    </div>
                    </Link>
                </div>
            </div>
            
        </div>
      </Layout>
  )
}

export default HomePage