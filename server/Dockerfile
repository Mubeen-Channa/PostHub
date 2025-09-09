# FROM node:22       Cerate Higher Image size
FROM node:22-alpine  
WORKDIR /app
COPY package*.json ./
# RUN npm install    Create Higher Image Szie
RUN npm install && npm cache clean --force
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
