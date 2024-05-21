import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { RiMenFill } from 'react-icons/ri';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Newsletter() {
  return (
    <section>
      <div className="relative bg-tertiary dark:bg-secondary overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="tracking-tight sm:text-4xl text-4xl text-primary font-bold relative  flex items-center justify-between gap-x-3">
                Fotoğrafçıya mı ihtiyacınız var?
              </h2>
              <p className="mt-4  leading-8 text-muted-foreground text-lg mb-8 font-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Impedit distinctio incidunt,
                id officiis
              </p>

              <div className="mt-6 flex max-w-md gap-x-4">
                <Input
                  id="email-adress"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="E-postanızı girin"
                />
                <Link href="/contact">
                  <Button>
                    Abone ol <RiMenFill size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                  <CalendarDaysIcon className="h-6 w-6 text-white" />
                </div>

                <dt className="mt-4 font-semibold text-muted-foreground">
                  Haftalık makaleler
                </dt>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis
                </dd>
              </div>

              <div className="flex flex-col items-start">
                <div className="bg-primary p-2 ring-1 ring-white/10 rounded-full">
                  <HandRaisedIcon className="h-6 w-6 text-white" />
                </div>

                <dt className="mt-4 font-semibold text-muted-foreground">
                  Tam Güvenlik
                </dt>
                <dd className="mt-2 leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit distinctio incidunt, id officiis
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
