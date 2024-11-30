import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Brain, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const suggestions = [
  {
    id: 1,
    rule: "Block SSH access from 192.168.1.100",
    reason: "Multiple failed login attempts detected",
    severity: "high",
    status: "pending",
  },
  {
    id: 2,
    rule: "Rate limit HTTP requests from 10.0.0.15",
    reason: "Unusual traffic pattern detected",
    severity: "medium",
    status: "pending",
  },
  {
    id: 3,
    rule: "Block outbound traffic to known C&C server",
    reason: "Potential malware communication",
    severity: "high",
    status: "pending",
  },
];

export const AIRulesSuggestions = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent flex items-center gap-2">
          <Brain className="h-5 w-5" />
          AI Rule Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="flex flex-col gap-2 p-3 rounded-lg bg-background/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium">{suggestion.rule}</p>
                  <p className="text-sm text-cyber-foreground/60">
                    {suggestion.reason}
                  </p>
                </div>
                <Badge
                  variant={suggestion.severity === "high" ? "destructive" : "default"}
                >
                  {suggestion.severity}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  size="sm"
                  className="flex items-center gap-1"
                  variant="default"
                >
                  <Check className="h-4 w-4" />
                  Apply
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <X className="h-4 w-4" />
                  Dismiss
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};