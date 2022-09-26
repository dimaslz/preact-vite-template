FROM node:16.5.1

WORKDIR /app

COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]`;