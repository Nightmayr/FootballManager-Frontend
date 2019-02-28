FROM node:latest as client-build
WORKDIR /build
ENV PATH /build/node_modules/.bin:$PATH
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000