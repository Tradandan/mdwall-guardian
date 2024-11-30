# Cybersecurity Dashboard

## Installation Guide

### Prerequisites
- Node.js 16+ and npm (Install via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Local Development Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-directory>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Deployment (AWS Ubuntu)

1. **Setup Ubuntu Server**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Deploy Application**
```bash
# Clone repository
git clone <repository-url>
cd <project-directory>

# Install dependencies
npm install

# Build for production
npm run build

# Start with PM2
pm2 start npm --name "cybersecurity-dashboard" -- start
```

3. **Setup Nginx (Recommended)**
```bash
# Install Nginx
sudo apt install nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/cybersecurity-dashboard

# Add this configuration:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/cybersecurity-dashboard /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

4. **SSL Setup (Optional but Recommended)**
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```

5. **Firewall Configuration**
```bash
# Configure UFW
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_URL=your-api-url
VITE_AUTH_KEY=your-auth-key
```

### Monitoring
```bash
# View logs
pm2 logs

# Monitor application
pm2 monit

# View status
pm2 status
```

### Updating the Application
```bash
# Pull latest changes
git pull

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart the application
pm2 restart cybersecurity-dashboard
```

## Features
- Firewall Rules Management
- Network Traffic Analysis
- System Status Monitoring
- Threat Intelligence
- Real-time Alerts

## Security Considerations
- Always use HTTPS in production
- Regularly update dependencies
- Implement proper authentication
- Monitor system logs
- Keep the Ubuntu system updated

For more details or support, please refer to the documentation or open an issue.