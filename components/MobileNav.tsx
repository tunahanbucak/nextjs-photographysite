import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "./Nav";
import Socials from "./Socials";
import { AlignJustify } from "lucide-react";
import Image from "next/image";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Image src="logo.svg" width={55} height={55} priority alt="logo" />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl"
            />
          </div>
          <Socials containerStyles="flex gap-x-4" iconStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
