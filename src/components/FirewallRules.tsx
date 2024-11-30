import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const initialRules = [
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
  const [rules, setRules] = useState(initialRules);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newRule, setNewRule] = useState({
    name: "",
    source: "",
    destination: "",
    port: "",
    action: "Block",
  });

  const handleAddRule = () => {
    const rule = {
      ...newRule,
      id: rules.length + 1,
      status: "Active",
    };
    setRules([...rules, rule]);
    setIsAddDialogOpen(false);
    setNewRule({
      name: "",
      source: "",
      destination: "",
      port: "",
      action: "Block",
    });
  };

  const handleDeleteRule = (id: number) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-cyber-accent">Firewall Rules</CardTitle>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Rule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Firewall Rule</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Input
                  placeholder="Rule Name"
                  value={newRule.name}
                  onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Source"
                  value={newRule.source}
                  onChange={(e) => setNewRule({ ...newRule, source: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Destination"
                  value={newRule.destination}
                  onChange={(e) => setNewRule({ ...newRule, destination: e.target.value })}
                />
              </div>
              <div>
                <Input
                  placeholder="Port"
                  value={newRule.port}
                  onChange={(e) => setNewRule({ ...newRule, port: e.target.value })}
                />
              </div>
              <div>
                <Select
                  value={newRule.action}
                  onValueChange={(value) => setNewRule({ ...newRule, action: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Block">Block</SelectItem>
                    <SelectItem value="Allow">Allow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddRule} className="w-full">Add Rule</Button>
            </div>
          </DialogContent>
        </Dialog>
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
              <TableHead>Actions</TableHead>
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
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => handleDeleteRule(rule.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};