'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import {
  RiMenFill,
  RiBookmark3Fill,
  RiBodyScanFill,
  RiServiceFill,
} from 'react-icons/ri';
import Socials from './Socials';
import HeroImg from './HeroImg';
import Badge from './Badge';
import { Fade } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                Fotoğrafçılık
              </div>
            </Fade>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <h1 className="text-6xl xl:text-[72pz] xl:leading--[80px] tracking-[-2px] font-bold ">
                HADİ SİHİR YAPALIM!
              </h1>
            </Fade>
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <p className="text-muted-foreground text-lg mb-8 font-lightmt-4 mx-auto xl:mx-0">
                Alanya'dan doğa, portre ve sanat film fotoğrafçılarıyız ve doğal
                ışığı, orta format film kameralarını ve benekli kızıl saçlıları
                özellikle seviyoruz.
              </p>
            </Fade>
            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-1 mx-auto xl:mx-0 mb-12">
                <div className="flex w-full gap-x-4">
                  <label form="email-adress" className="sr-only">
                    Email adress
                  </label>
                  <Input type="email" id="email" placeholder="E-posta" />
                  <Link href="/contact">
                    <Button className="gap-x-2 bg-black">
                      Abone Ol <RiMenFill size={18} />{' '}
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade
              direction="up"
              delay={1200}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </Fade>
          </div>
          <Fade
            direction="right"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <div className="hidden xl:flex  relative">
              <HeroImg
                imgSrc="/about/photography.svg"
                containerStyles="bg-no-repeat relative bg-bottom w-[550px] h-[475px]"
              />
            </div>
          </Fade>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-2-7xl px-6 lg:px-8">
            <dl
              className="grid grid-cols-1
             gap-x-8 gap0y016 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Yılların Deneyimi
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  <Badge
                    icon={<RiBookmark3Fill />}
                    endCountNum={12}
                    endCountText="+"
                  />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Takipçiler
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  <Badge
                    icon={<RiBodyScanFill />}
                    endCountNum={500}
                    endCountText="k"
                  />
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Projeler
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  <Badge
                    icon={<RiServiceFill />}
                    endCountNum={69}
                    endCountText="+"
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
