# Troubleshooting Guide

## Common Issues

### 1. Login Issues
- Ensure password is at least 6 characters
- Check if email format is valid
- For admin access, include "admin" in email

### 2. Build Errors
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules`
- Reinstall dependencies: `npm install`

### 3. Deployment Issues
- Verify build succeeds locally first
- Check deployment platform logs
- Ensure all environment variables are set

### 4. System Monitoring
- Ensure proper permissions for monitoring tools
- Verify network connectivity
- Check firewall configurations
- Validate system logging settings

### 5. Demo Mode
- If using demo mode, data is simulated
- Real monitoring requires Linux system configuration
- Ensure required system tools are installed for production use

## Getting Help
If you encounter any issues not covered here, please:
1. Check the existing issues in the repository
2. Open a new issue with detailed information about your problem
3. Include system configuration details when reporting issues