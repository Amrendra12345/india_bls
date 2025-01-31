import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner.jpg')" }}
      >
        <div className="container">
          <div className="flex justify-center items-center py-5 flex-col md:pt-10">
            <p className="text-[24px] md:text-3xl font-medium text-white/80 tracking-wide">
              Wellcome to
            </p>
            <h1 className="text-4xl  text-white/90 tracking-wide py-4 md:8xl">
              <span className="uppercase font-bold">BLS</span>
              <span className="font-semibold"> International</span>
            </h1>
            <p className="text-white/80 md:text-2xl md:font-medium tracking-wider bg-black/20 py-2 px-4 rounded">
              Official partner of Embassy of Spain in India
            </p>
          </div>
          <div className="justify-around items-center pt-6 pb-4 md:px-0 lg:px-10 xl:px-20 hidden md:flex">
            <div
              className={` w-28 h-28 border-dotted border-2 rounded-full border-gray-200 hover:bg-yellow-600 cursor-pointer relative ${styles.hero_icon}`}
            >
              <span className="w-10 h-10 rounded-full bg-yellow-600 text-2xl font-semibold flex justify-center items-center absolute top-[-20%] left-[30%]">
                1
              </span>
              <Image
                src={"/img/file.svg"}
                fill
                alt="file"
                sizes="40vw"
                className="img-fluid object-contain p-7"
              />
              <p className="bg-accent py-3 px-4 w-[200px] rounded text-accent-foreground text-center absolute -bottom-16 -left-10">
                Book an appointment
              </p>
            </div>
            <div
              className={`w-28 h-28 border-dotted border-2 rounded-full border-gray-200 hover:bg-yellow-600 cursor-pointer relative ${styles.hero_icon}`}
            >
              <span className="w-10 h-10 rounded-full bg-yellow-600 text-2xl font-semibold flex justify-center items-center absolute top-[-20%] left-[30%]">
                2
              </span>
              <Image
                src={"/img/globe.svg"}
                fill
                sizes="40vw"
                alt="file"
                className="img-fluid object-contain p-5 img-white"
              />
              <p className="bg-accent py-3 px-4 rounded text-accent-foreground w-[200px] text-center absolute -bottom-16 -left-10">
                Visit our center
              </p>
            </div>
            <div
              className={`w-28 h-28 border-dotted border-2 rounded-full border-gray-200 hover:bg-yellow-600 cursor-pointer relative $`}
            >
              <span className="w-10 h-10 rounded-full bg-yellow-600 text-2xl font-semibold flex justify-center items-center absolute top-[-20%] left-[30%]">
                3
              </span>
              <Image
                src={"/img/flight.svg"}
                fill
                alt="file"
                sizes="40vw"
                className="img-fluid object-contain p-5 img-white"
              />
              <p className="bg-accent py-3 px-4 rounded text-accent-foreground text-center w-[200px] absolute -bottom-16 -left-10">
                Track your application
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
