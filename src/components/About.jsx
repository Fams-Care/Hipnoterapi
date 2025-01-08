// import React from "react";
import Aboutus from "../assets/image2.png";
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
    <div className="">
{/* Main Section  */}
<div className="container py-14 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-12 bg-light rounded-3xl">
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
        <strong>Hipnoterapi</strong> adalah metode terapi yang menggunakan <strong>hipnosis</strong> untuk membantu Anda mencapai kondisi relaksasi mendalam (trance). 
        Dalam kondisi ini, pikiran bawah sadar Anda menjadi lebih terbuka untuk menerima sugesti positif yang mendukung perubahan, penyembuhan, dan pemberdayaan diri. 
        Proses ini aman, terkendali, dan sangat efektif untuk berbagai tantangan.
      </motion.p>

      {/* Additional Explanation */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-dark2 leading-relaxed"
      >
        Hipnoterapi sering digunakan untuk membantu orang mengatasi berbagai masalah, mulai dari mengelola stres dan kecemasan hingga mengubah kebiasaan buruk dan meningkatkan kepercayaan diri. 
        Metode ini mengandalkan hubungan yang kuat antara pikiran dan tubuh untuk menciptakan perubahan yang signifikan dan bertahan lama.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg text-dark2 leading-relaxed"
      >
        Dengan bimbingan seorang hipnoterapis profesional, Anda akan menemukan potensi tersembunyi dalam diri Anda untuk menghadapi tantangan dan mencapai kehidupan yang lebih bermakna.
      </motion.p>
    </div>
  </div>
</div>


      {/* Services Section */}
      <div className="container pb-24 pt-16 ">
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
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-dark2 mt-4"
            >
              Hipnoterapi adalah metode yang efektif untuk membantu Anda mengatasi berbagai tantangan hidup, baik secara emosional maupun mental. Dengan mengakses pikiran bawah sadar, hipnoterapi membuka peluang untuk menciptakan perubahan positif yang mendalam dan berkelanjutan.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-dark2 mt-4"
            >
              Proses ini tidak hanya menawarkan relaksasi mendalam, tetapi juga membantu meningkatkan rasa percaya diri, mengatasi stres, dan memperkuat pola pikir positif. Dengan pendekatan yang aman dan ilmiah, hipnoterapi menjadi solusi yang bermanfaat bagi siapa saja yang ingin meraih kualitas hidup yang lebih baik.
            </motion.p>
          </div>

        </div>
      </div>


      <div className="container text-center bg-light py-16 rounded-3xl">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-dark"
    >
      Bagaimana <span className="text-secondary">Hipnoterapi</span> Bekerja?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-lg text-dark2 mt-4"
    >
      Hipnoterapi bekerja dengan mengakses pikiran bawah sadar Anda untuk membuat perubahan positif yang mendalam. Proses ini tidak hanya tentang relaksasi, tetapi juga menciptakan perubahan dalam pola pikir dan kebiasaan yang dapat membantu Anda mengatasi berbagai tantangan hidup.
    </motion.p>
  
      {/* Step Process */}
      <div className="container mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 pb-15">
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
        >
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-secondary w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            1
          </div>
          <h3 className="text-xl font-semibold text-dark mt-5">Relaksasi Mendalam</h3>
          <p className="text-dark2 mt-4">
            Anda akan dibimbing menuju kondisi relaksasi yang mendalam, dimana pikiran sadar Anda menjadi lebih tenang dan tubuh Anda sepenuhnya rileks.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
        >
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-secondary w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            2
          </div>
          <h3 className="text-xl font-semibold text-dark mt-5">Akses Pikiran Bawah Sadar</h3>
          <p className="text-dark2 mt-4">
            Hipnoterapis akan memandu Anda untuk mengakses pikiran bawah sadar, tempat di mana kebiasaan dan keyakinan terbentuk.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
        >
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-secondary w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            3
          </div>
          <h3 className="text-xl font-semibold text-dark mt-5">Sugesti Positif</h3>
          <p className="text-dark2 mt-4">
            Dalam keadaan relaksasi, Anda akan diberikan sugesti positif yang mengarah pada perubahan pola pikir dan kebiasaan yang lebih sehat.
          </p>
        </motion.div>
      </div>
      </div>
      {/* Target Audience Section */}
<div className="container py-16 ">
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl font-bold text-dark">
      Siapa yang Cocok Mengikuti <span className="text-secondary">Hipnoterapi?</span>
    </h2>
    <p className="text-lg text-dark2 mt-4 leading-relaxed">
      Hipnoterapi adalah untuk Anda yang ingin melangkah menuju kehidupan yang lebih baik. Temukan apakah Anda cocok di sini:
    </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      <FaHandHoldingHeart className="text-secondary text-4xl mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-dark">Melepaskan Hambatan</h3>
      <p className="text-dark2 mt-4 leading-relaxed">
        Jika Anda merasa terjebak oleh trauma, rasa takut, atau emosi yang sulit diatasi, hipnoterapi bisa membantu melepaskannya.
      </p>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      <FaSmile className="text-secondary text-4xl mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-dark">Perubahan Positif</h3>
      <p className="text-dark2 mt-4 leading-relaxed">
        Untuk Anda yang ingin memulai kebiasaan baru atau mengubah pola pikir untuk meraih hidup yang lebih baik.
      </p>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg text-center"
    >
      <FaRegLaughBeam className="text-secondary text-4xl mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-dark">Hidup Lebih Bermakna</h3>
      <p className="text-dark2 mt-4 leading-relaxed">
        Jika Anda mencari keseimbangan dan ketenangan, hipnoterapi membantu Anda mencapainya dengan pendekatan yang mendalam.
      </p>
    </motion.div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="text-center mt-12"
  >
    <p className="text-lg text-dark2 leading-relaxed">
      Dengan hipnoterapi, Anda tidak hanya membuka pintu menuju perubahan, tetapi juga memberdayakan diri Anda untuk menghadapi kehidupan dengan lebih percaya diri dan damai.
    </p>
  </motion.div>
</div>



      
    </div>
  );
};

export default About;
