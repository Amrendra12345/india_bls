import { AlignJustify } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import Styles from "./navMenu.module.css";
import { useState } from "react";
const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Visa Type",
    href: "",
    arrow: "true",
    subItems: [
      {
        label: "Business Visa",
        href: "/business-visa",
      },
      {
        label: "Student Visa",
        href: "/student-visa",
      },
      {
        label: "Work Visa",
        href: "/work-visa",
      },
    ],
  },

  {
    label: "Book Appointment",
    href: "",
    arrow: "true",
    subItems: [
      {
        label: "Business Visa",
        href: "/business-visa",
      },
      {
        label: "Student Visa",
        href: "/student-visa",
      },
      {
        label: "Work Visa",
        href: "/work-visa",
      },
    ],
  },
  {
    label: "General Information",
    href: "",
    arrow: "true",
  },

  {
    label: "Track Application",
    href: "",
  },
  {
    label: "FQAs",
    href: "/faqs",
  },
  {
    label: "Contact Us",
    href: "",
  },
  {
    label: "Doorstep Service",
    href: "",
  },
  {
    label: "Travel Insurance",
    href: "",
    arrow: "true",
    subItems: [
      {
        label: "Business Visa",
        href: "/business-visa",
      },
      {
        label: "Student Visa",
        href: "/student-visa",
      },
      {
        label: "Work Visa",
        href: "/work-visa",
      },
    ],
  },
];
const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(null);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleSubMenu = (e) => {
    e.currentTarget.classList.add("active");
  };
  return (
    <nav className="bg-gray-50 py-2 w-full border-y px-2 md:px-0 border-t-gray-300 dark:bg-accent dark:border-t-muted">
      <div className="container">
        <div className="flex justify-between gap-2 items-center w-full">
          <Link href={"/"} className="relative w-14 h-10">
            <Image
              src={"/img/logo-2.png"}
              alt="bls-log"
              sizes="30vw"
              className="img-fluid object-contain"
              fill
              priority
            />
          </Link>
          <div className="w-full flex justify-end cursor-pointer md:hidden">
            <AlignJustify onClick={handleMenu} />
          </div>
          <div
            className={`${Styles.menu} ${showMenu ? Styles.menuActive : ""}`}
          >
            <div className="px-4 py-2 flex justify-between items-center bg-gray-200 md:hidden">
              <div className="relative w-16 h-16">
                <Image
                  src={"/img/logo-2.png"}
                  alt="bls-log"
                  sizes="50vw"
                  className="img-fluid object-contain p-1"
                  fill
                  priority
                />
              </div>
              <IoMdClose
                onClick={handleMenu}
                className="text-3xl  text-gray-500 cursor-pointer hover:text-red-600"
              />
            </div>
            <ul>
              {menuItems.map((menuItem) => {
                return (
                  <li
                    key={menuItem.label}
                    onClick={() => setActive(menuItem)}
                    className={`${active == menuItem ? "active" : ""}`}
                  >
                    <Link
                      href={menuItem.href}
                      className="dark:text-muted-foreground"
                    >
                      {menuItem.label}{" "}
                      <span>
                        {menuItem.arrow ? (
                          <RiArrowDropDownLine className="text-2xl" />
                        ) : (
                          ""
                        )}
                      </span>
                    </Link>
                    <ul
                      className={`${Styles.child_menu} ${
                        active == menuItem ? Styles.child_menuActive : ""
                      }`}
                    >
                      {Array.isArray(menuItem.subItems) &&
                        menuItem.subItems.map((subItem) => {
                          return (
                            <li key={subItem.label}>
                              <Link href={subItem.href}>{subItem.label}</Link>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
