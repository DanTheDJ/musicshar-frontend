
FROM node:12 AS build-env

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:prod

FROM nginx:alpine

COPY --from=build-env /app/dist /usr/share/nginx/html
#COPY --from=build-env /app/src/robots.txt /usr/share/nginx/html/robots.txt
#COPY --from=build-env /app/src/manifest.json /usr/share/nginx/html/manifest.json
COPY /config/nginx.conf /etc/nginx/nginx.conf
