import { NetworkTraffic } from "@/components/NetworkTraffic";
import { SystemStatus } from "@/components/SystemStatus";
import { FirewallRules } from "@/components/FirewallRules";
import { RecentAlerts } from "@/components/RecentAlerts";
import { ThreatIntelligence } from "@/components/ThreatIntelligence";
import { AIRulesSuggestions } from "@/components/AIRulesSuggestions";

const Index = () => {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-cyber-accent mb-6">
        Cybersecurity Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <NetworkTraffic />
        </div>
        <div>
          <SystemStatus />
        </div>
        <div className="lg:col-span-2">
          <FirewallRules />
        </div>
        <div>
          <ThreatIntelligence />
        </div>
        <div>
          <RecentAlerts />
        </div>
        <div>
          <AIRulesSuggestions />
        </div>
      </div>
    </div>
  );
};

export default Index;