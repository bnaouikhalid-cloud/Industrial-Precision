import { motion } from 'motion/react';
import { Download, Plus, Factory, Timer, CheckCircle, Star, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Dashboard() {
  const recentInterventions = [
    { id: '#INT-9842', client: 'Apex Industries', priority: 'danger', status: 'In Progress', icon: Factory },
    { id: '#INT-9840', client: 'Stark Logistics', priority: 'primary', status: 'Resolved', icon: Wrench },
    { id: '#INT-9838', client: 'Nexus Data Center', priority: 'warning', status: 'Resolved', icon: Server },
    { id: '#INT-9837', client: 'Solaris Energy', priority: 'danger', status: 'In Progress', icon: Zap },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface">Operational Overview</h2>
          <p className="text-on-surface-variant mt-1 font-medium">Real-time performance metrics and maintenance tracking.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-secondary-container text-on-secondary-container rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-surface-variant transition-colors">
            <Download size={18} />
            Export PDF
          </button>
          <button className="px-4 py-2.5 primary-gradient text-on-primary rounded-lg font-semibold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <Plus size={18} />
            New Intervention
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary-container p-2.5 rounded-lg text-surface-container-low">
              <Factory size={20} />
            </div>
            <Badge variant="warning">+12% vs LY</Badge>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Total Interventions</p>
          <h3 className="text-3xl font-black text-on-surface mt-1 tracking-tight">1,482</h3>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary-container p-2.5 rounded-lg text-surface-container-low">
              <Timer size={20} />
            </div>
            <Badge variant="danger">-0.4h target</Badge>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">MTTR (Repair Time)</p>
          <h3 className="text-3xl font-black text-on-surface mt-1 tracking-tight">4.2h</h3>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary-container p-2.5 rounded-lg text-surface-container-low">
              <CheckCircle size={20} />
            </div>
            <Badge variant="warning">Optimal</Badge>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Success Rate</p>
          <h3 className="text-3xl font-black text-on-surface mt-1 tracking-tight">88%</h3>
        </Card>

        <Card>
          <div className="flex justify-between items-start mb-4">
            <div className="bg-primary-container p-2.5 rounded-lg text-surface-container-low">
              <Star size={20} />
            </div>
            <Badge variant="primary">Premium</Badge>
          </div>
          <p className="text-sm font-medium text-on-surface-variant">Avg Quality Score</p>
          <h3 className="text-3xl font-black text-on-surface mt-1 tracking-tight">8.5<span className="text-lg text-on-surface-variant font-medium">/10</span></h3>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="text-lg font-bold text-on-surface">Monthly Evolution</h4>
              <p className="text-xs font-medium text-on-surface-variant mt-1">Intervention volume by month</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-lg text-xs font-bold px-4 py-2 focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer text-on-surface">
              <option>Last 12 Months</option>
              <option>Year to Date</option>
            </select>
          </div>
          
          {/* CSS Bar Chart Representation */}
          <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2">
            {[45, 60, 55, 80, 95, 70, 40, 50, 65, 85, 75, 90].map((height, i) => (
              <div key={i} className="w-full relative group h-full flex items-end">
                <div 
                  className={`w-full rounded-t-lg transition-all duration-300 ${height === 95 ? 'bg-primary-container' : 'bg-surface-container-high group-hover:bg-primary-container/40'}`}
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </Card>

        <Card className="p-8 flex flex-col items-center justify-center">
          <div className="w-full mb-8">
            <h4 className="text-lg font-bold text-on-surface">Task Mix</h4>
            <p className="text-xs font-medium text-on-surface-variant mt-1">Preventive vs Corrective</p>
          </div>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="96" cy="96" fill="none" r="80" stroke="#eef4ff" strokeWidth="20"></circle>
              <circle cx="96" cy="96" fill="none" r="80" stroke="#03224d" strokeDasharray="502" strokeDashoffset="150" strokeLinecap="round" strokeWidth="20"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black text-primary tracking-tight">72%</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mt-1">Preventive</span>
            </div>
          </div>
          
          <div className="w-full mt-10 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium text-on-surface-variant">Preventive</span>
              </div>
              <span className="text-sm font-bold text-on-surface">72%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-surface-container-high"></div>
                <span className="text-sm font-medium text-on-surface-variant">Corrective</span>
              </div>
              <span className="text-sm font-bold text-on-surface">28%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Interventions Table */}
      <Card noPadding>
        <div className="px-8 py-6 flex justify-between items-center border-b border-surface-container">
          <h4 className="text-lg font-bold text-on-surface">Recent Interventions</h4>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                <th className="px-8 py-4">ID Reference</th>
                <th className="px-8 py-4">Client</th>
                <th className="px-8 py-4 text-center">Priority</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {recentInterventions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <tr key={i} className="hover:bg-surface-container-low/50 transition-colors duration-150 group cursor-pointer">
                    <td className="px-8 py-5 text-sm font-bold text-on-surface">{item.id}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
                          <Icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-on-surface">{item.client}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <Badge variant={item.priority as any}>{item.priority === 'danger' ? 'High' : item.priority === 'warning' ? 'Low' : 'Medium'}</Badge>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${item.status === 'In Progress' ? 'bg-tertiary animate-pulse' : 'bg-primary-container'}`}></div>
                        <span className="text-sm font-medium text-on-surface">{item.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
}

// Missing icon imports for the array
import { Wrench, Server, Zap } from 'lucide-react';
