# --------------------------
# 1️⃣ Build stage
# --------------------------
FROM node:20 AS build

# Working directory
WORKDIR /app

# Package.json és package-lock.json másolása
COPY package*.json ./

# Dependencies telepítése
RUN npm ci

# Az Angular CLI telepítése globálisan
RUN npm install -g @angular/cli

# A teljes frontend forrás másolása
COPY . .

# Angular build (production)
RUN ng build --configuration production

# --------------------------
# 2️⃣ Nginx stage
# --------------------------
FROM nginx:alpine

# Az Nginx default html törlése
RUN rm -rf /usr/share/nginx/html/*

# Angular build átmásolása az Nginx html mappájába
COPY --from=build ./dist/my-angular-app /usr/share/nginx/html

# Port 80 nyitva
EXPOSE 80

# Indítás Nginx-szel
CMD ["nginx", "-g", "daemon off;"]
