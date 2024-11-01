# Use an official Node.js runtime as a parent image
FROM node:lts-alpine3.20

ARG NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ARG NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
ARG NEXTAUTH_URL=${NEXTAUTH_URL}

# Install Yarn package manager
# RUN apk add --no-cache npm

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install dependencies
RUN npm install --production=true

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm build

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
