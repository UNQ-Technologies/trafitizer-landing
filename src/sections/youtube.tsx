import Player from "react-player/youtube"

function YoutubeSection() {
  return (
    <section
      id="featured"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Introduction & Demo
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Intro about Trafitizer and its features.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row relative w-full ">
        <Player url="https://youtu.be/JAMoIY5qpxw?si=BzmUPsk1WNs6ntln" controls />
        <Player url="https://youtu.be/XIpcix3dz6Y?si=uNH5wK0sDZg-vGNb" controls />
     
        </div>
      </div>
    </section>
  );
}

export default YoutubeSection;
