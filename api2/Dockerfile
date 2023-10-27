FROM node:18

RUN git clone --recurse-submodules https://github.com/DefiLlama/defillama-server /app

WORKDIR /app/defi

RUN cd DefiLlama-Adapters && git checkout main && git pull

RUN npm install

CMD ["npm", "run", "api2-start-server"]
EXPOSE 5001