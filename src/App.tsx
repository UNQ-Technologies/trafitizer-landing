import {
  AccessibilityIcon,
  AppleIcon,
  Award,
  Boxes,
  BrainIcon,
  Camera,
  FocusIcon,
  Home,
  Images,
  LeafyGreenIcon,
  LinkedinIcon,
  SignalLowIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { motion } from "framer-motion";
import HeroSection from "./sections/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Gallery from "./sections/gallery";
import Featured from "./sections/featured";
import Contact from "./sections/contact";
import Testimonials from "./sections/testimonials";

const navItems = [
  {
    name: "Contact",
    link: "#contact",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Gallery",
    link: "#gallery",
    icon: <Images className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Feature",
    link: "#feature",
    icon: <Boxes className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Press",
    link: "#press",
    icon: <Camera className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Recognitions",
    link: "#recognitions",
    icon: <Award className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

function App() {
  return (
    <main>
      <FloatingNav navItems={navItems} />
      <section>
        <nav className="bg-white border-b py-4">
          <div className="container mx-auto flex justify-between items-center px-6">
            <a className="flex items-center" href="#">
              <img
                alt="Logo"
                className="mr-3 h-10"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap">
                TRAFITIZER
              </span>
            </a>
            <div className="flex space-x-4">
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Contact
              </a>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Gallery
              </a>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Feature
              </a>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Press
              </a>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Recognitions
              </a>
              <a className="text-gray-600 hover:text-gray-900" href="#">
                Home
              </a>
            </div>
          </div>
        </nav>
      </section>
      <HeroSection />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          The world's first Intelligent emergency
          <Highlight className="text-black dark:text-white">
            vehicle preemption system
          </Highlight>
          designed & proven in the extreme Indian{" "}
          <Highlight className="text-black dark:text-white">
            road traffic conditions.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <section>
        <div className="container my-16 mx-auto px-6  w-full h-full flex items-center justify-center">
          <div className="text-center text-2xl">
            <p className="mb-4 text-justify ">
              Imagine a world where ambulances and fire trucks glide through
              traffic, saving precious minutes that could mean the difference
              between life and death. Every day, countless lives are lost due to
              delays in emergency response. Stuck in traffic jams, ambulances
              and fire trucks are often unable to reach those in critical need
              on time. A few minutes can mean the difference between survival
              and tragedy.
            </p>
            <p className="mb-4 text-justify">
              Introducing Trafitizer, an innovative advancement in traffic
              signal intelligence. When an emergency vehicle approaches,
              Trafitizer assesses both the nature of the emergency and the
              traffic conditions, timing the signal change to green precisely
              when needed. This ensures the safety and consideration of all road
              users.
            </p>
            <p className="mb-4 text-justify">
              Remarkably, Trafitizer achieves this without the need for field
              sensors at traffic junctions to detect approaching emergency
              vehicles. Following its successful implementation in Kochi, Mr.
              Jasim has dedicated himself to ongoing research aimed at reducing
              the system’s cost, facilitating its widespread adoption.
            </p>
            <p className="mb-4 text-justify">
              Implementing Trafitizer in metro cities could significantly reduce
              road fatalities. The implementation in Kochi revealed a staggering
              number of ambulances carrying critical patients being delayed at a
              single junction daily. The authorities claimed this technology was
              able to save more than 80 lives in Kochi during a short span of
              time.
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Get the Green light
            </button>
          </div>
        </div>
      </section>
      <section id="feature" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <BrainIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Traffic Intelligence</h3>
              <p>
                The AI based system makes decisions to give green light for E.V
                at the road intersection based on traffic intelligence. The
                distance to signal change varies based on traffic conditions.
              </p>
            </div>
            <div className="space-y-4">
              <AppleIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Level 2 Intelligence</h3>
              <p>
                The AI based system makes decisions to give green light for E.V
                at the road intersection based on traffic intelligence. The
                distance to signal change varies based on traffic conditions.
              </p>
            </div>
            <div className="space-y-4">
              <FocusIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Priority Levels</h3>
              <p>
                First Responders can choose the priority level. The system will
                consider the priority while considering EV at traffic
                intersection.
              </p>
            </div>
            <div className="space-y-4">
              <AccessibilityIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Compatibility</h3>
              <p>
                The hardware is compatible with all the traffic signal
                controllers with a hurry call facility. Our engineering team
                also provides additional components to connect to different
                types of Traffic signal controllers.
              </p>
            </div>
            <div className="space-y-4">
              <LeafyGreenIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Green Corridor</h3>
              <p>
                This facility helps to ease the process of organ
                transplantations or VIP movements with a click of a button.
              </p>
            </div>
            <div className="space-y-4">
              <SignalLowIcon className="h-12 w-12 text-blue-500" />
              <h3 className="text-xl font-semibold">Low Operating Cost</h3>
              <p>
                The software has undergone several architectural level revisions
                to make it cost-effective. It works without any hardware, to
                detect emergency vehicles at traffic intersection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Featured />
     <Testimonials />
      <section className="bg-[#1a1a1a] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="space-y-6">
            <p className="text-xl italic">
              “The world's first Intelligent emergency vehicle preemption system
              designed & proven in the extreme Indian road traffic conditions.”
            </p>
            <div>
              <h3 className="text-2xl font-bold">TRAFITIZER:</h3>
              <p className="text-base">
                It is more than just a product, it's a commitment to saving
                lives. Trafitizer deals with post crash emergency response time,
                it is a one of a kind technology that is proven to reduce 30% of
                emergency response delay time.
              </p>
              <p className="text-base">
                Visit Jasim's page to know more about him:
                <a className="text-blue-400" href="#">
                  mjasim.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Avatar>
              <AvatarImage
                alt="Mohamed Jasim"
                src="/placeholder.svg?height=128&width=128"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="mt-4 text-center">
              <p className="text-sm">Founder</p>
              <p className="font-bold">Mohamed Jasim</p>
              <LinkedinIcon className="text-blue-400 w-5 h-5 mt-1" />
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Contact />

      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Trafitizer. All rights reserved.
          </p>
          {/* <div className="flex space-x-4">
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Privacy Policy
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Terms of Service
            </a>
          </div> */}
        </div>
      </footer>
    </main>
  );
}

export default App;
