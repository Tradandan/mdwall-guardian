import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { time: '00:00', inbound: 400, outbound: 240 },
  { time: '03:00', inbound: 300, outbound: 139 },
  { time: '06:00', inbound: 200, outbound: 980 },
  { time: '09:00', inbound: 278, outbound: 390 },
  { time: '12:00', inbound: 189, outbound: 480 },
  { time: '15:00', inbound: 239, outbound: 380 },
  { time: '18:00', inbound: 349, outbound: 430 },
];

export const NetworkTraffic = () => {
  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-cyber-accent">Network Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
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
              />
              <Line 
                type="monotone" 
                dataKey="outbound" 
                stroke="#10B981" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};