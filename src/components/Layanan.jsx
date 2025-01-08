import React from "react";
import Offline from "../assets/oflen.jpg";
import Online from "../assets/banner4.jpg";
import { motion } from "framer-motion";
import { FaRegHandshake, FaLaptop, FaClock, FaUserTie } from "react-icons/fa";

const Layanan = () => {
const services = [
    {
        id: 1,
        title: "Hipnoterapi Tatap Muka",
        price: "Rp 850,000 / Sesi",
        duration: "1 - 2 Jam",
        features: [
            "Dipandu Oleh Hipnoterapis Profesional",
            "Ruang Terapi Yang Nyaman & Privasi",
            "Efektivitas Hipnoterapi Maksimal",
            "Hipnoterapi Langsung Tatap Muka",
            "Dokumen Perjanjian Tercetak",
        ],
        icon: <img src= {Offline} alt="Offline" className="w-200 h-200 mb-3 rounded-lg " />,
    },
    {
        id: 2,
        title: "Sesi Hipnoterapi Online",
        price: "Rp 700,000 / Sesi",
        duration: "1 - 1.5 Jam",
        features: [
            "Dipandu Oleh Hipnoterapis Profesional",
            "Dilakukan Melalui Platform Online (Zoom/Skype)",
            "Nyaman Dari Rumah",
            "Efektivitas Tetap Tinggi",
            "Dokumen Panduan Dikirim via Email",
        ],
        icon: <img src={Online} alt="Laptop Icon" className="w-200 h-200 mb-3 rounded-lg" />,
    },
];

return (
    <section className=" py-14">
        <div className="container mx-auto px-4">
            {/* Header */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-dark text-center mb-6"
            >
                Layanan <span className="text-secondary">Hipnoterapi</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-md text-dark2 text-center mb-10"
            >
                Temukan layanan yang sesuai dengan kebutuhan Anda. Kami menyediakan pilihan tatap muka 
                dan sesi online untuk kenyamanan Anda.
            </motion.p>

            {/* Service Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm w-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col items-start">
                            {/* Icon */}
                            <div className="flex justify-center items-center mb-3">
                                {service.icon}
                            </div>

                            {/* Title & Price */}
                            <h3 className="text-lg font-bold text-dark">{service.title}</h3>
                            <p className="text-secondary text-md font-medium">{service.price}</p>

                            {/* Duration */}
                            <div className="flex items-center space-x-2 text-dark2 text-sm mt-2 mb-4">
                                <FaClock className="text-secondary" />
                                <span>{service.duration}</span>
                            </div>

                            {/* Features */}
                            <ul className="list-disc ml-5 text-dark2 text-sm space-y-1">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
};

export default Layanan;
