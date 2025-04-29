FROM node:22

WORKDIR /usr/src/app

# copy server files
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD ["npm", "start"]
