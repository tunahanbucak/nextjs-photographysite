"use client";

import Link from "next/link";
import {
  RiPaypalFill,
  RiSkypeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const icons = [
  {
    path: "/",
    name: <RiPaypalFill />,
  },
  {
    path: "/",
    name: <RiSkypeFill />,
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
  },

  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
];

export default function Socials({ containerStyles, iconStyles }: SocialsProps) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
