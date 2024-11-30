import { Card } from "@/components/ui/card";
import { NetworkTraffic } from "@/components/NetworkTraffic";
import { FirewallRules } from "@/components/FirewallRules";
import { SystemStatus } from "@/components/SystemStatus";
import { RecentAlerts } from "@/components/RecentAlerts";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-foreground p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-cyber-accent">Cyber Security Dashboard</h1>
        <p className="text-cyber-foreground/80">Real-time network monitoring and protection</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full lg:col-span-2 bg-background/5 border-cyber-accent/20">
          <NetworkTraffic />
        </Card>
        
        <Card className="bg-background/5 border-cyber-accent/20">
          <SystemStatus />
        </Card>
        
        <Card className="lg:col-span-2 bg-background/5 border-cyber-accent/20">
          <FirewallRules />
        </Card>
        
        <Card className="bg-background/5 border-cyber-accent/20">
          <RecentAlerts />
        </Card>
      </div>
    </div>
  );
};

export default Index;