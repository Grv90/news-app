import { Menu } from "lucide-react";

export const MobileNav = () => (
  <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
    <div className="flex justify-around items-center">
      <button className="flex flex-col items-center text-blue-600">
        <Menu size={24} />
        <span className="text-xs mt-1">Menu</span>
      </button>
      <button className="flex flex-col items-center">
        <Menu size={24} />
        <span className="text-xs mt-1">Top Stories</span>
      </button>
      <button className="flex flex-col items-center">
        <Menu size={24} />
        <span className="text-xs mt-1">My News</span>
      </button>
    </div>
  </div>
);
