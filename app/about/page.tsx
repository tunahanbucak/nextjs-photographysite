import {
  RiRidingFill,
  RiUserHeartFill,
  RiStarHalfSLine,
  RiVidiconFill,
  RiVipCrown2Fill,
  RiSendPlaneFill,
} from 'react-icons/ri';
import HeroImg from '@/components/HeroImg';

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: 'Mrs Smith',
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: '+90 555 555 55 55',
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: 'photography@gmail.com',
  },
  {
    icon: <RiVipCrown2Fill size={20} />,
    text: "21 Mart 2003'te doğdum",
  },
  {
    icon: <RiStarHalfSLine size={20} />,
    text: 'Yüksek lisans',
  },
  {
    icon: <RiRidingFill size={20} />,
    text: '22, Elal Statu, Texas, US',
  },
];
export default function About() {
  return (
    <section className="pb-12 xl:py-24 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb-8 xl:mb-16 text-center mx-auto">
          Benim hakkımda
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1 xl:flex">
            <HeroImg
              containerStyles="w-[350px] h-[350px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"
              imgSrc="/about/profile.png"
            />
          </div>
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <h3 className="mb-4 text-3xl font-bold">
                  Mükemmel fotoğraf çekiminizi planlayalım
                </h3>
                <p className="text-muted-foreground text-lg mb-8 font-light max-w-xl mx-auto xl:mx-0">
                  {' '}
                  Misyonumuz fotoğraflarınızın genel mükemmelliğini daha da
                  geliştirmek, fotoğraf çekmek ve ömür boyu sevilecek anıları
                  yakalamaktır.
                </p>
                <p className="text-muted-foreground text-lg mb-8 font-light max-w-xl mx-auto xl:mx-0">
                  {' '}
                  Profesyonel fotoğrafçılık hizmetlerimiz, geleneksel fotoğraf
                  portresi bilgisi ile çağdaş tarzı birleştiriyor.
                </p>

                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div
                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        key={index}>
                        <div className="text-primary">{item.icon}</div>
                        <div> {item.text} </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
