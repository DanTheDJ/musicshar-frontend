
FROM node:12 AS build-env

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

FROM nginx:alpine

COPY --from=build-env /app/dist /usr/share/nginx/html
COPY /config/nginx.conf /etc/nginx/nginx.conf
