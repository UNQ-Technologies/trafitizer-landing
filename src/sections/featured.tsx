import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const features = [
  "https://drive.google.com/file/d/19HY2AJGrzSx11KN99g9RzXVY773Rrfhv/view", // CNBC
  "https://drive.google.com/file/d/1rmwVdITCbK45qjaukm2sHSmJLyhwp979/view?usp=drive_link", // India Ahead
  "https://drive.google.com/file/d/1-sPxLnRLSKwQxUrenR9eHA1NFWtKQ5KV/view?usp=drive_link", // Media One
  "", // Mathrbhumi
  "https://drive.google.com/file/d/1-sPxLnRLSKwQxUrenR9eHA1NFWtKQ5KV/view?usp=drive_link", // Manorama
  "https://drive.google.com/file/d/1s2uKgFh_2t88PRZylFYS0GB1Zl9iFXM-/view?usp=drive_link", // WRI "
  "", // Dooradarshan
];

const images = Array(7)
  .fill(0)
  .map((_, i) => `/images/featured/${i + 1}.png`);

function Featured() {
  return (
    <section
      id="featured"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            As Featured In
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our product has been recognized and featured in leading media
            outlets.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {images.map((k, i) => {
            if (features[i] === "")
              return (
                <img
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center  hover:grayscale transition-all"
                  height="70"
                  src={k}
                  width="140"
                />
              );
            return (
              <HoverCard key={k} openDelay={0} closeDelay={0}>
                <HoverCardTrigger>
                  <div onClick={() => window.open(features[i], "_blank")} className="mx-auto flex w-full items-center justify-center">
                    <img
                      alt="Logo"
                      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center  hover:grayscale transition-all"
                      height="70"
                      src={k}
                      width="140"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="text-left">
                  <p className="text-lg font-semibold leading-snug">
                   Feature
                  </p>
                  <p>
                    A video covering the product and its features is available. You can watch it here.
                  </p>
                  <Button size="sm" className="mt-4" onClick={() => window.open(features[i], "_blank")}>
                   Watch video
                  </Button>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Featured;
