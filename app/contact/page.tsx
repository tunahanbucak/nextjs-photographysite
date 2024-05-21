import Form from '@/components/Form';
import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[80px] h-[2px] bg-primary"></span>
              Merhaba
            </div>
            <h1 className="text-6xl xl:text-[72pz] xl:leading--[80px] tracking-[-2px] font-bold max-w-md mb-8">
              {' '}
              Gelin birlikte çalışalım
            </h1>
            <p className="text-muted-foreground text-lg mb-8 font-light max-w-[400px] ">
              Size fotoğraflamamızı düşündüğünüz için çok teşekkür ederiz, bizim
              için gerçekten büyük bir onur. Daha fazla öğrenmekle ilgileniyor
              ya da bilgi almak istiyorsanız lütfen iletişim formunu doldurun,
              sizinle bir an önce iletişime geçelim. Sizden haber almak için
              sabırsızlanıyoruz..
            </p>
          </div>
          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
