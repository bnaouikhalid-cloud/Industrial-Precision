import { Search, Bell, Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 z-40 bg-surface/95 backdrop-blur-md shadow-sm h-16 flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-4">
        <div className="relative group hidden md:block">
          <span className="absolute inset-y-0 left-3 flex items-center text-on-surface-variant">
            <Search size={18} />
          </span>
          <input 
            type="text" 
            placeholder="Search operations..." 
            className="bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2 text-sm w-80 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none text-on-surface placeholder:text-on-surface-variant"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-primary hover:bg-surface-variant/80 rounded-full transition-colors active:scale-95 duration-150">
          <Bell size={20} />
        </button>
        <button className="p-2 text-primary hover:bg-surface-variant/80 rounded-full transition-colors active:scale-95 duration-150">
          <Calendar size={20} />
        </button>
        <div className="h-8 w-8 ml-2 bg-primary-container rounded-full flex items-center justify-center overflow-hidden ring-2 ring-surface-container-high cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            alt="User Profile" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
