// import React from "react";
import Aboutus from "../assets/hero1.png";
import { motion } from "framer-motion";
import {
  FaBed,
  FaSmile,
  FaHandHoldingHeart,
  FaSmokingBan,
  FaRegLaughBeam,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-light">
      {/* Main Section */}
      <div className="container py-14 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={Aboutus}
            alt="About Hipnoterapi"
            className="w-[90%] md:w-[80%] max-w-[450px] object-cover drop-shadow"
          />
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-8">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-dark"
            >
              Apa Itu <span className="text-secondary">Hipnoterapi?</span>
            </motion.h1>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg text-dark2 leading-relaxed"
            >
              <strong>Hipnoterapi</strong> adalah metode terapi yang menggunakan <strong>hipnosis </strong> 
              untuk membantu Anda mencapai kondisi relaksasi mendalam (trance). Dalam kondisi ini, pikiran bawah sadar Anda menjadi lebih terbuka untuk menerima 
              sugesti positif yang mendukung perubahan, penyembuhan, dan pemberdayaan diri. Proses ini aman, terkendali, dan sangat efektif untuk berbagai tantangan.
            </motion.p>

            {/* Detailed Explanation */}
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold text-dark"
            >
              Bagaimana Hipnoterapi Bekerja?
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="list-disc ml-5 text-lg text-dark2 leading-relaxed"
            >
              <li>Anda akan rileks sepenuhnya, memberikan ruang bagi pikiran bawah sadar untuk fokus.</li>
              <li>Menyerap sugesti positif untuk membangun pola pikir yang mendukung.</li>
              <li>Mengubah kebiasaan atau pola lama dengan perspektif baru.</li>
            </motion.ul>

            {/* Target Audience */}
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl font-bold text-dark mt-4"
            >
              Siapa yang Cocok Mengikuti Hipnoterapi?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg text-dark2 leading-relaxed"
            >
              Hipnoterapi cocok untuk siapa saja yang ingin:
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="list-disc ml-5 text-lg text-dark2 leading-relaxed"
            >
              <li>Melepaskan hambatan mental atau emosional.</li>
              <li>Melakukan perubahan positif berkelanjutan.</li>
              <li>Meraih kehidupan yang lebih seimbang, damai, dan bermakna.</li>
            </motion.ul>
          </div>
        </div>
      </div>

{/* Services Section */}
<div className="container pb-14 pt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Cards Section (Kiri) */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaBed className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Tidur Nyenyak</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Hipnoterapi membantu Anda relaksasi untuk tidur lebih berkualitas.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaSmile className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Mengurangi Stres</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Meredakan ketegangan mental dan memberikan ketenangan pikiran.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaHandHoldingHeart className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Penyembuhan Emosional</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Melepaskan trauma lama dan menemukan kedamaian baru.
        </p>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaSmokingBan className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Stop Kebiasaan Buruk</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Bantu hentikan kebiasaan seperti merokok dan makan berlebihan.
        </p>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaRegLaughBeam className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Percaya Diri</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Memperkuat rasa percaya diri melalui sugesti positif.
        </p>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaBrain className="text-secondary text-4xl mb-4 mx-auto" />
        <h3 className="font-semibold text-xl text-dark">Pengembangan Diri</h3>
        <p className="text-dark2 mt-2 text-sm leading-relaxed">
          Membantu Anda mencapai potensi terbaik dalam hidup.
        </p>
      </motion.div>
    </div>

    {/* Text Section (Manfaat) */}
    <div className="flex flex-col justify-center">
      <motion.h1
        className="text-4xl font-bold text-left pb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Keuntungan Utama yang Diberikan oleh <span className="text-secondary">Hipnoterapi</span>
      </motion.h1>
      
    </div>
  </div>
</div>


    </div>
  );
};

export default About;
