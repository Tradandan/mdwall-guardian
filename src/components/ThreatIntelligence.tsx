import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, AlertTriangle, Ban } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const threats = [
  {
    id: 1,
    ip: "192.168.1.100",
    type: "Malware",
    confidence: "High",
    lastSeen: "2 min ago",
    status: "Blocked",
  },
  {
    id: 2,
    ip: "10.0.0.15",
    type: "Brute Force",
    confidence: "Medium",
    lastSeen: "15 min ago",
    status: "Monitoring",
  },
  {
    id: 3,
    ip: "172.16.0.25",
    type: "Data Exfiltration",
    confidence: "High",
    lastSeen: "1 hour ago",
    status: "Blocked",
  },
];

export const ThreatIntelligence = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Threat Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="flex items-center justify-between p-3 rounded-lg bg-background/10"
            >
              <div className="flex items-center gap-3">
                {threat.status === "Blocked" ? (
                  <Ban className="h-5 w-5 text-red-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
                <div>
                  <p className="font-medium">{threat.ip}</p>
                  <p className="text-sm text-cyber-foreground/60">{threat.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Badge
                  variant={threat.status === "Blocked" ? "destructive" : "default"}
                >
                  {threat.status}
                </Badge>
                <span className="text-sm text-cyber-foreground/60">
                  {threat.lastSeen}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};