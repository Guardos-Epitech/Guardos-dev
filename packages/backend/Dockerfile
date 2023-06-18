FROM node:latest

WORKDIR /app

COPY packages/backend /app

COPY packages/shared ../shared

RUN npm install -g ts-node

RUN npm install -g typescript

RUN npm install -g --save-dev ts-node typescript

RUN npm install 

EXPOSE 8081

CMD ["npm", "run", "start:app"]
