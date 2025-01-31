import Link from "next/link";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <footer className="mt-auto bg-sky-950 pt-24 pb-10 dark:bg-background px-2 md:px-0">
        <div className="container lg:px-28">
          <div className="flex justify-between items-start gap-3 flex-col md:flex-row">
            <div className="flex-shrink-0">
              <p className="text-xl font-bold text-white mb-4">Quick links</p>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 py-2 hover:text-white transition-all duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> News &
                    Notification
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Track your
                    application
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[-4px]" /> Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <p className="text-xl font-bold text-white mb-4">
                Book Appointment
              </p>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Book an
                    appointment application
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Reprint
                    appointment letter
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Cancel
                    appointment
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <p className="text-xl font-bold text-white mb-4">Visa type</p>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Schengen Visa
                    (Short Stay Visa)
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> National Visa
                    (Long Stay Visa)
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <p className="text-xl font-bold text-white mb-4">
                General Information
              </p>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Customer
                    Experience
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Additional
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Public
                    Holidays / Closures
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Useful Links
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-white/50 hover:text-white transition-all py-2 duration-300 flex justify-start items-center gap-2"
                  >
                    <HiMiniArrowLongRight className="mt-[4px]" /> Security Rules
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-gray-800 py-3 dark:bg-popover ">
        <p className="text-white text-center">
          We use cookies on this site to enhance your user experience, Please
          click here to proceed further.
        </p>
      </div>
    </>
  );
};

export default Footer;
