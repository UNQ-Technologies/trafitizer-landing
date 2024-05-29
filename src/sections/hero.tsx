import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "framer-motion";
// import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const images = ["/images/1.jpg", "/images/2.jpg"];

// const words = [
//   {
//     text: "A",
//   },
//   {
//     text: "Unique",
//   },
//   {
//     text: "technology",
//   },
//   {
//     text: "to",
//   },
//   {
//     text: "save",
//   },
//   {
//     text: "lives",
//     className: "text-blue-500 dark:text-blue-500",
//   },
//   {
//     text: "&",
//     className: "text-blue-500 dark:text-blue-500",
//   },
//   {
//     text: "resources",
//     className: "text-blue-500 dark:text-blue-500",
//   },
// ];

function HeroSection() {
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div

        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex text-white flex-col justify-center items-center"
      >
        {/* <TypewriterEffect words={words} /> */}

        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> */}
      </motion.div>
    </ImagesSlider>
  );
}

export default HeroSection;
