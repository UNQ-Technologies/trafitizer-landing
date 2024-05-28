import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon, Quote } from "lucide-react";

function Tail() {
  return (
    <section className="bg-[#1a1a1a] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="space-y-6">
          <div>
            <p className="text-2xl mr-8">
            <Quote /> 
              It is more than just a product, it's a commitment to saving lives.
              Trafitizer deals with post crash emergency response time, it is a
              one of a kind technology that is proven to reduce 30% of emergency
              response delay time.
          
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8 border p-4 rounded-lg border-gray-700 items-center">
          <Avatar className="rounded-sm w-72 h-auto">
            <AvatarImage
              alt="Mohamed Jasim"
              className="object-cover"
              src="/images/jasim.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-4">
            <LinkedinIcon onClick={() => window.open("https://www.linkedin.com/in/mohamedjasim/", "_blank")} className="text-blue-400 w-8 h-8 mt-1" />
            <div className="mt-4 text-center">
              <p className=" font-bold text-xl leading-3">Founder</p>
              <p className="text-xl">Mohamed Jasim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tail;
