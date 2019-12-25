# Build Environment
FROM node:13.2.0-alpine
WORKDIR /app
COPY . /app
RUN npm i -g serve && \
    npm i --silent && \
    npm run build
# Run Prod
CMD [ "serve", "-s", "build", "-l", "8080" ]