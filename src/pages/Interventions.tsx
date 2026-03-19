import { motion } from 'motion/react';
import { Plus, Calendar, MoreVertical, Timer, HardHat, AlertTriangle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export default function Interventions() {
  const interventions = [
    { id: '#INT-8842', client: 'SteelCorp Industries', site: 'Plant A - Detroit', type: 'Corrective', equipment: 'Hydraulic Press v4', priority: 'Critical', tech: 'John Doe', techInitials: 'JD', status: 'In Progress' },
    { id: '#INT-8841', client: 'BlueWave Logistics', site: 'Hub 04 - Chicago', type: 'Preventive', equipment: 'Conveyor Belt System', priority: 'Medium', tech: 'Alice Smith', techInitials: 'AS', status: 'Resolved' },
    { id: '#INT-8840', client: 'AeroGen Solutions', site: 'Turbine Field - Austin', type: 'Corrective', equipment: 'GT-500 Generator', priority: 'High', tech: 'Mark K.', techInitials: 'MK', status: 'Not Resolved' },
    { id: '#INT-8839', client: 'Urban Grid Co.', site: 'Substation 09 - Miami', type: 'Preventive', equipment: 'Transformer Unit 2', priority: 'Medium', tech: 'Sarah L.', techInitials: 'SL', status: 'In Progress' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-on-surface mb-2">Operations Flow</h2>
          <p className="text-on-surface-variant font-medium max-w-lg">Monitoring real-time maintenance cycles and technical deployments across active industrial sectors.</p>
        </div>
        <button className="primary-gradient text-on-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-all">
          <Plus size={20} />
          <span>Add Intervention</span>
        </button>
      </div>

      {/* Filter Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="flex flex-col gap-3 p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">Priority Range</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-surface-container text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">Critical</button>
            <button className="px-3 py-1.5 bg-surface-container text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">High</button>
            <button className="px-3 py-1.5 bg-surface-container text-xs font-semibold rounded-full hover:bg-primary hover:text-white transition-colors">Medium</button>
          </div>
        </Card>
        
        <Card className="flex flex-col gap-3 p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">Date Scope</span>
          <div className="flex items-center gap-2 text-sm font-bold text-on-surface mt-1">
            <Calendar size={18} className="text-on-surface-variant" />
            <span>Oct 12 - Oct 26, 2023</span>
          </div>
        </Card>

        <Card className="flex flex-col gap-3 p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">Global Status</span>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex -space-x-2">
              <div className="w-3 h-3 rounded-full bg-tertiary-fixed border-2 border-white"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-container border-2 border-white"></div>
              <div className="w-3 h-3 rounded-full bg-error-container border-2 border-white"></div>
            </div>
            <span className="text-xs font-bold">124 Active Tasks</span>
          </div>
        </Card>

        <Card className="flex items-center justify-between p-5">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70">Quick Filter</span>
            <span className="text-sm font-bold text-on-surface mt-1">Show Corrective Only</span>
          </div>
          <div className="w-10 h-6 bg-primary-container rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
          </div>
        </Card>
      </div>

      {/* Data Table */}
      <Card noPadding className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Site / City</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Equipment</th>
                <th className="px-6 py-4">Priority</th>
                <th className="px-6 py-4">Technician</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {interventions.map((row, i) => (
                <tr key={i} className="hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-primary">{row.id}</td>
                  <td className="px-6 py-5">
                    <div className="font-bold text-sm text-on-surface">{row.client}</div>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">{row.site}</td>
                  <td className="px-6 py-5">
                    <Badge variant={row.type === 'Corrective' ? 'neutral' : 'primary'}>{row.type}</Badge>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-on-surface">{row.equipment}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        row.priority === 'Critical' ? 'bg-error' : 
                        row.priority === 'High' ? 'bg-orange-500' : 'bg-secondary'
                      }`}></div>
                      <span className="text-xs font-bold text-on-surface">{row.priority}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
                        {row.techInitials}
                      </div>
                      <span className="text-xs font-medium text-on-surface">{row.tech}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <Badge variant={
                      row.status === 'Resolved' ? 'success' : 
                      row.status === 'Not Resolved' ? 'danger' : 'warning'
                    }>
                      {row.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-variant">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/30 border-t border-outline-variant/10">
          <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">Showing 1 to 4 of 128 interventions</span>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 text-xs font-bold bg-primary text-on-primary rounded-md">1</button>
            <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors">2</button>
            <button className="px-3 py-1.5 text-xs font-bold text-on-surface-variant hover:bg-surface-variant rounded-md transition-colors">3</button>
          </div>
        </div>
      </Card>

      {/* Contextual Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Timer size={24} />
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight text-on-surface">1.4h</div>
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Avg Response Time</div>
          </div>
        </div>
        
        <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <HardHat size={24} />
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight text-on-surface">12</div>
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">Active Technicians</div>
          </div>
        </div>
        
        <div className="bg-surface-container-low p-6 rounded-xl flex items-center gap-5 border-l-4 border-error">
          <div className="w-12 h-12 rounded-full bg-error-container flex items-center justify-center text-error">
            <AlertTriangle size={24} />
          </div>
          <div>
            <div className="text-2xl font-black tracking-tight text-error">03</div>
            <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">High Risk Alerts</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
