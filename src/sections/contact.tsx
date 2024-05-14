import { MailboxIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Contact Us
            </h2>
            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <MapPinIcon className="mt-1 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">UNQ Technologies Pvt Ltd</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Near HSR Layout, Bangalore
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">+91 9895 363 130</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Monday - Friday, 9am - 5pm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailboxIcon className="mt-1 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">support@unq.ai</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get in touch with us anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-full flex h-44 items-center">
            <img
              alt="Map"
              className="w-[150px] h-[150px] shrink-0"
              src="/images/logo.png"
            />
            <img
              alt="Name"
              className="w-full shrink-0 grow"
              src="/images/text-logo.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
