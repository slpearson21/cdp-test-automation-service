FROM node:14 as builder

ARG NPM_TOKEN

WORKDIR /code

COPY package*.json ./
COPY .npmrc ./

RUN npm ci

COPY . .
RUN npm run lint
RUN npm run test

FROM gcr.io/distroless/nodejs:14 as runtime

WORKDIR /code
COPY --from=builder /code .

CMD ["./src/apis/rest/bin/www"]
