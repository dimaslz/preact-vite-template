FROM node:16.15.1-alpine3.16

WORKDIR /app

COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]`;