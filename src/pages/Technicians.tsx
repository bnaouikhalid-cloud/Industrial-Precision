import { motion } from 'motion/react';
import { Zap, HardHat, Star, Timer, AlertTriangle, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Technicians() {
  const techs = [
    { name: 'Marco Chen', role: 'Senior Specialist', interventions: 35, hours: '142.5 h', success: 94, quality: 4.8, status: 'Active', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'Sarah Kapoor', role: 'Maintenance Tech', interventions: 31, hours: '128.0 h', success: 88, quality: 4.5, status: 'On Leave', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { name: 'Lucas Weber', role: 'Systems Specialist', interventions: 28, hours: '115.4 h', success: 92, quality: 4.6, status: 'Active', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ];

  const barData = [
    { name: 'A. Dubois', value: 42, width: '85%' },
    { name: 'M. Chen', value: 35, width: '70%' },
    { name: 'S. Kapoor', value: 31, width: '65%' },
    { name: 'L. Weber', value: 28, width: '55%' },
    { name: 'J. Doe', value: 19, width: '40%' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-7xl mx-auto pb-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-on-surface tracking-tight">Technician Analytics</h2>
          <p className="text-on-surface-variant mt-1 font-medium">Real-time performance metrics and operational health.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg text-sm font-semibold hover:bg-surface-container-high transition-colors">
            Export CSV
          </button>
          <button className="px-4 py-2.5 primary-gradient text-on-primary rounded-lg text-sm font-semibold shadow-md active:scale-95 transition-all">
            Schedule Intervention
          </button>
        </div>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performer */}
        <Card className="lg:col-span-2 p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            <div className="w-32 h-32 rounded-full ring-4 ring-tertiary-fixed-dim/30 p-1 flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Top Performer" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <Badge variant="warning">Top Performer</Badge>
                <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Monthly Leaderboard</span>
              </div>
              <h3 className="text-2xl font-black text-on-surface tracking-tight">Alexandre Dubois</h3>
              <p className="text-on-surface-variant text-sm font-medium mb-6 mt-1">Lead Systems Engineer • 12 Years Exp.</p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold tracking-widest mb-1">Success Rate</p>
                  <p className="text-xl font-black text-primary">99.2%</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold tracking-widest mb-1">Quality Note</p>
                  <p className="text-xl font-black text-primary">4.9/5</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-on-surface-variant font-bold tracking-widest mb-1">Total Hrs</p>
                  <p className="text-xl font-black text-primary">164h</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Secondary Metrics */}
        <div className="space-y-6">
          <div className="bg-primary p-6 rounded-xl shadow-md text-on-primary flex justify-between items-center group cursor-pointer">
            <div>
              <p className="text-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-1">Avg Efficiency</p>
              <p className="text-3xl font-black tracking-tight">94.8%</p>
              <p className="text-on-primary-container text-xs font-medium mt-2">+2.4% from last week</p>
            </div>
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Zap size={28} className="fill-current" />
            </div>
          </div>
          
          <Card className="flex justify-between items-center border border-outline-variant/10">
            <div>
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest mb-1">Active Techs</p>
              <p className="text-3xl font-black text-on-surface tracking-tight">24 <span className="text-xl text-on-surface-variant font-bold">/ 28</span></p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
                <span className="text-xs font-medium text-on-surface-variant">4 in field operations</span>
              </div>
            </div>
            <div className="p-3 bg-surface-container rounded-xl text-primary">
              <HardHat size={28} />
            </div>
          </Card>
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-8">
          <div className="flex justify-between items-center mb-10">
            <h4 className="text-lg font-bold text-on-surface">Interventions per Technician</h4>
            <select className="text-xs font-bold bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary/20 cursor-pointer py-2 px-4 outline-none">
              <option>Last 30 Days</option>
              <option>Quarterly</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {barData.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xs font-bold w-24 text-on-surface-variant">{item.name}</span>
                <div className="flex-1 h-3 bg-surface-container rounded-full overflow-hidden">
                  <div 
                    className="h-full primary-gradient rounded-full"
                    style={{ width: item.width }}
                  ></div>
                </div>
                <span className="text-xs font-black text-on-surface w-8 text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="bg-surface-container-high rounded-xl p-8 relative overflow-hidden">
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
          <h4 className="text-lg font-bold text-on-surface mb-2">Quality Standards</h4>
          <p className="text-sm font-medium text-on-surface-variant mb-8">Aggregate across all 24 active technicians this month.</p>
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <Star size={18} className="text-on-tertiary-fixed-variant fill-current" />
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Client Rating</span>
              </div>
              <span className="text-sm font-black text-primary">4.72</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <Timer size={18} className="text-primary" />
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Resolution Time</span>
              </div>
              <span className="text-sm font-black text-primary">2.4h</span>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <AlertTriangle size={18} className="text-error" />
                <span className="text-xs font-bold text-on-surface uppercase tracking-wider">Recall Rate</span>
              </div>
              <span className="text-sm font-black text-error">1.2%</span>
            </div>
          </div>
          
          <button className="w-full mt-8 py-3.5 border-2 border-primary/10 text-primary text-xs font-bold rounded-xl hover:bg-primary hover:text-on-primary transition-all uppercase tracking-widest">
            Review Standards
          </button>
        </div>
      </div>

      {/* Directory Table */}
      <Card noPadding className="border border-outline-variant/10">
        <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/30 border-b border-outline-variant/10">
          <h4 className="text-lg font-bold text-on-surface">Technician Directory</h4>
          <div className="flex gap-6">
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">Sort: Success Rate</button>
            <button className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors">Filter: Region</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/50 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
              <tr>
                <th className="px-8 py-4">Technician</th>
                <th className="px-8 py-4">Interventions</th>
                <th className="px-8 py-4">Total Hours</th>
                <th className="px-8 py-4">Success Rate</th>
                <th className="px-8 py-4">Quality Note</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {techs.map((tech, i) => (
                <tr key={i} className="hover:bg-surface-container-low/40 transition-colors group cursor-pointer">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden ring-2 ring-surface-container-lowest">
                        <img src={tech.img} alt={tech.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{tech.name}</p>
                        <p className="text-[11px] font-medium text-on-surface-variant mt-0.5">{tech.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{tech.interventions}</td>
                  <td className="px-8 py-5 text-sm font-bold text-on-surface">{tech.hours}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${tech.success}%` }}></div>
                      </div>
                      <span className="text-sm font-black text-primary">{tech.success}%</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center text-tertiary-container">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm font-bold ml-1.5">{tech.quality}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <Badge variant={tech.status === 'Active' ? 'warning' : 'primary'}>{tech.status}</Badge>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 rounded-md hover:bg-surface-variant">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-8 py-4 bg-surface-container-low/30 flex justify-between items-center text-[10px] text-on-surface-variant font-bold uppercase tracking-widest border-t border-outline-variant/10">
          <span>Showing 1-3 of 24 technicians</span>
          <div className="flex gap-2">
            <button className="p-1.5 hover:bg-surface-variant rounded-md transition-colors"><ChevronLeft size={16} /></button>
            <button className="p-1.5 hover:bg-surface-variant rounded-md transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
