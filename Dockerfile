FROM quay.octanner.io/base/oct-node:8.4.0-0.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
CMD [ "npm", "start" ]