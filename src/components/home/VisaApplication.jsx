import Image from "next/image";
import style from "./visaApplication.module.css";
import MultipleItems from "./sliders";

const VisaApplication = () => {
  return (
    <>
      <section className="visaApplication mt-10 md:mt-20 mb-10 px-2 md:px-0">
        <div className="container">
          <div className="wrapper lg:px-28">
            <div className="heading">
              <h1 className="text-2xl text-secondary-foreground font-bold relative">
                Spain Visa Application - India
              </h1>
              <div className="dotted-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-5 mt-10 md:flex-row">
              <div className="md:w-1/2 w-full flexAll">
                <div className={style.img_thumbnail}>
                  <div className={style.figure}>
                    <Image
                      src={"/img/about-1.jpg"}
                      width={500}
                      height={500}
                      alt="about-img"
                    />
                  </div>
                  <div className="w-[80%] md:w-[70%] mx-auto bg-black -mt-[25%]">
                    <div className={style.box}>
                      <div className={style.inner}>
                        <div className={style.icon_box}>
                          <div
                            className={`${style.icon} ${style.icon_1} bg-[#e1ebf7] dark:bg-black/10`}
                          ></div>
                          <div
                            className={`${style.icon} ${style.icon_2} bg-[#e1ebf7] dark:bg-black/10`}
                          ></div>
                          <h1>18+</h1>
                          <p className="text-gray-950 dark:text-gray-300 dark:font-[500] font-semibold">
                            Years of global experience
                          </p>
                          <h1 className="mt-6">64</h1>
                          <p className="text-gray-950 dark:text-gray-300 dark:font-[500] font-semibold">
                            Countries of operations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-muted-foreground text-xl font-medium">
                  Welcome to the website of the Spain Visa Application Centre.
                  This website provides information on how to apply for a
                  Schengen visa to travel to Spain as your main country of
                  destination. The guidelines listed on this site are to help
                  you to prepare your documents as accurately as possible. This
                  will reduce the chances of your application being delayed or
                  rejected due to incomplete or faulty submission of documents.
                </p>
                <button className="mt-8 relative h-14 rounded w-40 overflow-hidden border bg-yellow-600 text-white transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-blue-950 before:duration-300 before:ease-out hover:text-white hover:shadow-blue-950 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                  <span className="relative z-10 flexAll font-semibold text-xl">
                    About Us{" "}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2 mt-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisaApplication;
