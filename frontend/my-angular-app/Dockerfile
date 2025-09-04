# --------------------------
# 1️⃣ Build stage
# --------------------------
FROM node:20 AS build

# Munka könyvtár
WORKDIR /app

# Package fájlok másolása és dependencies telepítése
COPY package*.json ./
RUN npm ci

# Angular CLI telepítése globálisan
RUN npm install -g @angular/cli

#angular matarial hozzáadás
RUN  ng add @angular/material

# Teljes frontend forrás másolása
COPY . .

# Angular production build
# ⚠️ Ellenőrizd az angular.json outputPath értékét!
RUN ng build --configuration production

# --------------------------
# 2️⃣ Nginx stage
# --------------------------
FROM nginx:alpine

# Alapértelmezett html törlése
RUN rm -rf /usr/share/nginx/html/*

# Angular build átmásolása az Nginx html könyvtárába
# ⚠️ Cseréld ki a <build-output> részt az angular.json outputPath-jára pl. 'my-angular-app' vagy 'browser'
COPY --from=build /app/dist/my-angular-app/browser /usr/share/nginx/html

# Saját Nginx config másolása
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Port 80 nyitva az Nginx számára
EXPOSE 80

# Indítás Nginx-szel
CMD ["nginx", "-g", "daemon off;"]
