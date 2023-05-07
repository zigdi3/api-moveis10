# Set base image to alpine
FROM node:18.12.1-alpine

# Install Node.js and NPM
RUN apk add --no-cache nodejs npm

# Set working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./ ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Arguments
ARG DATABASE_URL 
ARG PORT=3000
# Set environment variables
ENV DB_URI=${DATABASE_URL}
ENV PORT=${PORT}

EXPOSE ${PORT} 

##HEALTHCHECK CMD curl --fail http://localhost:$PORT || exit 1 
CMD ["npm", "docker", "--port", "$PORT"]
