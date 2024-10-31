FROM node:20.11.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

ENV HOST 0.0.0.0

CMD ["npm", "start"]