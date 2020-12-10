FROM node:10

# Set working directory
WORKDIR /app
# Copy package.json and install packages
COPY package.json .
RUN npm install
# Copy other project files and build
COPY . ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]