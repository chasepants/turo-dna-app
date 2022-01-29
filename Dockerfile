FROM node:latest
WORKDIR /home/node
COPY . .

RUN npm i -g http-server 
RUN npm ci \
    && npm run dev

EXPOSE 8080
ENTRYPOINT ["http-server", "./build"]
