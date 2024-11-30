import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const trafficData = [
  { time: '00:00', inbound: 400, outbound: 240, tcp: 300, udp: 340 },
  { time: '03:00', inbound: 300, outbound: 139, tcp: 200, udp: 239 },
  { time: '06:00', inbound: 200, outbound: 980, tcp: 400, udp: 780 },
  { time: '09:00', inbound: 278, outbound: 390, tcp: 278, udp: 390 },
  { time: '12:00', inbound: 189, outbound: 480, tcp: 389, udp: 280 },
  { time: '15:00', inbound: 239, outbound: 380, tcp: 439, udp: 180 },
  { time: '18:00', inbound: 349, outbound: 430, tcp: 349, udp: 430 },
];

const protocolData = [
  { name: 'HTTP', value: 4000 },
  { name: 'HTTPS', value: 3000 },
  { name: 'SSH', value: 2000 },
  { name: 'DNS', value: 2780 },
  { name: 'FTP', value: 1890 },
  { name: 'SMTP', value: 2390 },
];

export const NetworkTraffic = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">Network Traffic Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="traffic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="traffic">Traffic Flow</TabsTrigger>
            <TabsTrigger value="protocols">Protocols</TabsTrigger>
          </TabsList>
          
          <TabsContent value="traffic" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="time" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1A202C',
                    border: '1px solid #2D3748'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="inbound" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  name="Inbound"
                />
                <Line 
                  type="monotone" 
                  dataKey="outbound" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  name="Outbound"
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>

          <TabsContent value="protocols" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={protocolData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D3748" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A202C',
                    border: '1px solid #2D3748'
                  }}
                />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};