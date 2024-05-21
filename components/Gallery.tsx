import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'Portreler',
    name: '15 Şubat 2024',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/5.png',
    category: 'Modeller',
    name: '29 Nisan 2024',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/6.png',
    category: 'Yerler',
    name: '10 Kasım 2024',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/7.png',
    category: 'Kurumsal',
    name: '2 Ocak 2024',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/8.png',
    category: 'Moda',
    name: '22 Temmuz 2020',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/9.png',
    category: 'Kurumsal',
    name: '30 Mayıs 2014',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/10.png',
    category: 'Kurumsal',
    name: '25 Ağustos 2024',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/11.png',
    category: 'Modeller',
    name: '10 Ekim 2010',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,modi.',
    link: '/',
    codepen: '/',
  },
];

export default function Gallery() {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
          Galerim
        </h2>
        <div className="grid xl:grid-cols-3 gap-5">
          {projectData.map((project) => {
            return <ProjectCard project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
