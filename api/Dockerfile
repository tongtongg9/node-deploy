# base image (FROM 'IMAGE NAME')
FROM node:14-alpine

# Working Directory (WORKDIR)
WORKDIR /usr/src/app

# Copy package.json (ส่วนนี้ไม่ค่อยมีการเปลี่ยนแปลงจะดึงจาก cache ในรอบถัดไป)
COPY ./package*.json /usr/src/app/

RUN npm i

# Copy file (. . => all file) from host to container
COPY . /usr/src/app/

EXPOSE 5003

# Default Command
CMD [ "npm", "start" ]