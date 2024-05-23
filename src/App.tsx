import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { motion } from "framer-motion";
import HeroSection from "./sections/hero";
import Gallery from "./sections/gallery";
import Featured from "./sections/featured";
import Contact from "./sections/contact";
import Testimonials from "./sections/testimonials";
import Tail from "./sections/tail";
import NavBar from "./sections/navbar";
import Press from "./sections/press";
import Recognitions from "./sections/recognitions";
import YoutubeSection from "./sections/youtube";

function App() {
  return (
    <main>
      <NavBar />
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
      <YoutubeSection />

      <section>
        <div className="container my-16 mx-auto px-6  w-full h-full flex items-center justify-center">
          <div className="text-center text-base lg:text-2xl">
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
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Get the Green light
            </button>
          </div>
        </div>
      </section>
      <section id="feature" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/ai.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
              <h3 className="text-xl font-semibold">Traffic Intelligence</h3>
              <p>
                The AI based system makes decisions to give green light for E.V
                at the road intersection based on traffic intelligence. The
                distance to signal change varies based on traffic conditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/intelig.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
              <h3 className="text-xl font-semibold">Level 2 Intelligence</h3>
              <p>
                The AI based system makes decisions to give green light for E.V
                at the road intersection based on traffic intelligence. The
                distance to signal change varies based on traffic conditions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/export.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
              <h3 className="text-xl font-semibold">Priority Levels</h3>
              <p>
                First Responders can choose the priority level. The system will
                consider the priority while considering EV at traffic
                intersection.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/compact.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
              <h3 className="text-xl font-semibold">Compatibility</h3>
              <p>
                The hardware is compatible with all the traffic signal
                controllers with a hurry call facility. Our engineering team
                also provides additional components to connect to different
                types of Traffic signal controllers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/green.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
              <h3 className="text-xl font-semibold">Green Corridor</h3>
              <p>
                This facility helps to ease the process of organ
                transplantations or VIP movements with a click of a button.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-2 rounded-full p-3 w-fit border-sky-600">

              
              <img
                src="/images/icons/cost.png"
                alt="ai"
                className="h-12 w-12 text-blue-500"
              />
              </div>
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
      <Recognitions />
      <Testimonials />
      <Press />
      <Tail />
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
