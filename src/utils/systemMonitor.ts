// System monitoring utilities using node child_process
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLoad: number;
}

export const getSystemMetrics = async (): Promise<SystemMetrics> => {
  try {
    // CPU usage using top
    const { stdout: cpuData } = await execAsync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}'");
    
    // Memory usage using free
    const { stdout: memData } = await execAsync("free | grep Mem | awk '{print $3/$2 * 100.0}'");
    
    // Disk usage using df
    const { stdout: diskData } = await execAsync("df / | tail -1 | awk '{print $5}' | sed 's/%//'");
    
    // Network load using ifstat
    const { stdout: netData } = await execAsync("ifstat -i eth0 1 1 | tail -1 | awk '{print $1}'");

    return {
      cpuUsage: parseFloat(cpuData),
      memoryUsage: parseFloat(memData),
      diskUsage: parseFloat(diskData),
      networkLoad: parseFloat(netData),
    };
  } catch (error) {
    console.error('Error getting system metrics:', error);
    return {
      cpuUsage: 0,
      memoryUsage: 0,
      diskUsage: 0,
      networkLoad: 0,
    };
  }
};

export const getNetworkConnections = async () => {
  try {
    // Get active network connections using netstat
    const { stdout } = await execAsync("netstat -ant | awk '{print $6}' | sort | uniq -c");
    return stdout.trim().split('\n').map(line => {
      const [count, state] = line.trim().split(/\s+/);
      return { state, count: parseInt(count) };
    });
  } catch (error) {
    console.error('Error getting network connections:', error);
    return [];
  }
};

export const getFirewallRules = async () => {
  try {
    // Get iptables rules
    const { stdout } = await execAsync('sudo iptables -L -n');
    return stdout.trim().split('\n');
  } catch (error) {
    console.error('Error getting firewall rules:', error);
    return [];
  }
};