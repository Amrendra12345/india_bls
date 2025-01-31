import Image from "next/image";
import style from "./howToApply.module.css";

const HowtoApply = () => {
  return (
    <>
      <div className="mt-10 bg-accent px-2 md:px-0">
        <div className="container">
          <div className="wrapper lg:px-28 pt-12">
            <div className="heading">
              <h1 className="text-2xl text-secondary-foreground font-bold relative">
                How to Apply
              </h1>
              <div className="dotted-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6 mt-10 relative z-10 flex-col md:flex-row">
              <div
                className={`flex-shrink-0 border-1 border-accent p-0 bg-accent overflow-hidden ${style.img_thumbnail}`}
              >
                <div
                  className={`w-[400px] h-[300px] relative overflow-hidden ${style.figure}`}
                >
                  <Image
                    src={"/img/feature-1.jpg"}
                    fill
                    sizes="100vw"
                    className="img-fluid rounded-t object-cover"
                    alt="feature"
                  />
                </div>
                <div className="bg-accent shadow-md py-8">
                  <p className="text-xl font-semibold text-accent-foreground flexAll hover:text-yellow-600">
                    Know your visa type
                  </p>
                </div>
              </div>
              <div
                className={`flex-shrink-0 border-1 border-accent p-0 bg-accent overflow-hidden ${style.img_thumbnail}`}
              >
                <div
                  className={`w-[400px] h-[300px] relative overflow-hidden ${style.figure}`}
                >
                  <Image
                    src={"/img/feature-2.jpg"}
                    fill
                    sizes="100vw"
                    className="img-fluid rounded-t object-cover"
                    alt="feature"
                  />
                </div>
                <div className="bg-accent shadow-md py-8">
                  <p className="text-xl font-semibold text-accent-foreground flexAll hover:text-yellow-600">
                    Book your appointment
                  </p>
                </div>
              </div>
              <div
                className={`flex-shrink-0 border-1 border-accent p-0 bg-accent overflow-hidden ${style.img_thumbnail}`}
              >
                <div
                  className={`w-[400px] h-[300px] relative overflow-hidden ${style.figure}`}
                >
                  <Image
                    src={"/img/img-location.jpg"}
                    fill
                    sizes="100vw"
                    className="img-fluid rounded-t object-cover"
                    alt="feature"
                  />
                </div>
                <div className="bg-accent py-8">
                  <p className="text-xl font-semibold text-accent-foreground flexAll hover:text-yellow-600">
                    Visit our centre
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 dark:bg-background pt-32 mt-[-92px] relative z-0 px-2 md:px-0">
        <div className="container">
          <div className="wrapper lg:px-28">
            <div className="heading">
              <h1 className="text-2xl text-white font-bold relative mt-6">
                General Information
              </h1>
              <div className="dotted-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowtoApply;
