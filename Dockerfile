FROM node:13.12.0-alpine
WORKDIR /usr/src/app 
COPY package*.json ./
RUN npm install --only=production
COPY ./src ./src
EXPOSE 3000
CMD npm run 