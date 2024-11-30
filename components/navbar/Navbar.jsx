"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { logo, hamburger, closeburger } from "@/exports/image-exports";
import MobileNavbar from "./MobileNavbar";
import gsap, { Power3 } from "gsap";
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import { Inter, Poppins, Archivo, Alatsi, Alata } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
});
const alatsi = Alatsi({
  subsets: ["latin"],
  weight: "400",
});

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const { data: session, status } = useSession();
  const { t } = useTranslation();

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  const router = useRouter();
  const currentRoute = usePathname();

  const navRef = useRef();
  const logoRef = useRef();
  const listRefOne = useRef();
  const listRefTwo = useRef();
  const listRefThree = useRef();
  const listRefFour = useRef();
  let timeline = gsap.timeline();

  const getButtonText = () => {
    if (!session) return t("login");

    if (session?.user?.role === 'admin') {
      return currentRoute === '/adminDashboard' ? t("logout") : t('dashboard');
    }

    if (session?.user?.role === 'user') {
      return currentRoute === '/dashboard' ? t("logout") : t('dashboard');
    }

    return 'Log In';
  };

  const handleButtonClick = () => {
    if (!session) {
      router.push('/auth/login');
      return;
    }

    if (session?.user?.role === 'admin') {
      if (currentRoute !== '/adminDashboard') {
        router.push('/adminDashboard');
      } else {
        signOut();
      }
      return;
    }

    if (session?.user?.role === 'user') {
      if (currentRoute !== '/dashboard') {
        router.push('/dashboard');
      } else {
        signOut();
      }
    }
  };

  useEffect(() => {
    timeline
      .to(logoRef.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        duration: 0.6,
      })
      .to(listRefOne.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefTwo.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefThree.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.6,
      })
      .to(listRefFour.current, {
        x: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.8,
      });
  });

  const listAnimationVariant = {
    init: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  useEffect(() => {
    !toggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [toggle]);

  return (
    <header
      className={`header overflow-hidden px-4 lg:px-10 py-2`}
      ref={navRef}
    >
      <nav className="nav flex justify-between items-center h-12 p-4">
        <div
          className="logo--div py-3 flex justify-center items-center h-[64px] opacity-0 -translate-x-8"
          ref={logoRef}
        >
          <Link href={"/"}>
            <Image src={logo} height={40} alt={"logo"} />
            {/* <p
              className={`text-xl font-extrabold self-end ${alatsi.className}`}
            ></p> */}
          </Link>
        </div>
        <div className="flex items-center">
          {toggle ? (
            <button
              src={hamburger}
              alt="hamburger"
              onClick={toggleNav}
              className="hamburger flex cursor-pointer md:hidden lg:hidden sm:hidden transition-opacity duration-300 hover:text-scheme-purple text-2xl"
            >
              <RiMenu4Fill />
            </button>
          ) : (
            <button
              src={closeburger}
              onClick={toggleNav}
              className="hamburger flex cursor-pointer z-40 md:hidden lg:hidden sm:hidden transition-opacity duration-300 hover:text-scheme-purple text-2xl"
              alt="closeburger"
            >
              <RiCloseFill />
            </button>
          )}
          <motion.ul
            variants={listAnimationVariant}
            animate="animate"
            initial="init"
            transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
            className={`gap-4 hidden list-none lg:flex md:flex sm:flex font-semibold ${alata.className} rounded-full bg-scheme-darkGrey py-1.5 px-5`}
          >
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-purpleOne text-white transition-colors duration-300"
              ref={listRefOne}
            >
              <Link
                href={"/"}
                className={currentRoute === "/" ? "text-scheme-purple" : ""}
              >
              {t("home")}
              </Link>
            </li>
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-purpleOne text-white transition-colors duration-300"
              ref={listRefTwo}
            >
              <Link
                href={"/about"}
                className={
                  currentRoute === "/about" ? "text-scheme-purple" : ""
                }
              >
                {" "}
                {t("about")}
              </Link>
            </li>
            <li
              className="-translate-x-8 opacity-0 hover:text-scheme-purpleOne text-white transition-colors duration-300"
              ref={listRefThree}
            >
              <Link
                href={"/contact"}
                className={
                  currentRoute === "/contact" ? "text-scheme-purple" : ""
                }
              >
              {t("contact")}
              </Link>
            </li>
          </motion.ul>
        </div>
        <motion.div
          className="hidden sm:flex"
          variants={listAnimationVariant}
          animate="animate"
          initial="init"
          transition={{ duration: 0.4, type: "spring" }}
        >
          {
            <button
              onClick={handleButtonClick}
              className={`bg-scheme-purple hover:bg-gradient-to-br hover:bg-scheme-purpleOne  px-3 py-1 rounded-md text-white hidden sm:flex  transition-colors duration-300 ${
                currentRoute === "/dashboard" ? "active" : ""
              } ${alata.className}`}
            >
              {getButtonText()}
            </button>
          }
          {/* ====== */}
        </motion.div>

        {!toggle ? (
          <MobileNavbar alata={alata} setToggle={setToggle} toggle={toggle} />
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
