import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import "./nav.css";
import { useState } from "react";

const NavMenu = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuActive, setMmenuActive] = useState("");
  const toggleSubmenu = (e, link) => {
    setMmenuActive(link);
  };
  const handleClose = () => {
    setSidebarOpen(false);
    document.body.style.overflowY = "auto";
  };
  const handleOpen = () => {
    setSidebarOpen(true);
    document.body.style.overflowY = "hidden";
  };
  console.log(menuActive);
  return (
    <>
      <div className="bg-background py-1 px-2 md:px-0">
        <div className="container">
          <div className="flex justify-between items-center md:hidden">
            <Link href={"/"} className="relative w-16 h-12">
              <Image
                src={"/img/logo-2.png"}
                alt="bls logo"
                className="img-fluid object-contain"
                sizes="40vw"
                fill
              />
            </Link>
            <div className="cursor-pointer md:hidden" onClick={handleOpen}>
              <FaBars className="text-2xl" />
            </div>
          </div>
          <nav className={`nav ${sidebarOpen ? "navActive" : ""}`}>
            <div className="menu">
              <div className="flex justify-between items-center px-4 pt-6 pb-4 bg-muted md:bg-background md:pt-0 md:px-1 md:pb-0">
                <Link href={"/"} className="relative w-16 h-12">
                  <Image
                    src={"/img/logo-2.png"}
                    alt="bls logo"
                    className="img-fluid object-contain"
                    sizes="40vw"
                    fill
                  />
                </Link>
                <div className="cursor-pointer md:hidden" onClick={handleClose}>
                  <AiOutlineClose className="text-2xl" />
                </div>
              </div>
              <ul className="nav_menu">
                {props.navLinks &&
                  props.navLinks.map((item) => {
                    return (
                      <li
                        key={item.label}
                        className={item.label === menuActive ? "active" : ""}
                      >
                        <Link
                          href={"#"}
                          onClick={(e) => toggleSubmenu(e, item.label)}
                        >
                          {item.label} {item.icon}
                        </Link>
                        {item.submenu || item.subTitles ? (
                          <motion.ul
                            className="dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: item.label == menuActive ? "auto" : 0,
                              opacity: 1,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.submenu &&
                              item.submenu.map((subItem) => {
                                return (
                                  <li key={subItem.label}>
                                    <Link href={""}>{subItem.label}</Link>
                                  </li>
                                );
                              })}
                            {item.subTitles &&
                              item.subTitles.map((subItem) => {
                                return (
                                  <>
                                    <p
                                      key={subItem.title}
                                      className="tracking-wider font-semibold text-secondary-foreground px-5 bg-muted py-3"
                                    >
                                      {subItem.title} :
                                    </p>
                                    {subItem.subLinks &&
                                      subItem.subLinks.map((item) => {
                                        return (
                                          <li key={item.label}>
                                            <Link href={""}>{item.label}</Link>
                                          </li>
                                        );
                                      })}
                                  </>
                                );
                              })}
                          </motion.ul>
                        ) : (
                          ""
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
