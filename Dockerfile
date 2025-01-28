FROM node:22 AS builder
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:alpine AS static-prod
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80

FROM node:22-alpine AS server-prod
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist /usr/src/app/dist