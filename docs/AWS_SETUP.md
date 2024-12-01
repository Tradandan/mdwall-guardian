# AWS Ubuntu Installation Guide

## 1. Prerequisites
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2
```

## 2. Application Setup
```bash
# Clone repository
git clone <your-repository-url>
cd cybersecurity-dashboard

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "cybersecurity-dashboard" -- start
```

For complete setup instructions including Nginx and SSL configuration, please refer to our [detailed AWS guide](https://docs.example.com/aws-setup).