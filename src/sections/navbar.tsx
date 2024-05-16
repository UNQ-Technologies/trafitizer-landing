import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Award, Boxes, Camera, Home, Images } from "lucide-react";
import React from "react";
const navItems = [
  {
    name: "Contact",
    link: "#contact",
    icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Gallery",
    link: "#gallery",
    icon: <Images className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Feature",
    link: "#feature",
    icon: <Boxes className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Press",
    link: "#press",
    icon: <Camera className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Recognitions",
    link: "#recognitions",
    icon: <Award className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
].reverse();

function NavBar() {
  return (
    <section>
      <FloatingNav navItems={navItems} />
      <MobileNav />
      <nav className="bg-white hidden md:block border-b py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a className="flex items-center" href="#">
            <img
              alt="Logo"
              className="mr-3 h-10 w-full"
              height="40"
              src="/images/full-logo.png"
            />
          </a>
          <div className="flex space-x-4">
            <a className="text-gray-600 hover:text-gray-900" href="#contact">
              Contact
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#gallery">
              Gallery
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#feature">
              Feature
            </a>
            <a className="text-gray-600 hover:text-gray-900" href="#press">
              Press
            </a>
            <a
              className="text-gray-600 hover:text-gray-900"
              href="#recognitions"
            >
              Recognitions
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
      <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="flex items-center py-4 px-3 space-x-2 md:hidden">
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 "
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <img
              alt="Logo"
              className="mr-3 w-64 h-auto"
              height="20"
              src="/images/full-logo.png"
            />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <a
          href="/"
          className="flex items-center max-w-[70%]"
          onClick={() => setOpen(false)}
        >
            <img
              alt="Logo"
              className="mr-3 w-full h-auto"
              height="20"
              src="/images/full-logo.png"
            />
        </a>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
         
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                {item.link ? (
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground"
                  >
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
