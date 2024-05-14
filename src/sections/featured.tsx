import React from 'react'
const images = Array(11).fill(0).map((_, i) => `/images/press/${i + 1}.png`);

function Featured() {
  return (
    <section id='press' className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
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
      {images.map(k =>  <div key={k} className="mx-auto flex w-full items-center justify-center">
          <img
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center grayscale hover:grayscale-0 transition-all"
            height="70"
            src={k}
            width="140"
          />
        </div>)}
    
      </div>
    </div>
  </section>
  )
}

export default Featured