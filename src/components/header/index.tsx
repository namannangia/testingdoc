import Logo from "@/assets/images/logo.png";
import Call from "@/assets/svg/call.svg";
import Image from "next/image";
import { useState } from "react";
import DialogBox from "../dialogbox";
import { SingupForm } from "./singup";
import { LoginForm } from "./login";
import { FindHeader } from "./FindHeader";
import { Container } from "../container";
import Drawer from "react-modern-drawer";
import Location from "@/assets/svg/location.svg";
import Dropdown from "@/assets/svg/dropdown.svg";
import { IoIosCall } from "react-icons/io";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import { useRouter } from "next/router";
export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const openDialog = () => {
    setIsDialogOpen(true);
    setIsOpen(false);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const OpenLogin = () => {
    setLogin(true);
    setIsOpen(false);
  };
  const CloseLogin = () => {
    setLogin(false);
  };

  const menuLinks = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/aboutus" },
    //{ title: "TestWork", link: "/testwork" },
    { title: "Blog", link: "" },
    { title: "Book a test", link: "/book-test" },
    { title: "Book a home", link: "/book-home" },
    { title: "Service", link: "" },
    { title: "Media", link: "" },
    { title: "Contact", link: "/contactus" },
  ];

  // console.log("location.pathname ", location.pathname)
  return (
    <div>
      <header>
        <nav className="bg-white  px-4 lg:px-6 py-2.5 border-b border-b-[#FCE5EE]">
          <Container className="flex flex-wrap justify-between items-center ">
            <Link href="/" className="flex items-center xs:w-36 w-40">
              <Image
                src={Logo}
                className=""
                alt="Flowbite Logo"
              />
            </Link>
            <div className="flex gap-4 items-center lg:hidden">
              <div className="text-base text-primary-300 font-medium flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm">
                  <Image
                    src={Location}
                    alt=""
                    width={14}
                    height={17}
                    className="mt-[-1.5px]"
                  />
                  Surat
                </div>
                <Image src={Dropdown} alt="" width={10} height={7} />
              </div>
              <a href="tel:9898740000" className="flex justify-center items-center w-7 h-7 bg-slate-300 rounded-full">
                <IoIosCall />
              </a>
            </div>

            <div className="flex items-center lg:order-2 ">
              <div className="items-center lg:order-2 hidden lg:flex">
                <Link
                 href="tel:9898740000"
                  className="HeaderCall text-base text-primary-300 sm:hidden xs:hidden hover:bg-transparent font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                > 
                <span>Help</span>
                 <span><Image
                    src={Call}
                    alt=""
                    width={16}
                    height={19}
                    className="mt-[-1.5px]"
                  /></span>
                </Link>
                <Link
                  href="#"
                  className="text-base text-primary-300 sm:hidden xs:hidden hover:bg-transparent font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
                  onClick={OpenLogin}
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="text-white mr-0 bg-primary-700 sm:hidden xs:hidden hover:bg-primary-800  font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none "
                  onClick={openDialog}
                >
                  Sign in
                </Link>
              </div>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-primary-300 rounded-lg lg:hidden "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={toggleDrawer}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-[55%] lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuLinks.map((db, key) => (
                  <li
                    className={
                      location.pathname == db.link ? "active text-teal-600" : ""
                    }
                  >
                    <Link
                      href={db.link}
                      className={
                        location.pathname == db.link
                          ? "leading-6 font-bold text-primary-300"
                          : "text-base  font-medium leading-6 text-[#4B5563]"
                      }
                    >
                      {db.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </nav>
        {location?.pathname === "/" && <FindHeader />}
      </header>
      <DialogBox
        title="Sign Up"
        isOpen={isDialogOpen}
        onClose={closeDialog}
        className="modal-root"
      >
        <div>
          <SingupForm />
        </div>
      </DialogBox>
      <DialogBox
        title="Login"
        isOpen={isLogin}
        onClose={CloseLogin}
        className="modal-root"
      >
        <div>
          <LoginForm />
        </div>
      </DialogBox>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className=""
        size={300}
      >
        <div>
          <div>
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-primary-300  border-2 font-extrabold border-primary-700 focus:outline-none bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="default-modal"
              >
                <b>
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </b>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pt-4">
            {menuLinks.map((db, key) => (
              <Link
                href={db.link}
                className={
                  location.pathname == db.link
                    ? "leading-6 text-lg font-semibold text-primary-300 p-3"
                    : "text-lg  font-medium leading-6 text-[#4B5563] p-3"
                }
              >
                {db.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5 p-9 pt-5 pb-5 ">
            <Link
              href="#"
              className="text-white w-full text-center mr-0 bg-primary-700  hover:bg-primary-800  font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
              onClick={OpenLogin}
            >
              Log in
            </Link>
            <Link
              href="#"
              className="text-white w-full mr-0 text-center bg-primary-700  hover:bg-primary-800  font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none "
              onClick={openDialog}
            >
              Sign in
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
