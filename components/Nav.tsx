import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Anasayfa" },
  { path: "/about", name: "hakkında" },
  { path: "/portfolio", name: "portföy" },
  { path: "/pricing", name: "fiyatlandırma" },
  { path: "/contact", name: "İletişim" },
];

interface NavProps {
  containerStyles: string;
  linkStyles: string;
  underlineStyles?: string;
}

export default function Nav({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavProps) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={`capitalize ${linkStyles}`}
            href={link.path}>
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}

            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
