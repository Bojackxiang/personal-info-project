FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx
EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html