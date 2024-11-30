import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Shield, XCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "critical",
    message: "Brute force attack detected",
    time: "2 min ago",
    icon: XCircle,
  },
  {
    id: 2,
    type: "warning",
    message: "Unusual traffic pattern",
    time: "15 min ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "info",
    message: "System update available",
    time: "1 hour ago",
    icon: Shield,
  },
];

export const RecentAlerts = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">Recent Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-background/10"
            >
              <alert.icon
                className={`w-5 h-5 mt-1 ${
                  alert.type === "critical"
                    ? "text-cyber-alert-critical"
                    : alert.type === "warning"
                    ? "text-cyber-alert-warning"
                    : "text-cyber-alert-success"
                }`}
              />
              <div className="flex-1">
                <p className="font-medium">{alert.message}</p>
                <p className="text-sm text-cyber-foreground/60">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};