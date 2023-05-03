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

# Set environment variables
ENV STRING_CONEXAO_DB=${DATABASE_URL}

EXPOSE 3000

##HEALTHCHECK CMD curl --fail http://localhost:$PORT || exit 1 
CMD ["npm", "start"]
