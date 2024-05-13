import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { RiMenFill } from "react-icons/ri";
import Socials from "./Socials";
import HeroImg from "./HeroImg";

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Fotoğrafçılık
            </div>
            <h1 className="text-6xl xl:text-[72pz] xl:leading--[80px] tracking-[-2px] font-bold ">
              HADİ SİHİR YAPALIM!
            </h1>
            <p className="text-muted-foreground text-lg mb-8 font-lightmt-4 mx-auto xl:mx-0">
              San Francisco'dan doğa, portre ve sanat film fotoğrafçılarıyız ve
              doğal ışığı, orta format film kameralarını ve benekli kızıl
              saçlıları özellikle seviyoruz.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-1 mx-auto xl:mx-0 mb-12">
              <div className="flex w-full gap-x-4">
                <label form="email-adress" className="sr-only">
                  Email adress
                </label>
                <Input type="email" id="email" placeholder="E-posta" />
                <Link href="/contact">
                  <Button className="gap-x-2 bg-black">
                    Abone Ol <RiMenFill size={18} />{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          <div className="hidden xl:flex relative">
            <HeroImg
              imgSrc="/about/photography.svg"
              containerStyles="bg-no-repeat relative bg-bottom w-[550px] h-[475px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
