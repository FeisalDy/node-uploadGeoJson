FROM node:18

#Working dir
WORKDIR /usr/src/app

#copy package.json
COPY package*.json ./

RUN npm install prettier -g
RUN npm install

#Copy source files
COPY . .

# RUN npm run build

EXPOSE 8080

CMD ["node", "server.js"]