# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:latest

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Build for production.
RUN yarn

# Tell Docker about the port we'll run on.
EXPOSE 8008

# Install `serve` to run the application.
CMD ["npm", "start"]