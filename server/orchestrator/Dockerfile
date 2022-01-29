FROM node:16.13
WORKDIR /usr/local/orchestrator
ENV PORT=4000
ENV REDIS_PORT=18451
ENV REDIS_HOST=redis-18451.c10.us-east-1-4.ec2.cloud.redislabs.com
ENV REDIS_DB_PASSWORD=tu3zEqCx0atJJGAY2Q7p4PbF1OB4Q5Kg
COPY package.json package-lock.json /usr/local/orchestrator/
RUN npm install && npm cache clean --force
COPY ./ ./
CMD ["npm","run","start"]