# Dockerfile
# Build a lightweight container for Node.js app

FROM node:21

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the app
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
