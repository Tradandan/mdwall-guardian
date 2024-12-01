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

## Getting Help
If you encounter any issues not covered here, please:
1. Check the existing issues in the repository
2. Open a new issue with detailed information about your problem