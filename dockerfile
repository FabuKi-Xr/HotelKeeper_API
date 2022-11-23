# สร้าง stage สำหรับ dev
FROM node:17.7.2-alpine As dev 

# สร้าง directory ของงาน
WORKDIR /usr/src/app

# ติดตั้ง dependencies
# wildcard ใช้เพื่อcopy ทั้ง package.json และ package-lock.json
COPY package*.json ./

#สร้างโฟลเดอร์+ไฟล์ prisma
COPY prisma ./prisma/
COPY .env ./
#copy config ของ 
COPY tsconfig.json ./

RUN yarn add glob rimraf
RUN yarn --only=dev

ENV TZ=Asia/Bangkok
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

#รวมโค้ด
COPY . . 

#install dependencies
RUN yarn install

#generate prisma client
RUN npx prisma generate

RUN yarn build

#สร้าง stage สำหรับlaunch product
FROM node:17.7.2-alpine As product

#กำหนดตัวแปรตอน build
ARG NODE_ENV=product
#กำหนดตัวแปรenv ให้ตอนทำ image และ container
ENV NODE_ENV = ${NODE_ENV}

WORKDIR /usr/src/app

# wildcard ใช้เพื่อcopy ทั้ง package.json และ package-lock.json
COPY package*.json ./

#สร้างโฟลเดอร์+ไฟล์ prisma
COPY prisma ./prisma/

RUN yarn add glob rimraf
RUN yarn --only=dev

#รวมโค้ด
COPY . . 
#install dependencies
RUN yarn install

#generate prisma client
RUN npx prisma generate

ENV TZ=Asia/Bangkok
RUN apk add --no-cache tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000
COPY --from=dev /usr/src/app/dist ./dist
CMD ["node", "dist/main"]

