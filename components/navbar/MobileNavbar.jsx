"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

const MobileNavbar = ({ alata, toggle, setToggle }) => {
  // const [toggle, setToggle] = useState(true);

  const router = useRouter();
  const currentRoute = usePathname();
  const { data: session, status } = useSession();

  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  const handleButtonClick = () => {
    if (session) {
      if (currentRoute !== "/dashboard") {
        router.push("/dashboard");
      } else if (currentRoute === '/dashboard') {
        signOut()
      }
    } else if (!session) {
      router.push("/auth/login");
    }
  };

  return (
    <div
      className={`sm:hidden md:none lg:none list-none absolute top-0 left-0 flex items-center justify-center text-center backdrop-blur-sm w-[100%]  z-30 h-screen flex-col ${alata.className}`}
    >
      <motion.div
        variants={parentAnimationVariants}
        initial="init"
        animate="animate"
        transition={{
          ease: "easeInOut",
          type: "string",
          // delay: 1,
          // duration: 0.5,
          // staggerChildren: 0.4,
          // delayChildren: 2,
        }}
        className="text-scheme-purple bg-scheme-white w-full h-full flex flex-col gap-5 items-start justify-center text-center p-5"
      >
        <ul className="flex flex-col gap-6 font-semibold text-left w-[90%]">
          <li className="hover:text-green-400 font-semibold transition-colors duration-300 text-xl">
            <Link
              href={"/"}
              onClick={toggleNav}
              className={currentRoute === "/" ? "text-green-400" : ""}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-green-400 font-semibold transition-colors duration-300 text-xl">
            <Link
              href={"/about"}
              onClick={toggleNav}
              className={currentRoute === "/about" ? "text-green-400" : ""}
            >
              About
            </Link>
          </li>
          <li className="hover:text-green-400 font-semibold transition-colors duration-300 text-xl">
            <Link
              href={"/contact"}
              onClick={toggleNav}
              className={currentRoute === "/search" ? "text-green-400" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
        {
          <button
            onClick={handleButtonClick}
            className={`hover:bg-gradient-to-br hover:text-green-400 hover:border-green-400 font-bold text-xl px-4 py-1 rounded-md text-scheme-purple  sm:hidden flex  transition-colors duration-300 border-2  border-scheme-purple ${
              currentRoute === "/dashboard" ? "text-green-400" : ""
            } ${alata.className}`}
          >
            {session
              ? (currentRoute !== "/dashboard"
                ? "Dashboard"
                : "Log Out")
              : "Log In"}
          </button>
        }
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
