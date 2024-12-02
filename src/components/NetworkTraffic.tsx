import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { getNetworkConnections } from "@/utils/systemMonitor";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export const NetworkTraffic = () => {
  const { toast } = useToast();
  
  const { data: connections, error } = useQuery({
    queryKey: ['networkConnections'],
    queryFn: getNetworkConnections,
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch network data. Ensure netstat is installed.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">Network Traffic Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="connections" className="space-y-4">
          <TabsList>
            <TabsTrigger value="connections">Connections</TabsTrigger>
            <TabsTrigger value="traffic">Traffic Flow</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connections" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={connections}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="state" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A202C',
                    border: '1px solid #2D3748'
                  }}
                />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="traffic" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={connections}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="state" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1A202C',
                    border: '1px solid #2D3748'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="count"
                  stroke="#3B82F6" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};