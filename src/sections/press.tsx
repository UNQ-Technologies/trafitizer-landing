import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const press = [
  {
    title: "Deccan Chronicle",
    logo: "/images/press/1.png",
    image: "/images/press-release/04 Deccan Chronicle 30-8-17.jpg",
    date: "30-8-17",
  },
  {
    title: "Business Standard",
    logo: "/images/press/2.png",
    link: "https://www.business-standard.com/article/technology/kochi-start-up-s-ai-system-helps-ambulances-steer-clear-of-traffic-jams-117062600509_1.html",
  },
  {
    title: "Daily News and Analysis",
    logo: "/images/press/3.png",
    link: "http://www.dnaindia.com/technology/report-kerala-techies-find-novel-way-to-end-ambulances-getting-stuck-at-traffic-junctions-2484088",
  },
  {
    title: "TIE Kerala",
    logo: "/images/press/4.png",
  },
  {
    title: "The New Indian Express",
    logo: "/images/press/5.png",
    image: "/images/press-release/New Indian Express 21-11-16 Edited.png",
    date: "21-11-16",
  },
  {
    title: "Malayala Manorama",
    logo: "/images/press/6.png",
    image: "/images/press-release/06 Manorama P-16 24-8-17.png",
    date: "24-8-17",
  },
  {
    title: "Madyamam",
    logo: "/images/press/7.png",
    image: "/images/press-release/07 Madyamam 25-8-17.png",
  },
  {
    title: "India Today",
    logo: "/images/press/India_Today_logo.png",
    link: "https://indiatoday.intoday.in/story/solution-found-to-end-problem-of-ambulances-stuck-in-traffic/1/987663.html",
  },
  {
    title: "Scoop Whoop",
    logo: "/images/press/8.png",
    link: "https://www.scoopwhoop.com/kerala-startup-ambulances-dont-get-stuck-in-traffic/?ref=WA-AMP",
  },
  {
    title: "News Bytes",
    logo: "/images/press/9.png",
    link: "https://www.business-standard.com/article/technology/kochi-start-up-s-ai-system-helps-ambulances-steer-clear-of-traffic-jams-117062600509_1.html",
  },
  {
    title: "Deepika",
    logo: "/images/press/10.png",
    image: "/images/press-release/03 Deepika 18-11-16.png",
    date: "18-11-16",
  },
  {
    title: "Mangalam",
    logo: "/images/press/11.png",
  },
  {
    title: "Mathrubhumi",
    logo: "/images/press/12.png",
    image: "/images/press-release/Mathrubumi 21-11-16.png",
    date: "21-11-16",
  },
];

function Press() {
  return (
    <section
      id="press"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Press
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Press and other printed media coverage of Trafitizer.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {press.map((k) => (
            <HoverCard key={k.title} openDelay={0} closeDelay={0}>
              <HoverCardTrigger>
                <div
                  onClick={
                    k.link
                      ? () => window.open(k?.link, "_blank")
                      : () => window.open(k.image, "_blank")
                  }
                  className="mx-auto cursor-pointer flex w-full items-center justify-center"
                >
                  <img
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center hover:grayscale transition-all"
                    height="100"
                    src={k.logo}
                    width="180"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <p>{k.title} </p>
                <p className="text-sm">{k.date}</p>
                {k.image && <img src={k.image} alt="press-release" />}
                {k.image ||
                  (k.link && (
                    <Button
                      size="sm"
                      className="mt-4"
                      onClick={
                        k.link
                          ? () => window.open(k?.link, "_blank")
                          : () => window.open(k.image, "_blank")
                      }
                    >
                      Open in new tab
                    </Button>
                  ))}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Press;
