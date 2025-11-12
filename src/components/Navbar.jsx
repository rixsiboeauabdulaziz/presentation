import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
  import { useTranslation } from "react-i18next";

function NavList({ onClick }) {
  const location = useLocation();
  const { t } = useTranslation();

  const links = [
    { label: t("home"), to: "/" },
    { label: t("product"), to: "/product" },
    { label: t("comment"), to: "/coment" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
      {links.map((link) => {
        const isActive = location.pathname === link.to;
        return (
          <Typography
            key={link.to}
            as="li"
            className={`font-medium transition-all duration-200 ${
              isActive
                ? "text-black dark:text-white"
                : "text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            }`}
            onClick={onClick}
          >
            <Link to={link.to}>{link.label}</Link>
          </Typography>
        );
      })}
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const closeMenu = () => setOpenNav(false);

  return (
    <Navbar
      className={`
        mx-auto max-w-full px-6 py-4 shadow-lg transition-colors duration-300
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer tracking-wide font-semibold"
        >
          BrandName
        </Typography>

        <div className="hidden lg:flex">
          <NavList />
        </div>

        <div className="flex items-center gap-3">
          {/* Lang */}
          <div className="hidden lg:flex gap-2">
            {["ru", "uz"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLang(lng)}
                className={`
                  px-3 py-1 rounded-md text-sm font-semibold transition-all border
                  ${
                    i18n.language === lng
                      ? "border-green-600 text-green-600"
                      : "border-gray-400 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  }
                `}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Dark */}
          <IconButton
            variant="text"
            ripple={false}
            className="text-black dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </IconButton>

          {/* Burger */}
          <IconButton
            variant="text"
            ripple={false}
            className="text-black dark:text-white lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </IconButton>
        </div>
      </div>

      {/* ✅ MOBILE DROPDOWN */}
      {openNav && (
        <div className="mt-4 flex flex-col gap-4 lg:hidden">
          <NavList onClick={closeMenu} />

          {/* Lang mobile */}
          <div className="flex gap-2">
            {["ru", "uz"].map((lng) => (
              <button
                key={lng}
                onClick={() => {
                  changeLang(lng);
                  closeMenu();
                }}
                className={`
                  px-3 py-1 rounded-md text-sm font-semibold transition-all border
                  ${
                    i18n.language === lng
                      ? "border-green-600 text-green-600"
                      : "border-gray-400 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  }
                `}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </Navbar>
  );
}
