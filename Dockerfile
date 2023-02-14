FROM node:14-alpine

EXPOSE 3000

COPY . /app

WORKDIR /app

CMD ["npm","start"]