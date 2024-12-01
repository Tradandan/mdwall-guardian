# AWS Amazon Linux 2023 Installation Guide

## 1. Prerequisites

```bash
# Update system
sudo dnf update -y

# Install Node.js and npm
sudo dnf install -y nodejs npm

# Install development tools (needed for some npm packages)
sudo dnf groupinstall "Development Tools" -y

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

## 3. Nginx Setup (Optional)
```bash
# Install Nginx
sudo dnf install nginx -y

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Configure firewall (if enabled)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## 4. SSL Configuration (Optional)
```bash
# Install certbot
sudo dnf install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com
```

## Troubleshooting

1. If npm install fails:
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Try installing with legacy peer deps
   npm install --legacy-peer-deps
   ```

2. If port 3000 is in use:
   ```bash
   # Find process using port 3000
   sudo lsof -i :3000
   
   # Kill the process
   sudo kill -9 <PID>
   ```

For complete setup instructions including advanced Nginx configuration, please refer to our [detailed AWS guide](https://docs.example.com/aws-setup).
```