FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
ENV PORT 3000
EXPOSE 3000
COPY . /app
CMD node server/index.js