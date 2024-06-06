import React from 'react';
import Image from 'next/image';

export const Card = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <Image
          className="w-full"
          src="/images/image.jpg" // Replace with your main image path
          alt="YouTube Video Thumbnail"
          layout="responsive"
          width={320}
          height={180}
        />
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5">
          24:17
        </div>
      </div>
      <div className="flex mt-2">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            src="/images/profile-image.jpg" // Replace with your profile image path
            alt="Profile"
            width={36}
            height={36}
          />
        </div>
        <div className="ml-3">
          <div className="text-sm font-semibold">How Chinese Girls Are Friendly With an Indian?</div>
          <div className="text-sm text-gray-600">Eva chang</div>
          <div className="text-sm text-gray-600">98K views • 1 month ago</div>
        </div>
      </div>
    </div>
  );
};

