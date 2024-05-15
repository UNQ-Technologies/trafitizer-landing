 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const images = Array(35).fill(0).map((_, i) => `/images/gallery/${i + 1}.jpg`);

export default function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1 overflow-hidden">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Gallery
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our collection of stunning images.
          </p>
        </div>
        <div className="w-full overflow-hidden">

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
        {images.map((i) => (
          <CarouselItem key={i} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="p-1">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                alt="Image 1"
                className="object-cover w-full h-60"
                height="300"
                src={i}
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
              
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                {/* <p className="text-white text-sm font-medium">Caption 1</p> */}
              </div>
            </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}