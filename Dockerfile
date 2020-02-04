FROM mhart/alpine-node:11 AS builder
WORKDIR /app/server
COPY . .

COPY /app/server 
CMD ["serve", "-p", "80", "-s", "."]
