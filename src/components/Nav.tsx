import {
  ArrowLeftToLineIcon,
  ArrowRightToLineIcon,
  ChartColumn,
  Home,
  Lock,
  LogOut,
  Unlock,
} from 'lucide-react';
import { useState } from 'react';

function Nav({
  isNavExpanded,
  setExpandedNav,
}: {
  isNavExpanded: boolean;
  setExpandedNav: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleNav = () => {
    if (!isToggleLocked) {
      setExpandedNav((prev: boolean) => !prev);
    }
  };

  const [isToggleLocked, setToggleLocked] = useState<boolean>(false);

  const toggleLock = () => {
    setToggleLocked((prev: boolean) => !prev);
  };

  return (
    <div
      className={`fixed md:sticky top-12 left-0 md:flex flex-col min-h-[400px] h-[calc(100vh-3rem)] p-2 text-zinc-900 bg-white border rounded max-w-min text-sm md:shadow-md transition-all duration-150 ease-linear ${
        isNavExpanded ? 'flex' : 'hidden'
      }`}
    >
      <div className="flex flex-col flex-grow gap-3 p-2 overflow-y-auto">
        <a className="flex flex-row items-center gap-1 hover:text-zinc-500" href="#">
          <Home size={24} />
          {isNavExpanded && <p>Home</p>}
        </a>
        <a className="flex flex-row items-center gap-1 hover:text-zinc-500" href="#">
          <ChartColumn size={24} />
          {isNavExpanded && <p>Dashboard</p>}
        </a>
      </div>
      <div className="flex flex-row gap-2">
        <div className="items-center hidden gap-1 md:flex">
          <button
            className={`p-2 text-center max-w-min ${
              isToggleLocked ? 'text-zinc-400' : 'text-zinc-800'
            } md:rounded-md transition-all duration-150 ease-linear`}
            onClick={toggleNav}
          >
            {!isNavExpanded && <ArrowRightToLineIcon size={18} />}
            {isNavExpanded && <ArrowLeftToLineIcon size={18} />}
          </button>
          {isNavExpanded && (
            <button
              className={`p-2 text-center max-w-min ${
                isToggleLocked ? 'text-zinc-800' : 'text-zinc-400'
              } md:rounded-md transition-all duration-150 ease-linear`}
              onClick={toggleLock}
            >
              {!isToggleLocked && <Unlock size={18} />}
              {isToggleLocked && <Lock size={18} />}
            </button>
          )}
        </div>
        {isNavExpanded && (
          <button className="flex items-center justify-center w-full gap-1 p-1 text-center transition-all duration-150 ease-linear border rounded-md md:px-2 text-zinc-200 hover:text-zinc-900 hover:bg-zinc-200 bg-zinc-900">
            <LogOut size={18} />
            <p>Logout</p>
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
