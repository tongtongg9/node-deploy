# base image (FROM 'IMAGE NAME')
FROM node:14-alpine

# Working Directory (WORKDIR)
WORKDIR /usr/src/app

# Copy package.json (ส่วนนี้ไม่ค่อยมีการเปลี่ยนแปลงจะดึงจาก cache ในรอบถัดไป)
COPY ./package.json ./

RUN npm i

# Copy file (. . => all file) from host to container
COPY . .

EXPOSE 3000

# Default Command
CMD [ "npm", "start" ]