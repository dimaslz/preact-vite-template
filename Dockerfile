FROM nginx:1.23.1-alpine

WORKDIR /app

ARG VITE_APP_TITLE

COPY /dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]