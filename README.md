# Cybersecurity Dashboard

A modern cybersecurity dashboard with user authentication and firewall management capabilities.

## Features

- User Authentication (Admin/Regular users)
- Firewall Rules Management
- Network Traffic Monitoring
- System Status Overview
- Threat Intelligence
- Real-time Alerts

## Quick Start

1. Clone the repository
```bash
git clone <your-repository-url>
cd cybersecurity-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Deployment Guide

### Option 1: Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Deploy to Vercel

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Keep default settings (they work automatically with Vite)
6. Click "Deploy"

### Option 3: Manual Deployment

Follow the [AWS Ubuntu Installation Guide](#aws-ubuntu-installation-guide) below for manual deployment.

## User Guide

### Authentication

1. Access the login page at `/login`
2. Login credentials:
   - Regular user: any email (without "admin") + password (6+ characters)
   - Admin user: any email containing "admin" + password (6+ characters)
   Example:
   - Admin: admin@company.com / password123
   - User: user@company.com / password123

### Firewall Rules Management

1. View existing rules in the Firewall Rules table
2. Add new rule:
   - Click "Add Rule"
   - Fill in rule details
   - Click "Add Rule" to save
3. Delete rule:
   - Click the trash icon next to the rule

### Dashboard Features

- **Network Traffic**: Real-time network traffic visualization
- **System Status**: Overview of system health and metrics
- **Threat Intelligence**: Latest security threats and advisories
- **Recent Alerts**: Security alerts and notifications

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

## Troubleshooting

1. **Login Issues**
   - Ensure password is at least 6 characters
   - Check if email format is valid
   - For admin access, include "admin" in email

2. **Build Errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

3. **Deployment Issues**
   - Verify build succeeds locally first
   - Check deployment platform logs
   - Ensure all environment variables are set

## Support

For support, please open an issue in the repository.
