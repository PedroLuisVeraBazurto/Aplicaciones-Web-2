FROM node:14

COPY . /app
WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .
ENV PORT 4000
ENV MONGODB_CNN mongodb://mongo:27017/test
EXPOSE 4000

CMD [ "npm", "run", "dev" ]