'use client';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Jenifer',
    job: 'Şef',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Lopez Chris',
    job: 'CEO',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'Hamilton',
    job: 'COO',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Lucifer',
    job: 'APP Developer',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Mark Steve',
    job: 'Şef',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Stork Gem',
    job: 'Şef',
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi. ',
  },
];

export default function Reviews() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold  flex items-center justify-center gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
          Çalışmalarımız hakkında şunları söylüyorlar
        </h2>
        <Swiper
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="h-[350px]">
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="p-8 min-h-[300px] cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex flex-col items-start gap-x-4 ">
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                        className="mb-2"
                      />
                      <div className="flex flex-col ">
                        <CardTitle> {person.name} </CardTitle>
                        <p> {person.job} </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
