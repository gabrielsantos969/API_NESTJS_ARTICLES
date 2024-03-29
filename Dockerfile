FROM node:latest

WORKDIR /usr/src/app

COPY . .

COPY ./.env.production ./.env 

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

CMD ["npm", "run", "start:prod"]
