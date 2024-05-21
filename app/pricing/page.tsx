'use client';

import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

const includedFeatures = [
  'Özel forum erişimi',
  'Üye Kaynakları',
  'Yıllık konferansa giriş hakkı',
  'Resmi üye ekipmanı',
];

export default function Pricing() {
  const { toast } = useToast();
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto ">
          Fiyatlandırma
        </h2>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sevgiye değer anılar
          </h2>
          <p className="mt-6 text-lg leading-8">
            Solene ile anılar yaratın ve büyüyü kutlayın - harika bir her şeye
            sahip tasarlanmış düğün fotoğrafçılığı teması
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tighy">
              Ömür Boyu Üyelik
            </h3>
            <p className="mt-6 text-base leading-7">
              Solene ile anılar yaratın ve büyüyü kutlayın - harika bir her şeye
              sahip tasarlanmış düğün fotoğrafçılığı teması
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                İçindekiler
              </h4>
              <div className="h-px flex-auto dark:bg-gray-100 bg-gray-300"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols01 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              {includedFeatures.map((feature) => (
                <li
                  className="flex text-muted-foreground gap-x-3"
                  key={feature}>
                  <CheckIcon
                    className="h-6 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
            <div className=" text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16  bg-tertiary py-10 rounded-2xl dark:bg-secondary">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold">
                  Bir kez öde, sonsuza dek sahip ol
                </p>
                <p className="mt-6 items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    $319
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide">
                    USD
                  </span>
                </p>
                <Button
                  onClick={() => {
                    toast({
                      title: 'Satın alma başarılı ',
                      description: '21 Mayıs 2024 Salı, saat 22:12',
                      action: <ToastAction altText="Close"> Kapat</ToastAction>,
                    });
                  }}
                  className="gap-x-2 mt-3">
                  Satın Alma
                </Button>
                <p className="mt-6 text-xs leading-5">
                  Kolay şirket geri ödemesi için faturalar ve makbuzlar
                  mevcuttur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
