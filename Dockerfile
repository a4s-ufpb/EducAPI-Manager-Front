# stage 1

FROM node:14.15 AS educapi-project
WORKDIR /EducAPI-Manager-Front
COPY . .
RUN npm install && npm run build --prod

# stage 2

FROM nginx:alpine
COPY --from=educapi-project /EducAPI-Manager-Front/nginx/nginx.conf /etc/nginx/
COPY --from=educapi-project /EducAPI-Manager-Front/nginx/security-headers.conf /etc/nginx/
COPY --from=educapi-project /EducAPI-Manager-Front/dist/EducAPI-Manager /usr/share/nginx/html
EXPOSE 80
