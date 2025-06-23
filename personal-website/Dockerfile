# Step 1: Use an official Node.js image as the base image for building the app
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code
COPY . .

# Step 6: Build the Vite app for production
RUN npm run build

# Step 7: Use Nginx to serve the built app
FROM nginx:alpine

# Step 8: Copy the Vite build output from the previous build step
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 for the app to be accessible
EXPOSE 80

# Step 10: Run Nginx in the foreground to serve the app
CMD ["nginx", "-g", "daemon off;"]
