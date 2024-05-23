 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cluster } from "radash"
const images = Array(15).fill(0).map((_, i) => `/images/recognitions/${i + 1}.jpg`);
const clusteredImages = cluster(images, 2)


export default function Recognitions() {
  return (
    <section id="recognitions" className="w-full bg-zinc-50 py-12 md:py-24 lg:py-32 ">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1 ">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recognitions
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore the milestones covered by Trafitizer.
          </p>
        </div>
        <div className="w-full">

       <CarouselSize />
        </div>
      </div>
    </section>
  );
}




 
function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {clusteredImages.map((i) => (
          <CarouselItem key={i[0]}   className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
            <div className="relative group overflow-hidden ">
              <img 
              onClick={() => window.open(i[0], "_blank")}
                alt="Image 1"
                className="object-cover w-full h-60 mb-4 rounded-lg"
                height="300"
                src={i[0]}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
              
              />
        {i[1] &&        <img 
              onClick={() => window.open(i[1], "_blank")}
                alt="Image 1"
                className="object-cover w-full h-60 rounded-lg"
                height="300"
                src={i[1]}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
              
              />}
           
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer z-50" />
      <CarouselNext />
    </Carousel>
  )
}