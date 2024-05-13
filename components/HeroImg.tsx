import Image from "next/image";

interface ImgProps {
  containerStyles: string;
  imgSrc: string;
}

export default function HeroImg({ containerStyles, imgSrc }: ImgProps) {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
}
