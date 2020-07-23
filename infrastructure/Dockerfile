FROM node:14.5.0-alpine3.12

WORKDIR /src

COPY package.json .

RUN yarn install -D

VOLUME /src
VOLUME /src/node_modules

ENTRYPOINT ["yarn"]