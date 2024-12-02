// Simulated system monitoring utilities using browser-compatible code
import { faker } from '@faker-js/faker';

export interface SystemMetrics {
  cpuUsage: number;
  memoryUsage: number;
  diskUsage: number;
  networkLoad: number;
}

// Simulate system metrics with realistic values
export const getSystemMetrics = async (): Promise<SystemMetrics> => {
  return {
    cpuUsage: faker.number.float({ min: 0, max: 100, precision: 0.1 }),
    memoryUsage: faker.number.float({ min: 20, max: 90, precision: 0.1 }),
    diskUsage: faker.number.float({ min: 30, max: 85, precision: 0.1 }),
    networkLoad: faker.number.float({ min: 0, max: 100, precision: 0.1 }),
  };
};

// Simulate network connections with realistic states
export const getNetworkConnections = async () => {
  const states = ['ESTABLISHED', 'LISTEN', 'TIME_WAIT', 'CLOSE_WAIT', 'SYN_SENT'];
  return states.map(state => ({
    state,
    count: faker.number.int({ min: 1, max: 50 }),
  }));
};

// Simulate firewall rules
export const getFirewallRules = async () => {
  const rules = [];
  const chains = ['INPUT', 'OUTPUT', 'FORWARD'];
  
  for (let i = 0; i < faker.number.int({ min: 5, max: 10 }); i++) {
    rules.push(`Chain ${faker.helpers.arrayElement(chains)} (policy ACCEPT)`);
    rules.push(`target     prot opt source               destination`);
    rules.push(`ACCEPT     tcp  --  anywhere             anywhere             tcp dpt:${faker.internet.port()}`);
  }
  
  return rules;
};