# Cybersecurity Dashboard

## AWS Ubuntu Installation Guide

### 1. Prerequisites
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2
```

### 2. Application Setup
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

### 3. Nginx Setup
```bash
# Install Nginx
sudo apt install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/cybersecurity-dashboard

# Add configuration:
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

# Enable site
sudo ln -s /etc/nginx/sites-available/cybersecurity-dashboard /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Setup (Recommended)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```

### 5. Firewall Setup
```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
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

### Environment Variables
Create `.env` file:
```
VITE_API_URL=your-api-url
VITE_AUTH_KEY=your-auth-key
```

### Updating Application
```bash
git pull
npm install
npm run build
pm2 restart cybersecurity-dashboard
```

For support, please open an issue in the repository.