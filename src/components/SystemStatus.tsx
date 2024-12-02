import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircleOff, Shield, Activity, Cpu, Network, Database, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getSystemMetrics, SystemMetrics } from "@/utils/systemMonitor";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export const SystemStatus = () => {
  const { toast } = useToast();
  
  const { data: metrics, error } = useQuery({
    queryKey: ['systemMetrics'],
    queryFn: getSystemMetrics,
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch system metrics. Ensure monitoring tools are installed.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const getStatusColor = (value: number) => {
    if (value > 90) return "text-cyber-alert-critical";
    if (value > 70) return "text-cyber-alert-warning";
    return "text-cyber-alert-success";
  };

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
            status={metrics ? "Active" : "Checking..."}
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Activity}
            label="IDS/IPS"
            status={metrics ? "Monitoring" : "Checking..."}
            statusColor="text-cyber-alert-success"
          />
          <StatusItem
            icon={Cpu}
            label="CPU Usage"
            status={metrics ? `${metrics.cpuUsage.toFixed(1)}%` : "Checking..."}
            statusColor={metrics ? getStatusColor(metrics.cpuUsage) : "text-cyber-alert-warning"}
          />
          <StatusItem
            icon={Database}
            label="Memory Usage"
            status={metrics ? `${metrics.memoryUsage.toFixed(1)}%` : "Checking..."}
            statusColor={metrics ? getStatusColor(metrics.memoryUsage) : "text-cyber-alert-warning"}
          />
          <StatusItem
            icon={Network}
            label="Network Load"
            status={metrics ? `${metrics.networkLoad.toFixed(1)} MB/s` : "Checking..."}
            statusColor={metrics ? getStatusColor(metrics.networkLoad) : "text-cyber-alert-warning"}
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