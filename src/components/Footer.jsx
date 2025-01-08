// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbBrandLinktree, TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import Logo from "../assets/fams.png";

const Footer = () => {
  return (
    <footer className=" pb-10 pt-10 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            {/* <h1 className="text-2xl font-bold">Hypnoterapy</h1> */}
            <img src={Logo} alt="Fams Logo" className="w-[200px] sm:w-[200px]" />
            <p className="text-dark2">
            ­­­­­­­­­­­­­­­­Fams Care merupakan bidang layanan kesehatan visi kekeluargaan, Yang mana kekeluargaan juga dapat dimaknai sebagai kasih sayang, sehingga pasien nyaman ketika datang untuk menggunakan layanan klinik yang disediakan­­­­­­­­­­­­­­­­­­­­­­
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Medical Consultation
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Medical Treatment
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Medical Advice
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Medical Diagnosis
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="wa.me/+6285742543780">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/famscare_semarang/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://khitanmodernungaran.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/channel/UCjHTxY0fr8nazbkGmKLDAwg/videos">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://linktr.ee/famscare?fbclid=PAZXh0bgNhZW0CMTEAAaZhtd95ysFRAot2_9PYh-hR6nLBQanoPjxe4NplsjGzdP5p9R3mCDs9tqI_aem_-rvdZoNbHcxB7uOTjeJopQ">
                <TbBrandLinktree className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
