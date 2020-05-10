FROM node:14.2.0

# Create app directory
RUN mkdir -p /usr/src/node-docker
WORKDIR /usr/src/node-docker

# Install application dependencies
COPY package.json /usr/src/node-docker
RUN npm install

# Copy/bundle app source files
COPY . /usr/src/node-docker

# Build argument
ARG NODE_VERSION=14.2.0

# Environment
ENV NODE_VERSION=${NODE_VERSION}

# CMD ["/bin/bash"]
