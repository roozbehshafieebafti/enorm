FROM node:18-alpine

EXPOSE 3000/tcp

WORKDIR /app

COPY . .

RUN yarn install && yarn build

CMD yarn start