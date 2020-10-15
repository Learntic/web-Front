FROM node:latest

WORKDIR /learntic

COPY . .

RUN npm install 

