import { contacts } from "@/api/contacts";
import { menuItems } from "@/api/menuItems";
import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import { BiHomeSmile } from "react-icons/bi";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
const ContactItem = ({ icon, detail }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-lg">{icon}</div>
      <p>{detail}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 sm:px-12 md:px-16 lg:px-24 py-2 mt-10">
      <div className="flex flex-col items-center justify-center py-10 gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="space-y-5">
          <h2 className="font-bold uppercase">company name and Logo</h2>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            ducimus odit itaque laudantium accusantium officia ratione atque
            vero ex dolor consectetur necessitatibus laboriosam ipsum autem ad,
            minima animi incidunt. Soluta.
          </p>
        </div>
        <div className=" w-full space-y-5">
          <h2 className="uppercase font-bold">useful links</h2>
          <ul className="">
            {menuItems.map((items, i) => (
              <li key={i} className="">
                <Link href={items.link}>{items.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full space-y-5">
          <h2 className="uppercase font-bold ">Contact</h2>
          <div>
            <ContactItem icon={<BiHomeSmile />} detail={contacts.address} />
            <ContactItem icon={<HiOutlineMail />} detail={contacts.email} />
            <ContactItem icon={<IoIosCall />} detail={contacts.phone} />
          </div>
        </div>
        <div className="w-full space-y-5">
          <h2 className="font-bold uppercase">socials</h2>
          <ul className="text-xl flex gap-3">
            <li>
              <FaFacebook />{" "}
            </li>
            <li>
              {" "}
              <FaWhatsapp />
            </li>
            <li>
              <ImLinkedin />
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full space-y-5 flex items-center gap-2">
        Copyright{" "}
        <div className="flex items-center">
          <AiOutlineCopyright />
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
