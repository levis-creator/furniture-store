"use client";
import { CgClose } from "react-icons/cg";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

import { menuItems } from "@/api/menuItems";
import Slidein from "@/templates/Slidein";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const modalRef = useRef(null);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Slidein
            className="fixed left-0 bottom-0 right-0 top-0 bg-black z-20 bg-opacity-30 w-full"
            ref={modalRef}
          >
            <motion.div className="relative w-full h-full">
              <div
                className="absolute top-0 left-0 bottom-0 bg-gray-900 w-56 px-5"
                ref={menuRef}
              >
                <div className="my-8 h-fit  grid grid-cols-1 text-slate-50">
                  <button onClick={openMenu} className="justify-self-end">
                    <CgClose />
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-slate-200">
                  {menuItems.map((item, i) => (
                    <Link key={i} onClick={openMenu} href={item.link}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </Slidein>
        )}
      </AnimatePresence>
      <div className="w-full fixed top-0 pt-8 pb-6 flex items-center justify-between bg-white z-10 px-6 sm:px-12 md:px-16 lg:px-24 shadow-md">
        <div>Logo</div>
        <ul className="md:flex gap-9 hidden">
          {menuItems.map((items, i) => (
            <li key={i} className="uppercase font-bold">
              <Link href={items.link}>{items.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-3xl">
          <button className="relative inline-flex">
            <CiSearch />
          </button>
          <button className="relative inline-flex">
            <CiHeart />
            <div className="p-2 absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-700 text-white rounded-full -top-3 -right-2 "></div>
          </button>
          <button className="relative inline-flex">
            <CiShoppingCart />
            <div className="p-2 absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-red-700 text-white rounded-full -top-3 -right-2 ">
              {" "}
              20
            </div>
          </button>
          <button onClick={openMenu} className="md:hidden">
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
