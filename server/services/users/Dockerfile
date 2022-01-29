FROM node:16.13
WORKDIR /usr/local/app
ENV PORT=4001
ENV MONGO_URI=mongodb+srv://joanes:Johannes1@cluster0.kz7mn.mongodb.net/Cluster0?retryWrites=true&w=majority
COPY package.json package-lock.json /usr/local/app/
RUN npm install && npm cache clean --force
COPY ./ ./
CMD ["npm", "run", "start"]