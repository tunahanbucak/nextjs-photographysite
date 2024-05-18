'use client';

import CountUp from 'react-countup';

interface BadgeProps {
  containerStyles?: string;
  endCountNum: number;
  endCountText: string;
  badgeText?: string;
  icon: React.ReactNode;
}

export default function Badge({
  containerStyles,
  endCountNum,
  endCountText,
  badgeText,
  icon,
}: BadgeProps) {
  return (
    <div
      className={`z-10 flex w-[250px] px-16 h-[90px] bg-primary dark:backdrop-blur-[44px] shadow-2xl p-4 rounded-full items-center gap-x-4 ${containerStyles}`}>
      <div className="text-3xl text-white"> {icon} </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-white">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-[15px] leading-none font-medium text-black">
          {' '}
          {badgeText}
        </div>
      </div>
    </div>
  );
}
