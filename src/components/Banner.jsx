import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="mt-4 relative rounded-xl overflow-hidden">
      <img
        src={assets.main_banner_bg}
        alt="Banner"
        className="h-70 sm:h-85 md:h-100 xl:h-full w-full object-cover object-right"
      />
    </div>
  );
};

export default Banner;
