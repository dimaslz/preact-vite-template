FROM nginx:1.23.1-alpine

WORKDIR /app

COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]