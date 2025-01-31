"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./sliders.css";

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container bg-sky-900 dark:bg-background pt-10 pb-0 z-10 relative  px-2 md:px-0">
        <div className="container">
          <div className="wrapper lg:px-28">
            <Slider {...settings}>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
              <div className="img-thumbnail">
                <Image
                  src={"/img/sms-services.jpg"}
                  alt="slider1"
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="caption">
                  <p className="text-center font-semibold dark:font-medium tracking-wider text-popover-foreground">
                    News & Notification
                  </p>
                  <p className="readMore">Read More...</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultipleItems;
