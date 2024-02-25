# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm", "preview"]