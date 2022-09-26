FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm i 

RUN npm run build

ENV NODE_ENV production

EXPOSE 8080

CMD [ "npx", "serve", "build" ]