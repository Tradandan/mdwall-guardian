import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLoad: number;
}

export interface NetworkConnection {
  state: string;
  count: number;
}

// Get real system metrics using Linux commands
export const getSystemMetrics = async (): Promise<SystemMetrics> => {
  try {
    // CPU Usage
    const { stdout: cpuOut } = await execAsync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}'");
    const cpuUsage = parseFloat(cpuOut);

    // Memory Usage
    const { stdout: memOut } = await execAsync("free | grep Mem | awk '{print ($3/$2) * 100}'");
    const memoryUsage = parseFloat(memOut);

    // Disk Usage
    const { stdout: diskOut } = await execAsync("df / | tail -1 | awk '{print $5}' | sed 's/%//'");
    const diskUsage = parseFloat(diskOut);

    // Network Load (in MB/s)
    const { stdout: netOut } = await execAsync("ifstat 1 1 | tail -1 | awk '{print $1}'");
    const networkLoad = parseFloat(netOut);

    return {
      cpuUsage: isNaN(cpuUsage) ? 0 : cpuUsage,
      memoryUsage: isNaN(memoryUsage) ? 0 : memoryUsage,
      diskUsage: isNaN(diskUsage) ? 0 : diskUsage,
      networkLoad: isNaN(networkLoad) ? 0 : networkLoad,
    };
  } catch (error) {
    console.error('Error fetching system metrics:', error);
    return {
      cpuUsage: 0,
      memoryUsage: 0,
      diskUsage: 0,
      networkLoad: 0,
    };
  }
};

// Get real network connections using netstat
export const getNetworkConnections = async (): Promise<NetworkConnection[]> => {
  try {
    const { stdout } = await execAsync("netstat -ant | awk '{print $6}' | sort | uniq -c");
    const connections = stdout
      .trim()
      .split('\n')
      .map(line => {
        const [count, state] = line.trim().split(/\s+/);
        return {
          state,
          count: parseInt(count, 10)
        };
      });
    return connections;
  } catch (error) {
    console.error('Error fetching network connections:', error);
    return [];
  }
};

// Get real firewall rules using iptables
export const getFirewallRules = async () => {
  try {
    const { stdout } = await execAsync('sudo iptables -L -n');
    return stdout.split('\n');
  } catch (error) {
    console.error('Error fetching firewall rules:', error);
    return [];
  }
};