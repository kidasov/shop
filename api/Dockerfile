FROM node:12.13-alpine As development

WORKDIR /home/bubu/shop/api

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:12.13-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/bubu/shop/api

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /home/bubu/shop/api/dist ./dist

CMD ["node", "dist/main"]