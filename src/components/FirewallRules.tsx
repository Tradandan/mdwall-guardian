import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rules = [
  {
    id: 1,
    name: "Block SSH",
    source: "Any",
    destination: "Internal",
    port: "22",
    action: "Block",
    status: "Active",
  },
  {
    id: 2,
    name: "Allow HTTPS",
    source: "Any",
    destination: "Web Servers",
    port: "443",
    action: "Allow",
    status: "Active",
  },
  {
    id: 3,
    name: "Block Telnet",
    source: "External",
    destination: "Internal",
    port: "23",
    action: "Block",
    status: "Active",
  },
];

export const FirewallRules = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">Firewall Rules</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Port</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rules.map((rule) => (
              <TableRow key={rule.id}>
                <TableCell>{rule.name}</TableCell>
                <TableCell>{rule.source}</TableCell>
                <TableCell>{rule.destination}</TableCell>
                <TableCell>{rule.port}</TableCell>
                <TableCell>
                  <Badge variant={rule.action === "Block" ? "destructive" : "default"}>
                    {rule.action}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-cyber-alert-success/10 text-cyber-alert-success">
                    {rule.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};