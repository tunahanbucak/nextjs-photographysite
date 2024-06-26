import { Smile, Scan, Bird } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <Smile size={48} strokeWidth={1} />,
    title: 'Portre',
    description:
      'Portre fotoğrafları eskiden sadece “vesikalık” çekimi olarak düşünülürdü. Günümüzde ise, kurumsal firmalar için olmazsa olmaz bir ihtiyaç haline geldi. Sadece kurumsal firmalar değil, profesyonel hayatın da bir parçası.Portre çekimlerini açık alanda, stüdyoda veya iş ortamınızda yapabiliyoruz. Hepsinin farklı bir amacı ve havası var.',
  },
  {
    icon: <Scan size={48} strokeWidth={1} />,
    title: 'Manzaralar',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  },
  {
    icon: <Bird size={48} strokeWidth={1} />,
    title: 'Yaşam Tarzı',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit distinctio incidunt, id officiis Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
  },
];

export default function Services() {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-6 sl:mb-24 text-center mx-auto">
          Hizmetlerimiz
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="relative w-full max-w-[425px] h-[450px] flex flex-col pb-10 justify-center items-center cursor-pointer hover:bg-tertiary dark:hover:bg-white/10 transition-all duration-700 "
                key={index}>
                <CardHeader className="text-primary">
                  <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex justify-center items-center absolute -bottom-6 right-6 ">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
