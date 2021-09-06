FROM node:14-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.20.1-alpine

COPY --from=build /app/dist/sho-ten-app /usr/share/nginx/html
EXPOSE 80
