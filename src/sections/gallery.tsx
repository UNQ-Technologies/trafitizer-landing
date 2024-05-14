import React from "react";

const images = Array(35).fill(0).map((_, i) => `/images/gallery/${i + 1}.jpg`);

function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-1">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Gallery
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore our collection of stunning images.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((i) => (
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
                width="400"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4">
                {/* <p className="text-white text-sm font-medium">Caption 1</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
