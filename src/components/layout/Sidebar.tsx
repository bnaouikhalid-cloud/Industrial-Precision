import { 
  LayoutDashboard, 
  Wrench, 
  HardHat, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'interventions', label: 'Interventions', icon: Wrench },
    { id: 'technicians', label: 'Technicians', icon: HardHat },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 z-50 bg-surface-container-low shadow-[24px_0_24px_-12px_rgba(3,34,77,0.06)] flex flex-col p-4 gap-2">
      <div className="mb-8 px-4 py-6">
        <h1 className="text-lg font-black text-primary-container tracking-tight">Industrial Precision</h1>
        <p className="text-xs text-on-surface-variant opacity-70 font-medium mt-0.5">Precision Engine</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-variant hover:translate-x-1 font-medium'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-primary' : 'text-on-surface-variant'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-outline-variant/20 space-y-1">
        <button className="w-full flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant transition-all px-4 py-3 rounded-lg hover:translate-x-1 duration-200 font-medium">
          <HelpCircle size={20} />
          <span>Support</span>
        </button>
        <button className="w-full flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant transition-all px-4 py-3 rounded-lg hover:translate-x-1 duration-200 font-medium">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
