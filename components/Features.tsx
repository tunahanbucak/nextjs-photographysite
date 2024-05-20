import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'FOTOĞRAFÇILIK',
    description:
      'Stüdyo; müşteri listesi, parola korumalı sayfalar ve prova galerisi dahil olmak üzere fotoğrafçılar için özel olarak hazırlanmış öğelerle birlikte gelir',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'PORTFÖY LİSTELERİ',
    description:
      'Çalışmalarınızın muhteşem galerilerini oluşturmak için portföy listemizi kullanın. Kolay, sezgisel ve en önemlisi, çalışmalarınızın dikkat çekeceğinden emin olabilirsiniz   ',
    icon: LockClosedIcon,
  },
  {
    name: 'TAMAMEN ÖZELLEŞTİRİLEBİLİR',
    description:
      'Tamamen esnek bir temadır. Web sitenizin tüm öğeleri, sayfaları ve diğer her yönü, özel ihtiyaçlarınıza uyacak şekilde zahmetsizce uyarlanabilir',
    icon: ArrowPathIcon,
  },
  {
    name: 'ÜCRETSİZ EKLENTİLER',
    description:
      "Azalea'ya ücretsiz olarak iki harika eklenti dahildir: Devrim Kaydırıcı eklentisi ve sezgisel sürükle ve bırak Görsel Besteci sayfa oluşturucu",
    icon: FingerPrintIcon,
  },
];

export default function Features() {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary font-bold relative w-max flex items-center justify-between gap-x-3 mb=2 xl:mb-3 text-center mx-auto">
          Temel Özellikler
        </h2>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mt-w text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              Daha hızlı teslimat için ihtiyacınız olan her şey
            </p>
            <p className="mt-6 text-lg leading-8 text-black dark:text-white">
              Çok çeşitli, son derece kullanışlı ve kullanıcı dostu öğeler ve
              özellikler web sitesi oluşturmayı çocuk oyuncağına dönüştürür.
              Şimdi başlayın & Her zaman istediğiniz web sitesini yapmanın ne
              kadar kolay olduğunu görün
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                className="relative hover:scale-110 transition-all curser-pointer"
                key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                  <div className="flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center">
                    <feature.icon className="h-[36px] w-[36px] text-white" />
                  </div>
                  <div className="text-black dark:text-white">
                    {feature.name}
                  </div>
                </dt>
                <dd className="mt-2 text-base leading-7">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
