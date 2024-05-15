import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Others Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from real people who have seen trafitizer and loved it.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <p className="flex-1 text-center text-lg font-semibold leading-snug">
                "Excellent technology!"
              </p>
              <div className="mt-4 flex items-center flex-col w-full gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="Samantha" src="/images/testimony/pinarayi-vijayan.png" />
                  <AvatarFallback>PV</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">Pinarayi Vijayan</div>
                  <div className="text-gray-500 dark:text-gray-400">
                   Cheif Minister, Kerala, India
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <p className="flex-1 text-lg font-semibold leading-snug">
                "Great Initiative! Congratulations and keep going."
              </p>
              <div className="mt-4 flex items-center flex-col w-full gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="John" src="/images/testimony/rajan-anandan.png" />
                  <AvatarFallback>RA</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">Rajan Anandan</div>
                  <div className="text-gray-500 dark:text-gray-400">
                  Vice President & Managing Director, Google India
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <p className="flex-1 text-lg font-semibold leading-snug">
                "I highly appreciate this system and the way it works in city traffic."
              </p>
              <div className="mt-4 flex items-center flex-col w-full gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="Emily" src="/images/testimony/mp-dinesh.png" />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">MP Dinesh IPS</div>
                  <div className="text-gray-500 dark:text-gray-400">
                   City Police commissioner, Kochi, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials