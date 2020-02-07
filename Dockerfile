FROM node:alpine3.10
WORKDIR /app
COPY package.json .
RUN npm i
COPY . . 
EXPOSE 80
CMD [ "npm","run","start" ]