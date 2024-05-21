'use client';

import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

const projectData = [
  {
    image: '/work/3.png',
    category: 'Portreler',
    name: 'Portre: Macro Allion',
    description: 'Çekim Tarihi: 07/02/2024',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/9.png',
    category: 'Portreler',
    name: 'Portre: Mark Adam',
    description: 'Çekim Tarihi: 10/08/2024',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/2.png',
    category: 'Ürünler',
    name: 'Ürün: Mark Adam',
    description: 'Çekim Tarihi: 10/08/2020',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/1.png',
    category: 'Portreler',
    name: 'Portre:Lucy Aln',
    description: 'Çekim Tarihi: 16/08/2018',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/8.png',
    category: 'Moda',
    name: 'Moda: Susee',
    description: 'Çekim Tarihi: 10/08/2023',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/4.png',
    category: 'Ürünler',
    name: 'İçerik Web Sitesi',
    description: 'Çekim Tarihi: 10/08/2024',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/5.png',
    category: 'Portreler',
    name: 'Moda: Susee',
    description: 'Çekim Tarihi: 10/08/2024',
    link: '/',
    codepen: '/',
  },
  {
    image: '/work/11.png',
    category: 'Moda',
    name: 'Moda: Adam',
    description: 'Çekim Tarihi: 10/08/2024',
    link: '/',
    codepen: '/',
  },
];

const uniqueCategories = [
  'tüm projeler',
  ...new Set(projectData.map((item) => item.category)),
];

export default function Portfolio() {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, SetCategory] = useState('tüm projeler');
  const filterefProjects = projectData.filter((project) => {
    return category === 'tüm projeler'
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
          Portföyüm
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  onClick={() => SetCategory(category)}
                  className="capitalize w=[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterefProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
