# AWS Amazon Linux 2023 Installation Guide

## 1. Prerequisites

```bash
# Switch to root if needed
sudo su -

# Update system
dnf update -y

# Install Node.js (LTS version)
dnf install -y nodejs npm

# Verify installations
node --version
npm --version

# Install development tools
dnf groupinstall "Development Tools" -y

# Install git
dnf install -y git

# Install PM2 globally
npm install -g pm2
```

## 2. Application Setup

```bash
# Create directory for application
mkdir -p /var/www/cybersecurity-dashboard
cd /var/www/cybersecurity-dashboard

# Clone repository (replace with your repository URL)
git clone <your-repository-url> .

# Install dependencies
npm install --legacy-peer-deps

# Create production build
npm run build

# Start application with PM2
pm2 start npm --name "cybersecurity-dashboard" -- start

# Ensure PM2 starts on system reboot
pm2 startup
pm2 save
```

## 3. Nginx Setup

```bash
# Install Nginx
dnf install -y nginx

# Start and enable Nginx
systemctl start nginx
systemctl enable nginx

# Create Nginx configuration
cat > /etc/nginx/conf.d/cybersecurity-dashboard.conf << 'EOL'
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOL

# Test Nginx configuration
nginx -t

# If test passes, reload Nginx
systemctl reload nginx

# Configure firewall
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

## 4. SSL Configuration

```bash
# Install certbot
dnf install -y certbot python3-certbot-nginx

# Obtain SSL certificate (replace with your domain)
certbot --nginx -d your-domain.com

# Auto-renewal is installed by default
```

## 5. Common Issues & Troubleshooting

### Node.js Version Issues
```bash
# If you need a different Node.js version:
dnf module list nodejs
dnf module reset nodejs
dnf module enable nodejs:18
dnf install -y nodejs
```

### NPM Install Failures
```bash
# Clear npm cache
npm cache clean --force

# Try installing with legacy peer deps
npm install --legacy-peer-deps

# If you get EACCES errors:
chown -R $USER:$GROUP ~/.npm
chown -R $USER:$GROUP ~/.config
```

### Port Issues
```bash
# Check if port 3000 is in use
lsof -i :3000

# Kill process if needed
kill -9 <PID>
```

### Permission Issues
```bash
# Set correct ownership
chown -R $USER:$USER /var/www/cybersecurity-dashboard

# Set correct permissions
chmod -R 755 /var/www/cybersecurity-dashboard
```

### SELinux Issues
```bash
# If using SELinux, allow Nginx to proxy
setsebool -P httpd_can_network_connect 1
```

## 6. Monitoring

```bash
# Monitor application logs
pm2 logs

# Monitor Nginx logs
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log

# Check application status
pm2 status
```

## 7. Backup & Maintenance

```bash
# Backup Nginx configuration
cp -r /etc/nginx/conf.d /etc/nginx/conf.d.backup

# Backup SSL certificates
cp -r /etc/letsencrypt /etc/letsencrypt.backup

# Regular updates
dnf update -y
npm update
pm2 update
```

For additional support or custom configurations, please open an issue in the repository.