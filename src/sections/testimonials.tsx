import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from real people who have used our product and loved it.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <blockquote className="flex-1 text-lg font-semibold leading-snug">
                "The platform has been a game-changer for our business. It's
                easy to use and has helped us streamline our operations."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="Samantha" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">Samantha Mayer</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    CEO, Acme Inc.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <blockquote className="flex-1 text-lg font-semibold leading-snug">
                "I was hesitant at first, but the onboarding process was a
                breeze. The team is incredibly helpful and responsive."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="John" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">John Doe</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    Product Manager, Acme Inc.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 dark:shadow-none dark:hover:shadow-lg">
              <blockquote className="flex-1 text-lg font-semibold leading-snug">
                "The platform has exceeded our expectations. We've seen a
                significant increase in productivity and efficiency."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage alt="Emily" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>EW</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-sm">
                  <div className="font-medium">Emily Watson</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    CTO, Acme Inc.
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