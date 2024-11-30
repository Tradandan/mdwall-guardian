import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircleOff, Shield, Activity, Cpu, Network, Database, Users } from "lucide-react";

export const SystemStatus = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">System Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <StatusItem
            icon={Shield}
            label="Firewall"
            status="Active"
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Activity}
            label="IDS/IPS"
            status="Monitoring"
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={CircleOff}
            label="Threats Blocked"
            status="23 Today"
            statusColor="text-cyber-alert-warning"
          />
          <StatusItem
            icon={Cpu}
            label="System Load"
            status="Normal"
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Network}
            label="Network Status"
            status="Optimal"
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Database}
            label="Database"
            status="Connected"
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Users}
            label="Active Users"
            status="15"
            statusColor="text-cyber-alert-success"
          />
        </div>
      </CardContent>
    </Card>
  );
};

const StatusItem = ({ 
  icon: Icon, 
  label, 
  status, 
  statusColor 
}: { 
  icon: any;
  label: string;
  status: string;
  statusColor: string;
}) => {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg bg-background/10">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-cyber-accent" />
        <span>{label}</span>
      </div>
      <span className={statusColor}>{status}</span>
    </div>
  );
};