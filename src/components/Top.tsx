import { LayoutGridIcon, Menu, User } from 'lucide-react';
import React from 'react';

function Top({
  setExpandedNav,
}: {
  setExpandedNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="sticky top-0 left-0 z-50 flex items-center w-full h-12 px-2 shadow-md bg-zinc-900 ">
      <button
        onClick={() => {
          setExpandedNav((prev: boolean) => !prev);
        }}
        className="p-2 text-zinc-200 md:hidden"
      >
        <Menu size={24} />
      </button>
      <button className="flex-row items-center hidden gap-1 p-2 text-zinc-200 md:flex">
        <LayoutGridIcon size={24} />
        <p className="text-lg italic font-bold">App Name</p>
      </button>
      <div className="flex-grow"></div>
      <button className="p-2 text-zinc-200">
        <User size={24} />
      </button>
    </div>
  );
}

export default Top;
